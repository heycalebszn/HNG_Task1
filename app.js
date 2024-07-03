

function updateUTCTime() {
    const now = new Date();
    const utcTime = now.toUTCString();

    document.getElementById('currentTimeUTC').innerHTML = utcTime;
}
updateUTCTime();