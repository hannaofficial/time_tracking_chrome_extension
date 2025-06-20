

console.log("Background script of Browsing History Analyzer extension running!");


let browsingHistoryData = null; // Global variable to store history data


function getBrowsingHistory() {
  const startTime = Date.now() - (7 * 24 * 60 * 60 * 1000); // Last 7 days (example)
  chrome.history.search({
      text: '', // Empty text to get all history
      startTime: startTime,
      maxResults: 4,
  }, (historyItems) => {
      if (chrome.runtime.lastError) {
          console.error("Error fetching browsing history:", chrome.runtime.lastError);
          return; // Exit if history fetch fails
      }
      const historyToStore = historyItems;
      chrome.storage.local.set({ browsingHistory: historyToStore }, () => {
          if (chrome.runtime.lastError) {
              console.error("Error saving history to local storage:", chrome.runtime.lastError);
          } else {
              console.log("Browsing History (last 7 days) fetched and stored in local storage.");
          }
      });
  });
}

function loadHistoryFromStorage(callback) {
  chrome.storage.local.get(['browsingHistory'], (result) => {
      const storedHistory = result.browsingHistory;
      if (storedHistory) {
          console.log("Browsing history loaded from local storage.");
          callback(storedHistory); // Call callback with stored history
      } else {
          console.log("No browsing history found in local storage.");
          callback(null); // Call callback with null if no history
      }
  });
}



chrome.runtime.onStartup.addListener( () => { // Or use another event to trigger history fetch
  console.log("Extension started or Chrome browser started!");
  loadHistoryFromStorage((storedHistory) => {
    if (!storedHistory) {
        getBrowsingHistory(); // Fetch and store if not in storage
    }
});

  chrome.storage.local.get(['timeData'], (result) => {
    if (!result.timeData){
      chrome.storage.local.set({timeData: {}});
    }
  });
});



// Time tracking variables
let startTime = null;
let currentTabId = null;
let currentWindowId = null;
let currentDomain = null;
let currentURL = null;
let currentTitle = null;
let isWindowFocused = true;
let timeData = {};
let pageContentcache = {}

// checking for existing time tracking data
chrome.runtime.onInstalled.addListener( ()=>{

  console.log("Extension installed or updated!");
  getBrowsingHistory(); // Fetch and store history on install/update
  

  chrome.storage.local.get(['timeData'], (result) => {
    if (!result.timeData){
      chrome.storage.local.set({timeData: {}});
    }
  })
})

// Tracking active tab
function trackActivetab(tab){
  if (!tab.url || tab.url.startsWith('chrome://')) return; // Ignore Chrome URLs  chrome url is for internal site like chrome://extensions

  const domain = new URL(tab.url).hostname; // Extract domain from URL
  const fullURL = tab.url;
  const title = tab.title;
  const now = Date.now();

  if (currentURL && isWindowFocused && currentTabId) {
    const duration = now - startTime;
    const nowTime = new Date(now);
    const formattedTime = nowTime.toLocaleString('en-IN', {
                          timeZone: 'Asia/Kolkata',
                          hour12: false, // Use 24-hour format 
                                                               })
    console.log(`trackingTab Time spent on ${currentURL} (Title: ${currentTitle}): ${duration} ms saving at ${formattedTime}`); // Updated log message
    saveTime(currentURL, currentTitle, duration); // Pass title to saveTime
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



chrome.tabs.onActivated.addListener((activeInfo) => {
  console.log("Tab activated:", activeInfo);
  chrome.tabs.get(activeInfo.tabId, (tab) => {
    console.log("Tab details:", tab);
    if (tab.url && !tab.url.startsWith('chrome://')) {
      trackActivetab(tab);
    }
  });
})

// if tab is closed
chrome.tabs.onRemoved.addListener((tabId, removeInfo) => {
  console.log("Tab removed:", tabId);
  if(tabId === currentTabId) {
    const endtime = Date.now();
    const duration = endtime - startTime;
    console.log(`Tab closed: ${currentURL} (Title: ${currentTitle}), Duration: ${duration} ms`);
    saveTime(currentURL, currentTitle, duration);

    // reset tracking variables
    currentDomain = null;
    currentURL = null;
    currentTitle = null;
    startTime = null;
    currentTabId = null;
  }
})

// if window is closed

chrome.windows.onRemoved.addListener((closedwindowId)=>{

  if (closedwindowId === currentWindowId) {
  
    const endtime = Date.now();
    console.log(`Window closed: ${currentURL} (Title: ${currentTitle}), Duration: ${duration} ms`);
    if (currentURL && isWindowFocused) {
      const duration = endtime - startTime;
      saveTime(currentURL, currentTitle, duration);
    }

    // Reset tracking
    currentTabId = null;
    currentDomain = null;
    currentURL = null;
    currentTitle = null;
    startTime = null;
    currentWindowId = null;
  
  }

  

})

// if there is a change in URL in the active tab
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  console.log("Tab updated:", changeInfo);
  if (changeInfo.status === 'complete' && tab.active && !tab.url.startsWith('chrome://')) {
    trackActivetab(tab)
  }
})

// it see whether you are focused on the chrome window or others apps window
chrome.windows.onFocusChanged.addListener((windowId) => {
  const isWindowFocused = windowId !== chrome.windows.WINDOW_ID_NONE
  if (isWindowFocused) {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {

      if (tabs[0] && tabs[0].url && !tabs[0].url.startsWith('chrome://')) {
        trackActivetab(tabs[0]);
      }

    })
  }else if (currentURL){
    const duration = Date.now() - startTime;
    console.log('Window unfocused state')
    saveTime(currentURL, currentTitle, duration);
    currentDomain = null;
    currentURL = null;
    currentTitle = null;
  }

  
})

// save time to storage
/** 
 * Below code is actually to tell others coder what will the input of the below function would look like
 * @param {string} url The full URL visited.
 * @param {string} title The title of the page.
 * @param {number} duration The time spent in milliseconds.
 */
function saveTime(url, title, duration) { // saveTimeFucntion
  console.log("saveTime CALLED with:", { url, title, duration });

  if(!url || typeof url !== 'string' || typeof duration !== 'number' || isNaN(duration) || duration <= 0){

    console.warn("saveTime: Invalid input provided.", {url, title, duration});
    return

  }
  
 let domain;
 try{
  domain = new URL(url).hostname;
  if (!domain){
    if (parsedUrl.protocol === "file:") {
      domain = "local_files"; // Group local files under a generic domain
  } else {
     console.warn(`saveTime: Could not extract a standard domain from URL "${url}". Using full URL as domain.`);
     domain = url; // Fallback to using the full URL if domain extraction is tricky
  }
  }
 }catch(error){
  console.error(`Savetime: Error parsing URL "${url}"`, error);
  domain = "invalid_urls";
  
 }

 const safeTitle = title || "No Title";

 //Implementing extracted content
 const contentFromCache = pageContentcache[url];
 const extractedTextForStorage = contentFromCache ? contentFromCache.text : null;
const textExtractionTimestamp = contentFromCache ? contentFromCache.timestamp : null;


  chrome.storage.local.get(['timeData'], (result) => {

   console.log("saveTime: Current timeData from storage:", JSON.parse(JSON.stringify(result.timeData || {})));

   let timeData = result.timeData || {};
    if (!timeData[domain]) {
      timeData[domain] = {
          totalTime: 0,
          items: [] // Store title, default to "No Title" if not available
          };
          console.log(`saveTime: Initialized new domain: ${domain}`);
                        }
    timeData[domain].totalTime += duration;
    const items = timeData[domain].items;
    /*
     * One doubt here regarding array
     * When I save array to items const the same array timeData[domain].items is copied
     * Now if we change the items array then it will change the array inside timeData[domain] i.e. items inside it
     * Really important concept
    */
    const itemIndex = items.findIndex(item => item.url === url);

    let newUrlTotalTime;
    if (itemIndex > -1){
      items[itemIndex].time += duration;
      items[itemIndex].title = safeTitle;

      // extractedText
      if(extractedTextForStorage){
        items[itemIndex].extractedText = extractedTextForStorage;
        items[itemIndex].textExtractedAt = textExtractionTimestamp;
      }


      newUrlTotalTime = items[itemIndex].time;
    }else{
      items.push({
        title: safeTitle,
        url: url,
        time: duration,
        extractedText: extractedTextForStorage,
        textExtractedAt: textExtractionTimestamp
      });
      newUrlTotalTime = duration;
    }

    chrome.storage.local.set({ timeData: timeData }, () => {
      // Check for runtime errors during set
      if (chrome.runtime.lastError) {
          console.error("saveTime: Error saving timeData to storage:", chrome.runtime.lastError);
      } else {
          // Log details about the update
          console.log(`Time saved for Domain: ${domain}`);
          console.log(` -> URL: ${url} (Title: ${safeTitle})`);
          console.log(`   -> Added: ${duration}ms`);
          console.log(`   -> New URL Total: ${newUrlTotalTime}ms`);
          console.log(`   -> Domain Total: ${timeData[domain].totalTime}ms`);
          if(extractedTextForStorage){
            console.log(` -> Extracted Text (first 50 chars): ${extractedTextForStorage.substring(0,50)}...`)
          }
          if (textExtractionTimestamp) {
            console.log(`   -> Text Extracted At: ${new Date(textExtractionTimestamp).toLocaleString()}`);
        }

      }
  });

})
}



chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message === "get_time_data") {
      console.log("Received request for time data");
      chrome.storage.local.get(['timeData'], (result) => {
          const timeData = result.timeData || {};
          console.log("Time data sent:", timeData);
          sendResponse({ timeData: timeData });
      });
      return true;
  }

  if (request.message === "request_history") {
      console.log("Received request for browsing history");
      loadHistoryFromStorage((storedHistory) => {
          sendResponse({ history: storedHistory }); // Send history via callback we used promise/resolve async/await but it was showing error 
      });
      return true;
  }

  if(request.type === "PAGE_CONTENT_FOR_BACKGROUND"){
    if(request.url && request.extractedText){
      console.log(`Background: Receive content for ${request.url.substring(0,100)}...`);
      pageContentcache[request.url] = {
        text: request.extractedText ?? "",
        timestamp: Date.now()
      }
    }
    return true
  }
// THis is the project of my life trying to build some product through this I will able to learn through you
  // reset time data
  if (request.message === "reset_time_data") {
    console.log("Received request to reset time data");
    chrome.storage.local.set({ timeData: {} }, () => {
        console.log("Time data reset in storage");
        sendResponse({ success: true }); // Send success response back to popup
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



