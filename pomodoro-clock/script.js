const breakLength = document.getElementById("break-length");
const sessionLength = document.getElementById("session-length");
const timeLeft = document.getElementById("time-left");
const timerLabel = document.getElementById("timer-label");
const startStop = document.getElementById("start_stop");
const beep = document.getElementById("beep");

// Initialize the timer value (25 minutes in seconds), a flag for the timer state, and the interval
let timeLeftValue = 25 * 60;
let isTimerStop = true;
let timerInterval;

// Format the time to a readable mm:ss format
const formatTime = (time) => {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    // Apply a red color if the time is less than 1 minute
    timeLeft.className = minutes < 1 ? "redColor" : "";

    // Ensure the minutes and seconds have a leading zero if less than 10
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    timeLeft.innerText = `${minutes}:${seconds}`;
};

// Increment the session or break time when the user clicks the up button
const increment = (label, lengthElement) => {
    let time = Number(lengthElement.innerText);
    if (isTimerStop && time < 60) {
        time += 1;
        lengthElement.innerText = time;
        timeLeftValue = timerLabel.innerText === label ? time * 60 : timeLeftValue;
        formatTime(timeLeftValue);
    }
};

// Decrement the session or break time when the user clicks the down button
const decrement = (label, lengthElement) => {
    let time = Number(lengthElement.innerText);
    if (isTimerStop && time > 1) {
        time -= 1;
        lengthElement.innerText = time;
        timeLeftValue = timerLabel.innerText === label ? time * 60 : timeLeftValue;
        formatTime(timeLeftValue);
    }
};

// Toggle the timer start/stop action
const timerToggle = () => {
    if (isTimerStop) {
        startStop.innerText = "pause";
    } else {
        startStop.innerText = "play_arrow";
    }
    isTimerStop = !isTimerStop;
    if (isTimerStop) {
        clearInterval(timerInterval);// Stop the timer interval if the timer is stopped
    } else {
        // Start the timer interval if the timer is running
        timerInterval = setInterval(() => {
            if (timeLeftValue > 0) {
                timeLeftValue -= 1;
            } else {
                beep.currentTime = 0;// Reset the beep sound
                beep.play();// Play the beep sound when the timer reaches 0
                isTimerStop = true; // Stop the timer
                
                // Switch between session and break when the timer ends
                if (timerLabel.innerText === "Session") {
                    timerLabel.innerText = "Break";
                    timeLeftValue = Number(breakLength.innerText) * 60;
                } else {
                    timerLabel.innerText = "Session";
                    timeLeftValue = Number(sessionLength.innerText) * 60;
                }
            }
            formatTime(timeLeftValue);
        }, 1000);// Update every second
    };

}

// Reset the timer to its initial state
const resetTimer = () => {
    clearInterval(timerInterval); // Stop the timer interval
    isTimerStop = true; // Set the timer state to stopped
    breakLength.innerText = 5; // Reset the break time
    sessionLength.innerText = 25; // Reset the session time
    timerLabel.innerText = "Session"; // Set the label to "Session"
    timeLeftValue = 25 * 60; // Reset the timer to 25 minutes
    startStop.innerText = "play_arrow"; // Set the button text to "play"
    formatTime(timeLeftValue); // Update the displayed time
    beep.pause(); // Stop the beep sound if it was playing
    beep.currentTime = 0; // Reset beep sound to the beginning
};
