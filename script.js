/*
    Author:     Austin Landers & Taylor Taake
    Date:       November 12th, 2018
    Assignment: Rocket Launch Project
*/
var selectedCalendar = "Next 5 Falcon Launches";
var launchReport;

var httpRequest = new XMLHttpRequest();

function getLaunches(evt) {
   if (evt.type !== "load") {
      if (evt.target) {
         selectedCalendar = evt.target.innerHTML;
      } else if (evt.srcElement) {
         selectedCalendar = evt.srcElement.innerHTML;
      }
   }
    if (selectedCalendar === "Next 5 Launches") {
       httpRequest.open("get", "https://launchlibrary.net/1.4/launch?next=5");
       httpRequest.send(null);
       httpRequest.onreadystatechange = aFunction;
    } else if (selectedCalendar === "Next 5 Falcon Launches") {
        httpRequest.open("get", "https://launchlibrary.net/1.4/launch?name=falcon&next=5");
        httpRequest.send(null);
        httpRequest.onreadystatechange = aFunction;
   } else if (selectedCalendar === "Next 5 Ariane Launches") {
        httpRequest.open("get", "https://launchlibrary.net/1.4/launch?name=Ariane&next=5");
        httpRequest.send(null);
        httpRequest.onreadystatechange = aFunction;
   } else if (selectedCalendar === "Next 5 Launcher One Launches") {
        httpRequest.open("get", "https://launchlibrary.net/1.4/launch?name=LauncherOne&next=5");
        httpRequest.send(null);
        httpRequest.onreadystatechange = aFunction;
   }
}

function aFunction(){
    if (httpRequest.readyState == 4 && httpRequest.status == 200)
    {
        var launchReport = httpRequest.responseText;
        var jsObject = JSON.parse(launchReport);
        //for (i=0; i < jsObject.launch.length; i++) {
//
        //}
    }
}

var calendars = document.querySelectorAll("section ul li");
for (var i = 0; i < calendars.length; i++) {
   if (calendars[i].addEventListener) {
      calendars[i].addEventListener("click", getLaunches, false);
   } else if (calendars[i].attachEvent) {
      calendars[i].attachEvent("onclick", getLaunches);
   }
}
if (window.addEventListener) {
   window.addEventListener("load", getLaunches, false);
} else if (window.attachEvent) {
   window.attachEvent("onload", getLaunches);
}