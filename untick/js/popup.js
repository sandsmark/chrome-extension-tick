// @author Mickael Gascoin

chrome.runtime.onMessage.addListener(function(request, sender) {
  if (request.action == "unchecked") {
    notification.innerText = 'All the checkboxes have been unchecked !';
  }
});

function onWindowLoad() {

  var notification = document.querySelector('#notification');

  chrome.tabs.executeScript(null, {
    file: "js/untick.js"
  }, function() {
    // If you try and inject into an extensions page or the webstore/NTP you'll get an error
    if (chrome.runtime.lastError) {
      notification.innerText = 'You cannot run the script : \n' + chrome.runtime.lastError.notification;
    }
  });

}

window.onload = onWindowLoad;