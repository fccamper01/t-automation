chrome.devtools.panels.create("Trobotex", null, "floodlight.html", null);
chrome.tabs.executeScript(null, {
    file: "script.js",
    file: "tradedesk-script.js",
    file: 'inject.js'
});