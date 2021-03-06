const date = new Date();

function Time() {
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let session = 'AM';

    if (h === 0) {
        h = 12;
    }
    if (h > 12) {
        h -= 12;
        session = 'PM';
    }
    if (h < 10) {
        h = `0${h}`;
    }
    if (m < 10) {
        m = `0${m}`;
    }
    if (s < 10) {
        s = `0${s}`;
    }

    let greetingMessage = '';
    if (h >= 21) {
        greetingMessage = `Good night, `;
    } else if (h >= 18) {
        greetingMessage = 'Good evening, ';
    } else if (h >= 12) {
        greetingMessage = `Good day, `;
    } else {
        greetingMessage = `Good morning, `;
    }

    let timeString = `${h}:${m} ${session}`;

    document.getElementById('theTime').innerText = timeString;
    document.getElementById('theGreeting').innerText = `${greetingMessage} Ryan.`;
}
setInterval(Time, 1000);
Time();

function calendar() {
    const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    let d = DAYS[date.getDay()];
    let m = MONTHS[date.getMonth()];
    let n = date.getDate();
    let y = date.getFullYear();

    let dateString = `${d}, ${m} ${n}, ${y}`;

    document.getElementById('theDate').innerText = dateString;
}
setInterval(calendar, 1000);
calendar();