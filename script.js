var secs = 0;
var mins = 0;
var lapse = 0;
var interval;

function timer(minutes, color) {
    const minutesBox = document.querySelector('.minutes');
    const secondsBox = document.querySelector('.seconds');

    // set background color
    setBackgroundColor(color);

    // calculate seconds
    secs = minutes * 60;

    interval = setInterval(function () {
        // decrement seconds
        secs--;

        // display minutes and seconds
        // if less than ten include a zero in the tenths place
        minutesBox.value = minutes < 10 ? "0" + getMinutes() : getMinutes();
        secondsBox.value = getSeconds() < 10 ? ":0" + getSeconds() : ":" + getSeconds();

        // end when seconds reach zero
        // alert time up
        if (!secs) {
            clearInterval(interval, 1000);
            alert("Time's up");
        }

    }, 1000)
}

// function gets minutes
function getMinutes() {
    mins = Math.floor(secs / 60);
    return mins;
}

// function gets seconds
function getSeconds() {
    return secs - Math.round(mins * 60);
}

// function sets background color
function setBackgroundColor(color) {
    document.body.style.background = color;
}
// Start button event listener
// Work for 52 minutes
const workBtn = document.querySelector('.work-btn');
workBtn.addEventListener('click', event => {
    lapse = 52;

    // call timer function
    timer(lapse, "linear-gradient(to bottom right, #FF0401, #820541)");
});

// Break button event listener
// Take a break for 17 minutes
const breakBtn = document.querySelector('.break-btn');
breakBtn.addEventListener('click', event => {
    lapse = 17;
    
    // call timer function
    timer(lapse, "linear-gradient(to bottom right, #7a7fba, #11c37c)");
});

// Stop button event listener
const stopBtn = document.querySelector('.stop-btn');
stopBtn.addEventListener('click', event => {
    setBackgroundColor("linear-gradient(grey,gainsboro)");
    clearInterval(interval);
});