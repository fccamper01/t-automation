let readyRegex=document.querySelector("#readyRegex");
let codeSnippet=document.querySelector("#code").value;
let ticketNum; //Insert SC number here
let sendTicket =document.querySelector("#sendTicket");
let generateButton =document.querySelector("#run");
let resetButton =document.querySelector("#reset");
let userLinks;
let singlePageRegex;
let textnode;
let testLinksNode;
let site;
let allPages =document.querySelector("#allPages");


allPages.addEventListener("click", function(){
    console.log("All pages button clicked");
});

/************Run ***********/

generateButton.addEventListener("click", function(){
    console.log("GenerateButton clicked");
    exp=document.querySelector("#exp").value;
    ticketNum =document.querySelector("#ticket").value;
    /**********RegEx generator*********/
    userLinks=document.querySelector("#inputLink").value; //Insert URL
    
//Remove http(s)://www.

function userLinksMod(){
    userLinks=userLinks.replace("https://", "");
    userLinks=userLinks.replace("http://", "");
    userLinks=userLinks.replace("www.", "");
    site=userLinks;  
//replace dots
    if(userLinks.includes(".")){
        userLinks=userLinks.replace(/\./g, "\\.");
        userLinks=userLinks.replace(/\//g, "\\/?");
}
}

//Single page

        //regexTests();
        userLinksMod();
        singlePageRegex = "(www\\."+userLinks+"|"+userLinks+")$";
        
//All pages
        allPagesRegex = "(www\\."+userLinks+"|"+userLinks+")";

/**********End of RegEx generator*********/

//Auto complete ext HTML
 
    document.querySelector("#readyRegex").innerText="'"+singlePageRegex+"'";
    document.querySelector("#sendCode").innerText="'"+document.querySelector("#code").value+"'";

    document.querySelector("#sendTicket").innerText="'"+document.querySelector("#ticket").value+"'";

    document.querySelector("#expDate").innerText="'"+document.querySelector("#exp").value+"'";

/********End of Auto complete ext HTML */

//send pre code to main Window
    
codeRes= JSON.stringify(document.querySelector("#sendCode").innerText);
readyRegexMainWindow= JSON.stringify(readyRegex.innerText);
readyUserLinks=JSON.stringify(document.querySelector("#inputLink").value);
readyTicketNum= JSON.stringify(ticketNum);
readyExp=JSON.stringify(exp);
//let convCodeRes= codeRes.toString();
function preCode(){
  chrome.devtools.inspectedWindow.eval(`codeRes=(${JSON.stringify(codeRes)}); console.log(codeRes);`);

  chrome.devtools.inspectedWindow.eval(`readyRegexMainWindow=(${JSON.stringify(readyRegexMainWindow)}); console.log(readyRegexMainWindow);`);

  chrome.devtools.inspectedWindow.eval(`readyUserLinks=(${JSON.stringify(readyUserLinks)}); console.log(readyUserLinks);`);
  chrome.devtools.inspectedWindow.eval(`exp=(${JSON.stringify(exp)}); console.log(exp);`);


  chrome.devtools.inspectedWindow.eval(`readyTicketNum=(${JSON.stringify(readyTicketNum)}); console.log(readyTicketNum);`);  /*************Extract src/cat/type ************/

  
    chrome.devtools.inspectedWindow.eval(`

    readyRegexMainWindow=readyRegexMainWindow.replace(/"/g, "");
    readyRegexMainWindow=readyRegexMainWindow.replace(/'/g, "");
    console.log(readyRegexMainWindow);
    readyUserLinks=readyUserLinks.replace(/"/g, "");
    readyUserLinks=readyUserLinks.replace(/"/g, "");
    readyTicketNum=readyTicketNum.replace(/"/g, "");

   var fl_code;
    fl_code=codeRes;


    splitStr= fl_code.indexOf("https");
    delStart=fl_code.substr(splitStr);
    delEnd=delStart.indexOf("dc_lat");
    splitStr=delStart.substr(0, delEnd);
    
    removeBeforeSrc=splitStr.indexOf("src=");
    srcIdStart=splitStr.substr(removeBeforeSrc+4);
    endofSrc=srcIdStart.indexOf(";");
    srcId=srcIdStart.substr(0, endofSrc);
    console.log(srcId);
    
    
    removeBeforeType=splitStr.indexOf("type=");
    typeIdStart=splitStr.substr(removeBeforeType+5);
    endofType=typeIdStart.indexOf(";");
    typeValue=typeIdStart.substr(0, endofType);
    console.log(typeValue);
    
    removeBeforeCat=splitStr.indexOf("cat=");
    catIdStart=splitStr.substr(removeBeforeCat+4);
    endofCat=catIdStart.indexOf(";");
    catValue=catIdStart.substr(0, endofCat);
    console.log(catValue);


/*************End of extract src/cat/type ************/

/***************fl_src**************/
document.getElementById("tabs_customizations").click(); //go to Extensions tab
document.getElementById("customizations_6_accordion").click(); //open fl_src

function fl_inputCreate(){
let items = document.querySelectorAll(".js-action-addbtn"); //all plusButtons
let lastchild = items[items.length-2]; //last plubButton
lastchild.click(); //create a new entry in the lookup table
console.log(items);
console.log(lastchild);
};

function fl_urlInsert(){
let fl_input=document.querySelectorAll('[data-test="lookup_match_input"]'); //all inputs
let fl_input_lastChild =fl_input[fl_input.length-1]; //last input
console.log(fl_input);
console.log(fl_input_lastChild);
fl_input_lastChild.value=readyRegexMainWindow; //fill out input field
};

function fl_srcInsert(){
let fl_output=document.querySelectorAll('[data-test="output_value_input"]'); //all outputs
let fl_output_lastChild =fl_output[fl_output.length-1]; //last output
console.log(fl_output);
console.log(fl_output_lastChild);
fl_output_lastChild.value=srcId; //fill out output field
};

function fl_typeInsert(){
    let fl_output=document.querySelectorAll('[data-test="output_value_input"]'); //all outputs
    let fl_output_lastChild =fl_output[fl_output.length-1]; //last output
    console.log(fl_output);
    console.log(fl_output_lastChild);
    fl_output_lastChild.value=typeValue; //fill out output field
};

function fl_catInsert(){
    let fl_output=document.querySelectorAll('[data-test="output_value_input"]'); //all outputs
    let fl_output_lastChild =fl_output[fl_output.length-1]; //last output
    console.log(fl_output);
    console.log(fl_output_lastChild);
    fl_output_lastChild.value=catValue; //fill out output field
};

function fl_noteInsert(){
    let fl_note=document.querySelectorAll('[name*="comment"]'); //all inputs
    let fl_note_lastChild =fl_note[fl_note.length-1]; //last input
    console.log(fl_note);
    console.log(fl_note_lastChild);
    fl_note_lastChild.value="SC#"+" "+readyTicketNum+" "+readyUserLinks+" "+exp;
    console.log(fl_note_lastChild.value);
    };

fl_inputCreate();
fl_urlInsert()
fl_srcInsert();
fl_noteInsert();
/***************End of fl_src**************/

/***************fl_type**************/
document.getElementById("tabs_customizations").click(); //go to Extensions tab
document.getElementById("customizations_7_accordion").click(); //open fl_type

fl_inputCreate();
fl_urlInsert()
fl_typeInsert();
fl_noteInsert();
/***************End of fl_type**************/

/***************fl_cat**************/
document.getElementById("tabs_customizations").click(); //go to Extensions tab
document.getElementById("customizations_8_accordion").click(); //open fl_type
fl_inputCreate();
fl_urlInsert()
fl_catInsert()
fl_noteInsert();
/***************End of fl_cat**************/

`);
};//end of pre code
preCode();

}); //End of generateButton

//Reset button

resetButton.addEventListener("click", function(){
    window.location.reload ();
});

//End of Reset button

//Select pre

(function() {
    function selectText(element) {
        var doc = document
            , text = element
            , range, selection
        ;
        if (doc.body.createTextRange) { //ms
            range = doc.body.createTextRange();
            range.moveToElementText(text);
            range.select();
        } else if (window.getSelection) { //all others
            selection = window.getSelection();
            range = doc.createRange();
            range.selectNodeContents(text);
            selection.removeAllRanges();
            selection.addRange(range);
        }
    }
    preTags = document.getElementsByTagName('pre');
    for(var i=0;i<preTags.length;i++) {
        preTags[i].onclick = function() {selectText(this)};
    }
})();

//End of select pre

//Auto save

document.querySelector("#save").addEventListener("click", function(){
chrome.tabs.executeScript(null, {
    code: 'function saveTag(){document.getElementById("global_save").click(); document.getElementById("savepublish_version_title").value="updated lookup tables"; document.getElementById("publish_notes").value="updated lookup tables";document.getElementById("savePublish_dialog_saveBtn").click();} saveTag(); console.log("save test");'
 });
});

//End of Auto save


