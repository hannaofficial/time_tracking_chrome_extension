/******/ (() => { // webpackBootstrap
/*!***********************!*\
  !*** ./background.js ***!
  \***********************/
console.log("Background script of Browsing History Analyzer extension running!");
var browsingHistoryData = null; // Global variable to store history data

function getBrowsingHistory() {
  var startTime = Date.now() - 7 * 24 * 60 * 60 * 1000; // Last 7 days (example)
  chrome.history.search({
    text: '',
    // Empty text to get all history
    startTime: startTime,
    maxResults: 4
  }, function (historyItems) {
    if (chrome.runtime.lastError) {
      console.error("Error fetching browsing history:", chrome.runtime.lastError);
      return; // Exit if history fetch fails
    }
    var historyToStore = historyItems;
    chrome.storage.local.set({
      browsingHistory: historyToStore
    }, function () {
      if (chrome.runtime.lastError) {
        console.error("Error saving history to local storage:", chrome.runtime.lastError);
      } else {
        console.log("Browsing History (last 7 days) fetched and stored in local storage.");
      }
    });
  });
}
function loadHistoryFromStorage(callback) {
  chrome.storage.local.get(['browsingHistory'], function (result) {
    var storedHistory = result.browsingHistory;
    if (storedHistory) {
      console.log("Browsing history loaded from local storage.");
      callback(storedHistory); // Call callback with stored history
    } else {
      console.log("No browsing history found in local storage.");
      callback(null); // Call callback with null if no history
    }
  });
}
chrome.runtime.onStartup.addListener(function () {
  // Or use another event to trigger history fetch
  console.log("Extension started or Chrome browser started!");
  loadHistoryFromStorage(function (storedHistory) {
    if (!storedHistory) {
      getBrowsingHistory(); // Fetch and store if not in storage
    }
  });
  chrome.storage.local.get(['timeData'], function (result) {
    if (!result.timeData) {
      chrome.storage.local.set({
        timeData: {}
      });
    }
  });
});

// Time tracking variables
var startTime = null;
var currentTabId = null;
var currentWindowId = null;
var currentDomain = null;
var currentURL = null;
var currentTitle = null;
var isWindowFocused = true;
var timeData = {};
var pageContentcache = {};

// checking for existing time tracking data
chrome.runtime.onInstalled.addListener(function () {
  console.log("Extension installed or updated!");
  getBrowsingHistory(); // Fetch and store history on install/update

  chrome.storage.local.get(['timeData'], function (result) {
    if (!result.timeData) {
      chrome.storage.local.set({
        timeData: {}
      });
    }
  });
});

// Tracking active tab
function trackActivetab(tab) {
  if (!tab.url || tab.url.startsWith('chrome://')) return; // Ignore Chrome URLs  chrome url is for internal site like chrome://extensions

  var domain = new URL(tab.url).hostname; // Extract domain from URL
  var fullURL = tab.url;
  var title = tab.title;
  var now = Date.now();
  if (currentURL && isWindowFocused && currentTabId) {
    var _duration = now - startTime;
    var nowTime = new Date(now);
    var formattedTime = nowTime.toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      hour12: false // Use 24-hour format 
    });
    console.log("trackingTab Time spent on ".concat(currentURL, " (Title: ").concat(currentTitle, "): ").concat(_duration, " ms saving at ").concat(formattedTime)); // Updated log message
    saveTime(currentURL, currentTitle, _duration); // Pass title to saveTime
  }
  currentDomain = domain;
  currentURL = fullURL;
  currentTitle = title;
  startTime = now;
  currentTabId = tab.id;
  currentWindowId = tab.windowId;
}

// if there is change in tab
// {
//   id: 123,
//   url: "https://example.com",
//   title: "Example Website",
//   active: true,
//   ... // other properties
// }

chrome.tabs.onActivated.addListener(function (activeInfo) {
  console.log("Tab activated:", activeInfo);
  chrome.tabs.get(activeInfo.tabId, function (tab) {
    console.log("Tab details:", tab);
    if (tab.url && !tab.url.startsWith('chrome://')) {
      trackActivetab(tab);
    }
  });
});

// if tab is closed
chrome.tabs.onRemoved.addListener(function (tabId, removeInfo) {
  console.log("Tab removed:", tabId);
  if (tabId === currentTabId) {
    var endtime = Date.now();
    var _duration2 = endtime - startTime;
    console.log("Tab closed: ".concat(currentURL, " (Title: ").concat(currentTitle, "), Duration: ").concat(_duration2, " ms"));
    saveTime(currentURL, currentTitle, _duration2);

    // reset tracking variables
    currentDomain = null;
    currentURL = null;
    currentTitle = null;
    startTime = null;
    currentTabId = null;
  }
});

// if window is closed

chrome.windows.onRemoved.addListener(function (closedwindowId) {
  if (closedwindowId === currentWindowId) {
    var endtime = Date.now();
    console.log("Window closed: ".concat(currentURL, " (Title: ").concat(currentTitle, "), Duration: ").concat(duration, " ms"));
    if (currentURL && isWindowFocused) {
      var _duration3 = endtime - startTime;
      saveTime(currentURL, currentTitle, _duration3);
    }

    // Reset tracking
    currentTabId = null;
    currentDomain = null;
    currentURL = null;
    currentTitle = null;
    startTime = null;
    currentWindowId = null;
  }
});

// if there is a change in URL in the active tab
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  console.log("Tab updated:", changeInfo);
  if (changeInfo.status === 'complete' && tab.active && !tab.url.startsWith('chrome://')) {
    trackActivetab(tab);
  }
});

// it see whether you are focused on the chrome window or others apps window
chrome.windows.onFocusChanged.addListener(function (windowId) {
  var isWindowFocused = windowId !== chrome.windows.WINDOW_ID_NONE;
  if (isWindowFocused) {
    chrome.tabs.query({
      active: true,
      currentWindow: true
    }, function (tabs) {
      if (tabs[0] && tabs[0].url && !tabs[0].url.startsWith('chrome://')) {
        trackActivetab(tabs[0]);
      }
    });
  } else if (currentURL) {
    var _duration4 = Date.now() - startTime;
    console.log('Window unfocused state');
    saveTime(currentURL, currentTitle, _duration4);
    currentDomain = null;
    currentURL = null;
    currentTitle = null;
  }
});

// save time to storage
/** 
 * Below code is actually to tell others coder what will the input of the below function would look like
 * @param {string} url The full URL visited.
 * @param {string} title The title of the page.
 * @param {number} duration The time spent in milliseconds.
 */
function saveTime(url, title, duration) {
  // saveTimeFucntion
  console.log("saveTime CALLED with:", {
    url: url,
    title: title,
    duration: duration
  });
  if (!url || typeof url !== 'string' || typeof duration !== 'number' || isNaN(duration) || duration <= 0) {
    console.warn("saveTime: Invalid input provided.", {
      url: url,
      title: title,
      duration: duration
    });
    return;
  }
  var domain;
  try {
    domain = new URL(url).hostname;
    if (!domain) {
      if (parsedUrl.protocol === "file:") {
        domain = "local_files"; // Group local files under a generic domain
      } else {
        console.warn("saveTime: Could not extract a standard domain from URL \"".concat(url, "\". Using full URL as domain."));
        domain = url; // Fallback to using the full URL if domain extraction is tricky
      }
    }
  } catch (error) {
    console.error("Savetime: Error parsing URL \"".concat(url, "\""), error);
    domain = "invalid_urls";
  }
  var safeTitle = title || "No Title";

  //Implementing extracted content
  var contentFromCache = pageContentcache[url];
  var extractedTextForStorage = contentFromCache ? contentFromCache.text : null;
  var textExtractionTimestamp = contentFromCache ? contentFromCache.timestamp : null;
  chrome.storage.local.get(['timeData'], function (result) {
    console.log("saveTime: Current timeData from storage:", JSON.parse(JSON.stringify(result.timeData || {})));
    var timeData = result.timeData || {};
    if (!timeData[domain]) {
      timeData[domain] = {
        totalTime: 0,
        items: [] // Store title, default to "No Title" if not available
      };
      console.log("saveTime: Initialized new domain: ".concat(domain));
    }
    timeData[domain].totalTime += duration;
    var items = timeData[domain].items;
    /*
     * One doubt here regarding array
     * When I save array to items const the same array timeData[domain].items is copied
     * Now if we change the items array then it will change the array inside timeData[domain] i.e. items inside it
     * Really important concept
    */
    var itemIndex = items.findIndex(function (item) {
      return item.url === url;
    });
    var newUrlTotalTime;
    if (itemIndex > -1) {
      items[itemIndex].time += duration;
      items[itemIndex].title = safeTitle;

      // extractedText
      if (extractedTextForStorage) {
        items[itemIndex].extractedText = extractedTextForStorage;
        items[itemIndex].textExtractedAt = textExtractionTimestamp;
      }
      newUrlTotalTime = items[itemIndex].time;
    } else {
      items.push({
        title: safeTitle,
        url: url,
        time: duration,
        extractedText: extractedTextForStorage,
        textExtractedAt: textExtractionTimestamp
      });
      newUrlTotalTime = duration;
    }
    chrome.storage.local.set({
      timeData: timeData
    }, function () {
      // Check for runtime errors during set
      if (chrome.runtime.lastError) {
        console.error("saveTime: Error saving timeData to storage:", chrome.runtime.lastError);
      } else {
        // Log details about the update
        console.log("Time saved for Domain: ".concat(domain));
        console.log(" -> URL: ".concat(url, " (Title: ").concat(safeTitle, ")"));
        console.log("   -> Added: ".concat(duration, "ms"));
        console.log("   -> New URL Total: ".concat(newUrlTotalTime, "ms"));
        console.log("   -> Domain Total: ".concat(timeData[domain].totalTime, "ms"));
        if (extractedTextForStorage) {
          console.log(" -> Extracted Text (first 50 chars): ".concat(extractedTextForStorage.substring(0, 50), "..."));
        }
        if (textExtractionTimestamp) {
          console.log("   -> Text Extracted At: ".concat(new Date(textExtractionTimestamp).toLocaleString()));
        }
      }
    });
  });
}
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.message === "get_time_data") {
    console.log("Received request for time data");
    chrome.storage.local.get(['timeData'], function (result) {
      var timeData = result.timeData || {};
      console.log("Time data sent:", timeData);
      sendResponse({
        timeData: timeData
      });
    });
    return true;
  }
  if (request.message === "request_history") {
    console.log("Received request for browsing history");
    loadHistoryFromStorage(function (storedHistory) {
      sendResponse({
        history: storedHistory
      }); // Send history via callback we used promise/resolve async/await but it was showing error 
    });
    return true;
  }
  if (request.type === "PAGE_CONTENT_FOR_BACKGROUND") {
    if (request.url && request.extractedText) {
      var _request$extractedTex;
      console.log("Background: Receive content for ".concat(request.url.substring(0, 100), "..."));
      pageContentcache[request.url] = {
        text: (_request$extractedTex = request.extractedText) !== null && _request$extractedTex !== void 0 ? _request$extractedTex : "",
        timestamp: Date.now()
      };
    }
    return true;
  }
  // THis is the project of my life trying to build some product through this I will able to learn through you
  // reset time data
  if (request.message === "reset_time_data") {
    console.log("Received request to reset time data");
    chrome.storage.local.set({
      timeData: {}
    }, function () {
      console.log("Time data reset in storage");
      sendResponse({
        success: true
      }); // Send success response back to popup
    });
    return true; // Keep message channel open for async response
  }
  return true;
});

// Weekly Reset Function (e.g., every Monday at 4:00 AM)
// const resetWeekly = () => {
//   const now = new Date();
//   const nextReset = new Date(now);

//   // Target day: 1 = Monday (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
//   const targetDay = 1;
//   const targetHour = 4; // 4 AM
//   const targetMinute = 0;

//   // Move date forward until it hits the next Monday
//   while (nextReset.getDay() !== targetDay || nextReset <= now) {
//     nextReset.setDate(nextReset.getDate() + 1);
//     nextReset.setHours(targetHour, targetMinute, 0, 0); // Set to 4:00 AM
//   }

//   chrome.alarms.create('weeklyReset', { when: nextReset.getTime() });
// };

// chrome.alarms.onAlarm.addListener((alarm) => {
//   if (alarm.name === 'weeklyReset') {
//     chrome.storage.local.set({ timeData: {} }, () => {
//       console.log("Weekly timeData reset done ✅");
//     });
//     resetWeekly(); // Schedule the next weekly reset
//   }
// });

// // Call this once when the extension starts
// resetWeekly();
/******/ })()
;
//# sourceMappingURL=background.bundle.js.map