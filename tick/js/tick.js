// @author Mickael Gascoin

function DOMtoString() {
    var checkedBoxes = document.getElementsByTagName('input');
    for(var i = 0; i < checkedBoxes.length; i++){
            if (checkedBoxes[i].checked === false) {
                checkedBoxes[i].click();
                checkedBoxes[i].style.outline = "thick solid #55FF55";
            } else {
                checkedBoxes[i].checked = true;
            }
    }
}

chrome.runtime.sendMessage({
    action: "checked",
    source: DOMtoString()
});
