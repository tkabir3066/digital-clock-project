function getCurrentTime() {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  let period = "AM";
  if (hours == 0) {
    hours = 12;
  }
  if (hours > 12) {
    hours = hours - 12;
    period = "PM";
  }

  hours = hours > 12 ? hours - 12 : hours;
  formattedHours = hours >= 10 ? hours : "0" + hours;
  formattedMinutes = minutes >= 10 ? minutes : "0" + minutes;
  formattedSeconds = seconds >= 10 ? seconds : "0" + seconds;
  setInterval(getCurrentTime, 1000);
  let time = `${formattedHours}:${formattedMinutes}:${formattedSeconds}  ${period}`;
  let clock = document.getElementById("clock");
  clock.innerText = time;
}

getCurrentTime();
