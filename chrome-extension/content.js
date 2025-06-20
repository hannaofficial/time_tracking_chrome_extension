console.log("Content script loaded on:", window.location.href);

/**
 * Intelligently extracts the main textual content from a webpage using multiple strategies.
 * This is the new, more robust extraction engine.
 */
function extractMainContent() {
    // Strategy 1: The <main> element
    let mainEl = document.querySelector('main');
    if (mainEl) {
        console.log("Extraction Strategy: Found <main> element.");
        return mainEl.innerText;
    }

    // Strategy 2: The [role="main"] attribute
    mainEl = document.querySelector('[role="main"]');
    if (mainEl) {
        console.log("Extraction Strategy: Found [role='main'] element.");
        return mainEl.innerText;
    }

    // Strategy 3: The <article> element (take the first one)
    const articleEl = document.querySelector('article');
    if (articleEl) {
        console.log("Extraction Strategy: Found <article> element.");
        return articleEl.innerText;
    }

    // Strategy 4 (Fallback): Look for common IDs/Classes
    const commonSelectors = [
        '#content', '#main', '#main-content', '.post', '.entry', '.post-content', '.entry-content'
    ];
    for (const selector of commonSelectors) {
        const potentialEl = document.querySelector(selector);
        if (potentialEl) {
            console.log(`Extraction Strategy: Found fallback selector '${selector}'.`);
            return potentialEl.innerText;
        }
    }

    // Last Resort: The entire body, but actively remove common boilerplate.
    console.log("Extraction Strategy: Last resort, cloning document.body and removing noise.");
    const bodyClone = document.body.cloneNode(true);
    // Remove known boilerplate elements from the clone
    bodyClone.querySelectorAll('header, footer, nav, aside, .sidebar, form, script, style').forEach(el => el.remove());
    
    return bodyClone.innerText;
}


const extractContent = () => {

    const mainText = extractMainContent()
    const metaDescription = document.querySelector('meta[name="description"')?.content;
    let combinedText = metaDescription ? metaDescription + "\n\n" : "";
    combinedText += mainText;
    // Use the more advanced cleanup regex to handle excessive newlines, then trim.
    const cleanedText = combinedText.replace(/(\r\n|\n|\r){3,}/g, "\n\n").trim();
    // above regex is to replace 3 or more lines to just 2 and preserve the structure of the paragraph

    const MAX_LENGTH = 1e4;
    return combinedText.trim().substring(0, MAX_LENGTH);


}

const sendPageContentTBackground = () => {
    const extractedText = extractContent();
    const currentURL = window.location.href;
    const pageTitle = document.title;

    if(extractedText){
        console.log(`COntent.js: Sending content for ${currentURL.substring(0,70)}... (Lenght: ${extractedText.length})`);
        chrome.runtime.sendMessage({
            type: 'PAGE_CONTENT_FOR_BACKGROUND',
            url: currentURL,
            title: pageTitle,
            extractedText: extractedText
        },(response)=>{
            if(chrome.runtime.lastError){
                onsole.log("Content.js: Error sending message:", chrome.runtime.lastError.message);
            }else{
                console.log("Content.js: Message sent, response from background:", response);
            }
        })
    }else{
        console.log(`Content.js: No significant text extracted from ${currentURL}`);
    }
}

// send content when the document is fuly loaded and idle.
if(document.readyState === "complete"){
    sendPageContentTBackground();
}else{
    window.addEventListener('load', sendPageContentTBackground, {once:true})
}

// You might add a MutationObserver to re-extract if the page is dynamic (more complex)
//MutationObserver  Important