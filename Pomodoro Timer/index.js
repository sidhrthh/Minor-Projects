const timerEl = document.querySelector("#timer");
const startEl = document.querySelector("#start");
const stopEl = document.querySelector("#stop");
const resetEl = document.querySelector("#reset");

let interval;
let timeleft = 1500;

function updatedTime() {
  let minutes = Math.floor(timeleft / 60);
  let seconds = timeleft % 60;
  let formattedTime = `${minutes.toString().padStart(2, "0")} : ${seconds
    .toString()
    .padStart(2, "0")}`;

  timerEl.innerHTML = formattedTime;
}

function startTimer() {
  interval = setInterval(() => {
    timeleft--;
    updatedTime();
    if (timeleft === 0) {
      alert("Time's up!");
      clearInterval(interval);
      timeleft = 1500;
      updatedTime();
    }
  }, 1000);
}
function stopTimer() {
  clearInterval(interval);
}
function resetTimer() {
  clearInterval(interval);
  timeleft = 1500;
  updatedTime();
}
startEl.addEventListener("click", startTimer);
stopEl.addEventListener("click", stopTimer);
resetEl.addEventListener("click", resetTimer);
