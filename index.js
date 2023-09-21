const realTimeDisplay = document.getElementById("real-time");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");
const startBtn = document.getElementById("start");
let [second, minute, hour] = [0, 0, 0];
let timer = null;

function stopFun() {
  clearInterval(timer);
}

function startFun() {
  if (timer !== null) {
    clearInterval(timer);
  }
  timer = setInterval(() => {
    timeChanger();
  }, 1000);
}

function resetFun() {
  clearInterval(timer);
  [second, minute, hour] = [0, 0, 0];
  realTimeDisplay.innerHTML = `0${hour}:0${minute}:0${second}`;
}

function timeChanger() {
  second++;
  if (second === 60) {
    second = 0;
    minute++;
    if (minute === 60) {
      minute = 0;
      hour++;
    }
  }
  h = hour < 10 ? "0" + hour : hour;
  m = minute < 10 ? "0" + minute : minute;
  s = second < 10 ? "0" + second : second;
  realTimeDisplay.innerHTML = `${h}:${m}:${s}`;
}

stopBtn.addEventListener("click", stopFun);
resetBtn.addEventListener("click", resetFun);
startBtn.addEventListener("click", startFun);
