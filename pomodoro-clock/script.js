const breakLength = document.getElementById("break-length");
const sessionLength = document.getElementById("session-length");
const timeLeft = document.getElementById("time-left");
const timerLabel = document.getElementById("timer-label");
const startStop = document.getElementById("start_stop");
const beep = document.getElementById("beep");

let timeLeftValue = 25 * 60;
let isTimerStop = true;
let timerInterval;

const formatTime = (time) => {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    timeLeft.className = minutes < 1 ? "redColor" : "";

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    timeLeft.innerText = `${minutes}:${seconds}`;
};


const increment = (label, lengthElement) => {
    let time = Number(lengthElement.innerText);
    if (isTimerStop && time < 60) {
        time += 1;
        lengthElement.innerText = time;
        timeLeftValue = timerLabel.innerText === label ? time * 60 : timeLeftValue;
        formatTime(timeLeftValue);
    }
};

const decrement = (label, lengthElement) => {
    let time = Number(lengthElement.innerText);
    if (isTimerStop && time > 1) {
        time -= 1;
        lengthElement.innerText = time;
        timeLeftValue = timerLabel.innerText === label ? time * 60 : timeLeftValue;
        formatTime(timeLeftValue);
    }
};

const timerToggle = () => {
    if (isTimerStop) {
        startStop.innerText = "pause";
    } else {
        startStop.innerText = "play_arrow";
    }
    isTimerStop = !isTimerStop;
    if (isTimerStop) {
        clearInterval(timerInterval);
    } else {
        timerInterval = setInterval(() => {
            if (timeLeftValue > 0) {
                timeLeftValue -= 1;
            } else {
                beep.currentTime = 0;
                beep.play();
                isTimerStop = true;
                if (timerLabel.innerText === "Session") {
                    timerLabel.innerText = "Break";
                    timeLeftValue = Number(breakLength.innerText) * 60;
                } else {
                    timerLabel.innerText = "Session";
                    timeLeftValue = Number(sessionLength.innerText) * 60;
                }
            }
            formatTime(timeLeftValue);
        }, 1000);
    };

}
const resetTimer = () => {
    clearInterval(timerInterval);
    isTimerStop = true;
    breakLength.innerText = 5;
    sessionLength.innerText = 25;
    timerLabel.innerText = "Session";
    timeLeftValue = 25 * 60;
    startStop.innerText = "play_arrow";
    formatTime(timeLeftValue);
    beep.pause();
    beep.currentTime = 0;
};
