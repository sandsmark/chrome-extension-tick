// @author Mickael Gascoin

function DOMtoString() {
    var checkedBoxes = document.getElementsByTagName('input');
    for(var i = 0; i < checkedBoxes.length; i++){
        if(checkedBoxes[i].type=='checkbox'){
          checkedBoxes[i].checked = false;
        }
    }
}

chrome.runtime.sendMessage({
    action: "unchecked",
    source: DOMtoString()
});