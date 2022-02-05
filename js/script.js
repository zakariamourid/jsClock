var time = "00:00";
function showTime() {
  "use strict";
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  var day = now.getDay();
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  time = hours + ":" + minutes + ":" + seconds;
  document.getElementById("clock").textContent = time;
  document.getElementById("d" + day).className = "green";
}
window.onload = function () {
  "use strict";
  setInterval(showTime, 500);
  
};
function make_me_green(el) {
  el.classList.add("green");
  

