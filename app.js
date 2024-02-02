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

function showCurrentTimeAndDay() {
  const currentDate = new Date();

  let hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();

  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const dayIndex = currentDate.getDay();
  const day = daysOfWeek[dayIndex];

  let formattedTime = `${hours}:${padZero(minutes)}:${padZero(seconds)}`;

 
  const outputElement = document.getElementById("output");
  if (outputElement) {
    outputElement.innerHTML = `Current Time: ${formattedTime}<br>Current Day: ${day}`;
  } else {
    console.error("Element with id 'output' not found");
  }
}