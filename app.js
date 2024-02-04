function myFunction(currDivId,nextDivId) {
  var x = document.getElementById(currDivId);
  var y = document.getElementById(nextDivId);
  if(nextDivId == 'homepage'){
    console.log('time clicked',currDivId,nextDivId);
    x.style.display = "none";
    y.style.display = "block";
  }
  if(currDivId == nextDivId) {
    x.style.display = "none";
    console.log('currDivId == nextDivId')
  }
  else {
    if(currDivId == 'indexpage') {
      x.style.display = "none";
      y.style.display = "block";
    }
    else {
      y.style.display = "block"
    }
  }
}


function updateDateTime() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();

//current time and day
function updateDateTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const dayIndex = now.getDay();
  const day = daysOfWeek[dayIndex];

  if(minutes.toString().length==1) {
    minutes=minutes.toString().padStart(2,'0');
  }
  if(hours.toString().length==1) {
    hours=hours.toString().padStart(2,'0');
  }
  const formattedDateTime = `${hours}:${minutes}`;

  document.querySelector('#home-time').textContent = formattedDateTime;
  document.querySelector('#top-home-time').textContent = formattedDateTime;
  document.querySelector('#home-day').textContent = day;
  document.querySelector('#top-timer-time').textContent = formattedDateTime;
  document.querySelector('#top-msg-time').textContent = formattedDateTime;
  document.querySelector('#top-shop-time').textContent = formattedDateTime;
  document.querySelector('#top-shop-time').textContent = formattedDateTime;
  document.querySelector('#top-recharge-time').textContent = formattedDateTime;
  document.querySelector('#top-bank-time').textContent = formattedDateTime;//
  document.querySelector('#top-music-time').textContent = formattedDateTime;
}

updateDateTime();
setInterval(updateDateTime, 60000);

let startTime = 0, elapsedTime = 0, timerInterval;

const startTimer = () => {
  document.getElementById('pause-id').style.display="block";
  document.getElementById('start-id').style.display="none";
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(() => updateDisplay(elapsedTime = Date.now() - startTime), 10);

};

var displayTime='';

const resetTimer = () => {
  document.getElementById('pause-id').style.display="none";
  document.getElementById('start-id').style.display="block";
  clearInterval(timerInterval);
  updateDisplay(elapsedTime = 0);
  updateSubTime(elapsedTime = 0);
};

//time formatting
const updateDisplay = (time) => {
  const pad = (num) => num.toString().padStart(2, '0');
  const milliseconds = pad(Math.floor((time % 1000) / 10));
  const seconds = pad(Math.floor((time / 1000) % 60));
  const minutes = pad(Math.floor((time / 1000 / 60) % 60));
  const hours = pad(Math.floor((time / 1000 / 60 / 60) % 24));

  //hour will be displayed once time elapses to hour
  displayTime = (hours > 0) ?
    `${hours}:${minutes}:${seconds}.${milliseconds}` :
    `${minutes}:${seconds}:${milliseconds}`;

  document.querySelector('.main-timer').textContent = displayTime;
};


const updateSubTime = (time) => {
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

  displayTime = (hours > 0) ?
    `${hours}:${minutes}:${seconds}.${milliseconds}` :
    `${minutes}:${seconds}:${milliseconds}`;

  document.querySelector('.sub-timer').textContent = displayTime;
};

const stopTimer = ()=> { 
  document.getElementById('pause-id').style.display="none";
  document.getElementById('start-id').style.display="block";
  document.querySelector('.sub-timer').textContent = displayTime;
  console.log(displayTime)
  clearInterval(timerInterval);
}

const pauseTimer = ()=> { 
  document.getElementById('pause-id').style.display="none";
  document.getElementById('start-id').style.display="block";
  clearInterval(timerInterval);
}

document.querySelector('.start').addEventListener('click', startTimer);
document.querySelector('.stop').addEventListener('click', stopTimer);
document.querySelector('.reset').addEventListener('click', resetTimer);
document.querySelector('.pause').addEventListener('click', pauseTimer);

//api key
//aba59a5f4ff4bfda4d88aead84bee5da



function updateWeather(){
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+'Coimbatore'+'&appid=aba59a5f4ff4bfda4d88aead84bee5da')
  .then(response => response.json())
  .then(data => {
  var tempValue = data['main']['temp'];
  if((tempValue-273.15)>25){
    document.getElementById('sun').style.display="block"
    document.getElementById('cloud').style.display="none"
    console.log((tempValue-273.15).toFixed(0)+'°C',"sun")
  }
  else {
    document.getElementById('sun').style.display="none"
    document.getElementById('cloud').style.display="block"
    console.log((tempValue-273.15).toFixed(0)+'°C',"cloud")
  }
})
}

updateWeather();
setInterval(updateWeather, 60000);

// function iframescroll() {
//   var iframe = document.getElementById("myiframe");
//   iframe.width = iframe.contentWindow.document.body.scrollWidth;
//   iframe.height = iframe.contentWindow.document.body.scrollHeight;
//   console.log(iframe.width)
//   console.log(iframe.height)
// }


  const displayTime = (hours > 0) ?
    `${hours}:${minutes}:${seconds}.${milliseconds}` :
    `${minutes}:${seconds}:${milliseconds}`;

  document.querySelector('.display').textContent = displayTime;
};

document.querySelector('.start').addEventListener('click', startTimer);
document.querySelector('.stop').addEventListener('click', stopTimer);
document.querySelector('.reset').addEventListener('click', resetTimer);

