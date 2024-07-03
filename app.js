const currentTime = document.getElementById("currentTimeUTC")
const currentDay = document.getElementById("currentDay")


function updateUTCTime() {
    const now = new Date();
    const utcTime = now.toUTCString();

    currentTime.innerHTML = utcTime;
}
updateUTCTime();

function updateCurrentDay() {
    const now = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayName = days[now.getUTCDay()];

    currentDay.innerHTML = dayName;
}

updateCurrentDay();
setInterval(updateUTCTime, 1000)