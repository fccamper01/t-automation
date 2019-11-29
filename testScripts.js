// Run extension script in main console
let generatedScript=document.querySelector("pre").innerText;

chrome.devtools.inspectedWindow.eval(`alert(${JSON.stringify(generatedScript)})`);


chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript({code:"console.log('background script')"});
chrome.tabs.executeScript(null, {
code: "document.body.style.background='red';"
});
});

chrome.tabs.executeScript(null, {
    code: "console.log('sick')"
    });


    function saveChanges() {
        // Get a value saved in a form.
        var theValue = "lalalala";
        // Check that there's some code there.
        if (!theValue) {
          message('Error: No value specified');
          return;
        }
        // Save it using the Chrome extension storage API.
        chrome.storage.sync.set({'value': theValue}, function() {
          // Notify that we saved.
          message('Settings saved');
          console.log(theValue);
        });
      }