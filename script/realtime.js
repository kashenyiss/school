// script to update real time in the strip
function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById('realtime-clock').textContent = timeString;
}

setInterval(updateTime, 1000);
window.onload = updateTime;
