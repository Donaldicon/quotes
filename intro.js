const timeEl = document.getElementById("time");
const hoursEl = document.getElementById("time-of-the-day");

const d = new Date();

let hour = d.getHours();

if (hour < 12) {
  timeEl.innerText = "Good Morning";
  hoursEl.innerText = "Morning";
} else if (hour < 18) {
  timeEl.innerText = "Good Afternoon";
  hoursEl.innerText = "Afternoon";
}else{
  timeEl.innerText = "Good Evening";
  hoursEl.innerText = "Evening";
}