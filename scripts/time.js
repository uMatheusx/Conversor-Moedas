function updateTime() {
    const dateElement = document.getElementById('date');
    const timeElement = document.getElementById('time');

    const now = new Date();

    const dateOptions = { day: 'numeric', month: 'short', year: 'numeric' };
    const formattedDate = now.toLocaleDateString(undefined, dateOptions);

    const timeOptions = { hour: '2-digit', minute: '2-digit', timeZoneName: 'short' };
    const formattedTime = now.toLocaleTimeString(undefined, timeOptions);

    dateElement.textContent = formattedDate;
    timeElement.textContent = formattedTime;
}

setInterval(updateTime, 3000);

updateTime();