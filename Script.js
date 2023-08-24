let clock = document.querySelector('.clock');

function showTime() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let ampm = "AM";
    if (hours >= 12) {
        hours = hours - 12;
        ampm = "PM";
    }
    if (hours == 0) {
        hours = 12;
    } 
    if (hours < 10) {
        hours = "0" + hours;
    } 
    if (minutes < 10) {
        minutes = "0" + minutes;
    } 
    if (seconds < 10) {
        seconds = "0" + seconds;
    } 
    clock.innerHTML = `${hours} : ${minutes} : ${seconds} ${ampm}`;
}

setInterval(showTime, 1000);



