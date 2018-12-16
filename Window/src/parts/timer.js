/*function timer() {

}
module.exports = timer;*/
let deadline = '2018-12-19';

function getTimeRemaining(time) {
    let date = Date.parse(time) - Date.parse(new Date()),
        seconds = Math.floor((date / 1000) % 60),
        minutes = Math.floor((date / 1000 / 60) % 60),
        hours = Math.floor((date / 1000 / 60 / 60) % 24),
        days = Math.floor(date / 1000 / 60 / 60 / 24);
        if (seconds < 10) {
            seconds = '0' + seconds;
        }
        if (minutes < 10) {
            minutes = '0' + minutes;
        }
        if (hours < 10) {
            hours = '0' + hours;
        }
        if (days < 10){
            days = '0' + days;
        }
        if (date <= 0) {
            hours = '0' + '0';
            minutes = '0' + '0';
            seconds = '0' + '0';
        }
    return {
        'total': date,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function setClock(time) {
    let seconds = document.querySelector('#seconds span'),
        minutes = document.querySelector('#minutes span'),
        hours = document.getElementById('hours'),
        days = document.getElementById('days'),
        timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
        let a = getTimeRemaining(time);
        seconds.textContent = a.seconds;
        minutes.textContent = a.minutes;
        hours.textContent = a.hours;
        days.textContent = a.days;

        if (a.total <= 0) {
            clearInterval(timeInterval);
        }
    }
}
setClock(deadline);