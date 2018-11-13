/*
    Author:     Austin Landers & Taylor Taake
    Date:       November 12th, 2018
    Assignment: Rocket Launch Project
*/
var selectedCalendar = "Next 5 Launches";
var launchReport;

function getLaunches(evt) {
   if (evt.type !== "load") {
      if (evt.target) {
         selectedCalendar = evt.target.innerHTML;
      } else if (evt.srcElement) {
         selectedCalendar = evt.srcElement.innerHTML;
      }
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