/*
    Author:     Austin Landers & Taylor Taake
    Date:       November 12th, 2018
    Assignment: Rocket Launch Project
*/
var selectedCalendar = "Next 5 Falcon Launches";
var launchReport;
var calendars = document.querySelectorAll("ul li");
var httpRequest = new XMLHttpRequest();
var countdown;

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
        console.log(jsObject);
        console.log(jsObject.launches);
        console.log(jsObject.launches.length);
        for (i=0; i < jsObject.launches.length; i++) {
            document.getElementById(i).innerHTML = jsObject.launches[i].net +": " + jsObject.launches[i].name;
        }
        console.log(calendars.length);
    }
}

function updateCountdown() {
    var dateToday = new Date();
    var dateFrom = Date.UTC(dateToday.getFullYear(), 
        dateToday.getMonth(), dateToday.getDate(),
        dateToday.getHours(), dateToday.getMinutes(),
        dateToday.getSeconds());
    var dateTo = Date.UTC(dateObject.getFullYear(),
        dateObject.getMonth(), dateObject.getDate(),
        19, 0, 0);
    var daysUntil = Math.floor((dateTo - dateFrom)/86400000);
    document.getElementById("countdown").innerHTML = daysUntil;
    var fractionalDay = (dateTo- dateFrom) % 86400000;
    var hoursUntil = Math.floor(fractionalDay/3600000);
    if (hoursUntil <10) {
        hoursUntil= "0" + hoursUntil;
    }
    document.getElementById("countdown").innerHTML += ":" + hoursUntil;
    var fractionalHour = fractionalDay % 3600000;
    var minutesUntil = Math.floor(fractionalHour / 60000);
    if (minutesUntil < 10) {
        minutesUntil = "0" + minutesUntil;
    }
    document.getElementById("countdown").innerHTML +=
    ":" + minutesUntil;
    var fractionalMinute = fractionalHour % 60000;
    var secondsUntil = Math.floor(fractionalMinute / 1000);
    if (secondsUntil < 10) {
        secondsUntil = "0" + secondsUntil; 
    }
    document.getElementById("countdown").innerHTML += ":" + secondsUntil;
}

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
