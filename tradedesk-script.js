let readyRegex=document.querySelector("#readyRegex");
let codeSnippet=document.querySelector("#code").value;
let ticketNum =document.querySelector("#ticket").value; //Insert SC number here
let notes =document.querySelector("#notes");
let generateButton =document.querySelector("#run");
let resetButton =document.querySelector("#reset");
let userLinks;
let singlePageRegex;
let textnode;
let testLinksNode;
let site;
let expInput;

let sendExpDate=document.querySelector("#expDate");

/************Run ***********/

generateButton.addEventListener("click", function(){

     /**********RegEx generator*********/
     userLinks=document.querySelector("#inputLink").value;; //Insert URL
     console.log(userLinks);
     console.log(inputLink);
    
//Remove https://www.

function userLinksMod(){
    userLinks=userLinks.replace("https://", "");
    userLinks=userLinks.replace("www.", "");
    site=userLinks;  
    console.log(userLinks);
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
        console.log(singlePageRegex);

/**********End of RegEx generator*********/

    /************Code snippet adv, ct extractor ************/
let string = document.querySelector("#code").value;
let advStart=document.querySelector("#code").value.indexOf("adv']='");
let advCut =string.substring(advStart, advStart+30);
let advCut2=advCut.replace("';custom_params[", "");
let advId=advCut2.replace("adv']='", "");

let ctStart=document.querySelector("#code").value.indexOf("ct']='");
let ctCut =string.substring(ctStart, ctStart+20);
let ctCut2=ctCut.replace("';cus", "");
let ctId=ctCut2.replace("ct']='", "");

/************End of code snippet adv, ct extractor ************/
 expInput =document.querySelector("#exp").value;
 ticketNum =document.querySelector("#ticket").value;
    document.querySelector("#sendAdv").innerText="'"+advId+"'";
    document.querySelector("#sendCt").innerText="'"+ctId+"'";
    document.querySelector("#notes").innerText="'"+ticketNum+" "+expInput+"'";
    document.querySelector("#readyRegex").innerText="'"+singlePageRegex+"'";

    //send pre code to main Window
    
let readyRegexMainWindow= JSON.stringify(readyRegex.innerText);
let readyadvId=JSON.stringify(advId);
let readyctId=JSON.stringify(ctId);
function preCode(){
 
    chrome.devtools.inspectedWindow.eval(`readyRegexMainWindow=(${JSON.stringify(readyRegexMainWindow)}); console.log(readyRegexMainWindow);`);

    chrome.devtools.inspectedWindow.eval(`readyadvId=(${JSON.stringify(readyadvId)}); console.log(readyadvId);`);

    chrome.devtools.inspectedWindow.eval(`readyctId=(${JSON.stringify(readyctId)}); console.log(readyctId);`);
    /*************Extract src/cat/type ************/

    chrome.devtools.inspectedWindow.eval(`
    
    readyRegexMainWindow=readyRegexMainWindow.replace(/"/g, "");
    readyRegexMainWindow=readyRegexMainWindow.replace(/'/g, "");
    readyctId=readyctId.replace(/"/g, "");
    readyadvId=readyadvId.replace(/"/g, "");

/***************TradeDesk**************/
function inputCreate(){
  let items = document.querySelectorAll(".js-action-addbtn"); //all plusButtons
  let lastchild = items[items.length-2]; //last plubButton
  lastchild.click(); //create a new entry in the lookup table
  console.log(items);
  console.log(lastchild);
  };

  function urlInsert(){
    let tag_input=document.querySelectorAll('[data-test="lookup_match_input"]'); //all inputs
    let tag_input_lastChild =tag_input[tag_input.length-1]; //last input
    console.log(tag_input);
    console.log(tag_input_lastChild);
    tag_input_lastChild.value=readyRegexMainWindow; //fill out input field
    };

    function advInsert(){
      let tag_output=document.querySelectorAll('[data-test="output_value_input"]'); //all outputs
      let output_lastChild =tag_output[tag_output.length-1]; //last output
      console.log(tag_output);
      console.log(output_lastChild);
      output_lastChild.value=readyadvId; //fill out output field
      };
      function noteInsert(){
        let note=document.querySelectorAll('[name*="comment"]'); //all inputs
        let note_lastChild =note[note.length-1]; //last input
        console.log(note);
        console.log(note_lastChild);
        note_lastChild.value=' 2019-12-31';
        };

        function ctInsert(){
          let tag_output=document.querySelectorAll('[data-test="output_value_input"]'); //all outputs
          let output_lastChild =tag_output[tag_output.length-1]; //last output
          console.log(tag_output);
          console.log(output_lastChild);
          output_lastChild.value=readyctId; //fill out output field
          };


document.getElementById("tabs_customizations").click(); //go to Extensions tab
document.getElementById("customizations_1_accordion").click(); //open tr adv

inputCreate();
          urlInsert();
          advInsert();
          noteInsert();

document.getElementById("tabs_customizations").click(); //go to Extensions tab
document.getElementById("customizations_2_accordion").click(); //open tr adv
          
          inputCreate();
          urlInsert();
          ctInsert();
          noteInsert();

/***************End of TradeDesk**************/

`);
};//end of pre code
preCode();

}); //End of generateButton

resetButton.addEventListener("click", function(){
    window.location.reload ();
});

//select pre


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
    console.log("pre script has finished running");
})();

//End of select pre
//End of select pre

//Auto save

document.querySelector("#save").addEventListener("click", function(){
    chrome.tabs.executeScript(null, {
        code: 'function saveTag(){document.getElementById("global_save").click(); document.getElementById("savepublish_version_title").value="updated lookup tables"; document.getElementById("publish_notes").value="auto test note";document.getElementById("savePublish_dialog_saveBtn").click();} saveTag(); console.log("save test");'
     });
    });
    
    //End of Auto save