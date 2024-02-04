function myFunction(currDivId,nextDivId) {
  var x = document.getElementById(nextDivId);
  var y = document.getElementById(nextDivId);
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "none";
  } else {
    x.style.display = "none";
    y.style.display = "block";
  }
}

//current time and day
function updateDateTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();

  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const dayIndex = now.getDay();
  const day = daysOfWeek[dayIndex];
  const formattedDateTime = `${hours}:${minutes}\n${day}`;
  // update the `textContent` property of the `span` element with the `id` of `datetime`
  document.querySelector('#datetime').textContent = formattedDateTime;
}
// initiall call
updateDateTime();
setInterval(updateDateTime, 60000);


// timer

let startTime = 0, elapsedTime = 0, timerInterval;

const startTimer = () => {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(() => updateDisplay(elapsedTime = Date.now() - startTime), 10);
};

const stopTimer = () => clearInterval(timerInterval);

const resetTimer = () => {
  clearInterval(timerInterval);
  updateDisplay(elapsedTime = 0);
};

//time formatting
const updateDisplay = (time) => {
  const pad = (num) => num.toString().padStart(2, '0');
  const milliseconds = pad(Math.floor((time % 1000) / 10));
  const seconds = pad(Math.floor((time / 1000) % 60));
  const minutes = pad(Math.floor((time / 1000 / 60) % 60));
  const hours = pad(Math.floor((time / 1000 / 60 / 60) % 24));

  //hour will be displayed once time elapses to hour
  const displayTime = (hours > 0) ?
    `${hours}:${minutes}:${seconds}.${milliseconds}` :
    `${minutes}:${seconds}:${milliseconds}`;

  document.querySelector('.display').textContent = displayTime;
};

document.querySelector('.start').addEventListener('click', startTimer);
document.querySelector('.stop').addEventListener('click', stopTimer);
document.querySelector('.reset').addEventListener('click', resetTimer);
