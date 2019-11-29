//Start of start Tealium
let startT=document.querySelector("#startT");
startT.addEventListener("click", function(){
   
    chrome.devtools.inspectedWindow.eval(`

    window.open("https://my.tealiumiq.com/login/sso/", "_self"); 
    if(window.location.href.includes("my.tealiumiq.com/login/sso/")){
    document.querySelector("[name=email]").value="alona.x.ponomarenko@gsk.com";
    document.querySelector("#submitBtn").click();
     console.log("TRUE TRUE TRUE");
    }
    
    if(window.location.href.includes("sso.connect.pingidentity.com")){
    //document.querySelector("[name=email]").value="alona.x.ponomarenko@gsk.com";
    document.querySelector("[type=submit]").click();
    
    }
    `);
});
//End of start Tealium



//Auto open FL library
let goToFl =document.querySelector("#goToFl");

goToFl.addEventListener("click", function(){
   
    chrome.devtools.inspectedWindow.eval(`

    document.querySelector("#profile_legend_profile").click(); document.querySelectorAll(\'[title="Show All Items"]\')[1].click(); document.querySelector(\'option[value="library-doubleclick"]\').selected = true;document.querySelectorAll(\'[data-test="loadversion_btn"]\')[0].click(); document.querySelector("#getRevisionConfirm_dialog_yesBtn").click(); `);
});
//End of Auto open FL library

//Auto open TD library
let goToTd =document.querySelector("#goToTd");

goToTd.addEventListener("click", function(){
   
    chrome.devtools.inspectedWindow.eval(`

    document.querySelector("#profile_legend_profile").click(); document.querySelectorAll(\'[title="Show All Items"]\')[1].click(); document.querySelector(\'option[value="library-tradedesk"]\').selected = true;document.querySelectorAll(\'[data-test="loadversion_btn"]\')[0].click(); document.querySelector("#getRevisionConfirm_dialog_yesBtn").click(); `);
});
//End of Auto open TD library

//Auto open NTV library
let goToNtv =document.querySelector("#goToNtv");

goToNtv.addEventListener("click", function(){
   
    chrome.devtools.inspectedWindow.eval(`

    document.querySelector("#profile_legend_profile").click(); document.querySelectorAll(\'[title="Show All Items"]\')[1].click(); document.querySelector(\'option[value="library-ntv"]\').selected = true;document.querySelectorAll(\'[data-test="loadversion_btn"]\')[0].click(); document.querySelector("#getRevisionConfirm_dialog_yesBtn").click(); `);
});
//End of Auto open NTV library