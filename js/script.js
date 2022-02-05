let ShowTwelveHourFormat = true;
const TwelveHourbtn = document
  .getElementById("format12")
  .addEventListener("click", () => {
    ShowTwelveHourFormat = true;
    document.getElementById("format12").classList.add("green");
    document.getElementById("format24").classList.remove("green");
  });
const TwentyFourHourbtn = document
  .getElementById("format24")
  .addEventListener("click", () => {
    ShowTwelveHourFormat = false;
    document.getElementById("format24").classList.add("green");
    document.getElementById("format12").classList.remove("green");
  });
function showTime() {
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
  if (ShowTwelveHourFormat && hours > 12) {
    hours = hours - 12;
    time = hours + ":" + minutes + " PM";
  } else if (ShowTwelveHourFormat && hours < 12) {
    time = hours + ":" + minutes + " AM";
  } else {
    time = hours + ":" + minutes + ":" + seconds;
  }
  if (
    window.matchMedia("(max-width: 768px)").matches &&
    ShowTwelveHourFormat != true
  ) {
    /* La largeur minimum de l'affichage est 600 px inclus */
    time = hours + ":" + minutes;
  }
  document.getElementById("clock").textContent = time;
  document.getElementById(day).className = "green";
  for (let i = 1; i < 8; i++) {
    if (i != day) {
      document.getElementById(i).className = "hidden-xs";
    }
  }
}

setInterval(showTime, 500);
