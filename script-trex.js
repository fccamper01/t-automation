let singlePage = document.getElementById("singlePage");
let allPages = document.getElementById("allPages");;
//Reset button
let reset=document.querySelector("#reset");

reset.addEventListener("mousedown", function(){
    window.location.reload();
})
//End of reset button

//Start of regex Generatior
let singlePageRegex;
let userLinks;
let textnode;
let testLinksNode;

//Test regex
/*
function regexTests(){
    userLinks =document.querySelector("#inputUrls").value;
    testLinksNode = document.createTextNode(userLinks);
    document.querySelector("#test1").appendChild(testLinksNode);
}
*/

//Remove https://www.

function userLinksMod(){
    userLinks =document.querySelector("#inputUrls").value;
    console.log(userLinks);

    userLinks=userLinks.replace("https://", "");
    userLinks=userLinks.replace("www.", "");
    console.log(userLinks);
//replace dots
    if(userLinks.includes(".")){
        userLinks=userLinks.replace(/\./g, "\\.");
        userLinks=userLinks.replace(/\//g, "\\/");
}
}

//Single page
singlePage.addEventListener("mousedown", function(){
        //regexTests();
        userLinksMod();
        singlePageRegex = "(www\\."+userLinks+"|"+userLinks+")$";
        console.log(singlePageRegex);

    textnode = document.createTextNode(singlePageRegex);
    document.querySelector("#regex").appendChild(textnode);
});

//All pages
let allPagesRegex;

allPages.addEventListener("mousedown", function(){
   //regexTests();
    userLinksMod();
    allPagesRegex = "(www\\."+userLinks+"|"+userLinks+")";
    console.log(allPagesRegex);

    textnode = document.createTextNode(allPagesRegex);
    document.querySelector("#regex").appendChild(textnode);
});

//All pages except

let allPagesExceptRegex;
let exceptions;

ällPageseExcept.addEventListener("mousedown", function(){
    //regexTests();
    exceptions=document.getElementById("exceptions").value;
console.log(exceptions);
    userLinksMod();
    allPagesExceptRegex = "(www\\."+userLinks+"(?!"+exceptions+")"+"|"+userLinks+"(?!"+exceptions+")"+")";
    console.log(allPagesExceptRegex);

    textnode = document.createTextNode(allPagesExceptRegex);
    document.querySelector("#regex").appendChild(textnode);
});

//select pre
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
//End of select pre