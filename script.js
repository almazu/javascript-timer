var secs = 0;
var mins = 0;
var interval;

minutesBox = document.querySelector('.minutes');
secondsBox = document.querySelector('.seconds');

// function gets minutes
function getMinutes() {
    mins = Math.floor(secs / 60);
    return mins;
}

// function gets seconds
function getSeconds() {
    return secs - Math.round(mins * 60);
}

// function changes background color
function changeBackgroundColor(color) {
    document.body.style.background = color;
}
// Start button event listener
const workBtn = document.querySelector('.work-btn');
workBtn.addEventListener('click', event => {
    // change background color
    changeBackgroundColor("linear-gradient(to bottom right, #FF0401, #820541)");

    // declare minutes
    var mins = 52;

    // calculate seconds
    secs = mins * 60;

    interval = setInterval(function () {
        // decrement seconds
        secs--;

        // display minutes and seconds
        // if less than ten include a zero in the tenths place
        minutesBox.value = mins < 10 ? "0" + getMinutes() : getMinutes();
        secondsBox.value = getSeconds() < 10 ? ":0" + getSeconds() : ":" + getSeconds();

        // end when seconds reach zero
        // alert time up
        if (!secs) {
            clearInterval(interval, 1000);
            alert("Time's up! Take a break.");
        }

    }, 1000)
});

// Break button event listener
// event listener runs countdown() function when Start button is clicked
const breakBtn = document.querySelector('.break-btn');
breakBtn.addEventListener('click', event => {
    // change background color
    changeBackgroundColor("linear-gradient(to bottom right, #7a7fba, #11c37c)");

    // declare minutes
    var mins = 17;

    // calculate seconds
    secs = mins * 60;

    interval = setInterval(function () {
        // decrement seconds
        secs--;

        // display minutes and seconds
        // if less than ten include a zero in the tenths place
        minutesBox.value = mins < 10 ? "0" + getMinutes() : getMinutes();
        secondsBox.value = getSeconds() < 10 ? ":0" + getSeconds() : ":" + getSeconds();

        // end when seconds reach zero
        // alert time up
        if (!secs) {
            clearInterval(interval, 1000);
            alert("Time's up! Get to work.");
        }

    }, 1000)
});

// Stop button event listener
const stopBtn = document.querySelector('.stop-btn');
stopBtn.addEventListener('click', event => {  
    changeBackgroundColor("linear-gradient(grey,silver)");
    clearInterval(interval);
});