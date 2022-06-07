//start date
const startDate = new Date("Jan 2, 2025 24:00:00").getTime();

function countDown() {
  //current date and time
  const todayDate = new Date().getTime();

  //difference in the dates
  const difference = startDate - todayDate;

  //Time calculations for years, months, days, hours, minutes, seconds
  let days = Math.floor(difference / (1000 * 60 * 60 * 24));
  let hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((difference % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("day").innerHTML = formatTime(days);
  document.getElementById("hour").innerHTML = formatTime(hours);
  document.getElementById("minute").innerHTML = formatTime(minutes);
  document.getElementById("second").innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time
}

countDown();

setInterval(countDown, 1000)
