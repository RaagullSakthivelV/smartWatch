function myFunction(currDivId, nextDivId) {
  var current_div = document.getElementById(currDivId);
  var next_div = document.getElementById(nextDivId);
   if (currDivId == 'ship-msg' || currDivId == 'recharge-msg' ||currDivId=='bank-msg'){
    
    current_div.style.display = "none";
    messagePage = document.getElementById('messagepage');
    
    console.log(nextDivId,"hi from");
    if(nextDivId!='messagepage'){
      messagePage.style.display = "none";
    }
    else{
      messagePage.style.display = "block";
    }
  }
  if (nextDivId == 'homepage') {
    console.log('time clicked', currDivId, nextDivId);
    current_div.style.display = "none";
    next_div.style.display = "block";
  }
  if (currDivId == nextDivId) {
    console.log('currDivId == nextDivId')
  }
  else if (currDivId != nextDivId) {
    next_div.style.display = "block";
    current_div.style.display = "none";
  }
  else {
    if (currDivId == 'indexpage') {
      current_div.style.display = "none";
      next_div.style.display = "block";
    }
    else {
      next_div.style.display = "block";
    }
  }
}

function updateDateTime() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();

  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const dayIndex = now.getDay();
  const day = daysOfWeek[dayIndex];
  if (minutes.toString().length == 1) {
    minutes = minutes.toString().padStart(2, '0');
  }
  if (hours.toString().length == 1) {
    hours = hours.toString().padStart(2, '0');
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
  document.getElementById('pause-id').style.display = "block";
  document.getElementById('start-id').style.display = "none";
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(() => updateDisplay(elapsedTime = Date.now() - startTime), 10);

};

var displayTime = '';

const resetTimer = () => {
  document.getElementById('pause-id').style.display = "none";
  document.getElementById('start-id').style.display = "block";
  clearInterval(timerInterval);
  updateDisplay(elapsedTime = 0);
  updateSubTime(elapsedTime = 0);
};

const updateDisplay = (time) => {
  const pad = (num) => num.toString().padStart(2, '0');
  const milliseconds = pad(Math.floor((time % 1000) / 10));
  const seconds = pad(Math.floor((time / 1000) % 60));
  const minutes = pad(Math.floor((time / 1000 / 60) % 60));
  const hours = pad(Math.floor((time / 1000 / 60 / 60) % 24));

  displayTime = (hours > 0) ?
    `${hours}:${minutes}:${seconds}.${milliseconds}` :
    `${minutes}:${seconds}:${milliseconds}`;

  document.querySelector('.main-timer').textContent = displayTime;
};


const updateSubTime = (time) => {
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

const stopTimer = () => {
  document.getElementById('pause-id').style.display = "none";
  document.getElementById('start-id').style.display = "block";
  document.querySelector('.sub-timer').textContent = displayTime;
  console.log(displayTime)
  clearInterval(timerInterval);
}

const pauseTimer = () => {
  document.getElementById('pause-id').style.display = "none";
  document.getElementById('start-id').style.display = "block";
  clearInterval(timerInterval);
}

document.querySelector('.start').addEventListener('click', startTimer);
document.querySelector('.stop').addEventListener('click', stopTimer);
document.querySelector('.reset').addEventListener('click', resetTimer);
document.querySelector('.pause').addEventListener('click', pauseTimer);

//api key
//aba59a5f4ff4bfda4d88aead84bee5da



function updateWeather() {
  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + 'Coimbatore' + '&appid=aba59a5f4ff4bfda4d88aead84bee5da')
    .then(response => response.json())
    .then(data => {
      var tempValue = data['main']['temp'];
      // var weather = data['weather'][0]['icon'];
      // var weather_icon = document.getElementById('weather-icon');
      // weather_icon.src="https://openweathermap.org/img/wn/"+weather+"@2x.png";
      // console.log("weather is",weather);
      if ((tempValue - 273.15) > 25) {
        document.getElementById('sun').style.display = "block"
        document.getElementById('cloud').style.display = "none"
        console.log((tempValue - 273.15).toFixed(0) + '°C', "sun")
      }
      else {
        document.getElementById('sun').style.display = "none"
        document.getElementById('cloud').style.display = "block"
        console.log((tempValue - 273.15).toFixed(0) + '°C', "cloud")
      }
    })
}

// https://api.openweathermap.org/data/2.5/weather?q=Coimbatore&appid=aba59a5f4ff4bfda4d88aead84bee5da

updateWeather();
setInterval(updateWeather, 60000);


