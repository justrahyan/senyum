// Get date
var month = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

function clock() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  var day = h < 11 ? "AM" : "PM";
  var date = today.getDate();
  var mon = today.getMonth();
  var year = today.getFullYear();

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  document.getElementById("hours").innerHTML = h;
  document.getElementById("min").innerHTML = m;
  document.getElementById("sec").innerHTML = s;
  document.getElementById("time").innerHTML = day;
  document.getElementById("day").innerHTML = date;
  document.getElementById("month").innerHTML = month[mon];
  document.getElementById("year").innerHTML = year;
}
var inter = setInterval(clock, 400);

// Navigation Behavior
const navigationHeight = document.querySelector(".navbar").offsetHeight;
document.documentElement.style.setProperty(
  "--scroll-padding",
  navigationHeight - 1 + "px"
);
