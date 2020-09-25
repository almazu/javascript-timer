// declare minutes
var mins = 52;

// calculate seconds
var secs = mins * 60;

// countdown function runs when Start button is clicked
function countdown() {
    setTimeout('decrement()', 60);
}

// decrement functions runs when called by countdown()
// decrements timer
function decrement() {
    if (document.getElementById) {
        minutes = document.querySelector('.minutes');
        seconds = document.querySelector('.seconds');
    }

    // display seconds if less than a minute
    if (seconds < 59) {
        seconds.value = secs;
    } else {
        // display minutes and seconds
        minutes.value = getMinutes();
        seconds.value = getSeconds();
    }

    // alert if seconds become zero
    if (mins < 0) {
        alert ('times up');
        minutes.value = 0;
        seconds.value = 0;
    } else {
        // decrement seconds
        secs--;
        setTimeout('decrement()', 1000);
    }
}

// getMinutes function gets the minutes
function getMinutes() {
    mins = Math.floor(secs/60);
    return mins;
}

// getSeconds function gets the seconds
function getSeconds() {
    return secs - Math.round(mins * 60);
}

// event listener runs countdown() function when Start button is clicked
const startBtn = document.querySelector('.start-btn');
startBtn.addEventListener('click', event => {
    countdown();
});