/******/ (() => { // webpackBootstrap
/*!********************!*\
  !*** ./content.js ***!
  \********************/
console.log("Content script loaded on:", window.location.href);
var extractContent = function extractContent() {
  var _document$querySelect, _document$querySelect2, _document$querySelect3;
  var articleTag = ((_document$querySelect = document.querySelector('article')) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.innerText) || ((_document$querySelect2 = document.querySelector('main')) === null || _document$querySelect2 === void 0 ? void 0 : _document$querySelect2.innerText) || document.body.innerText.replace(/\n\s*\n/g, '\n').substring(0, 5000);
  var metaDescription = (_document$querySelect3 = document.querySelector('meta[name="description"')) === null || _document$querySelect3 === void 0 ? void 0 : _document$querySelect3.content;
  var combinedText = metaDescription ? metaDescription + "\n\n" : "";
  combinedText += articleTag;
  var MAX_LENGTH = 1e4;
  return combinedText.trim().substring(0, MAX_LENGTH);
};
var sendPageContentTBackground = function sendPageContentTBackground() {
  var extractedText = extractContent();
  var currentURL = window.location.href;
  var pageTitle = document.title;
  if (extractedText) {
    console.log("COntent.js: Sending content for ".concat(currentURL.substring(0, 70), "... (Lenght: ").concat(extractedText.length, ")"));
    chrome.runtime.sendMessage({
      type: 'PAGE_CONTENT_FOR_BACKGROUND',
      url: currentURL,
      title: pageTitle,
      extractedText: extractedText
    }, function (response) {
      if (chrome.runtime.lastError) {
        onsole.log("Content.js: Error sending message:", chrome.runtime.lastError.message);
      } else {
        console.log("Content.js: Message sent, response from background:", response);
      }
    });
  } else {
    console.log("Content.js: No significant text extracted from ".concat(currentURL));
  }
};

// send content when the document is fuly loaded and idle.
if (document.readyState === "complete") {
  sendPageContentTBackground();
} else {
  window.addEventListener('load', sendPageContentTBackground, {
    once: true
  });
}

// You might add a MutationObserver to re-extract if the page is dynamic (more complex)
//MutationObserver  Important
/******/ })()
;
//# sourceMappingURL=content.bundle.js.map