// Stopwatch JavaScript File

// Variables to keep track of the elapsed time
let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];

// Reference to the HTML element displaying the time
let time_ref = document.querySelector(".timer-display");

// Interval ID used to control the setInterval and clearInterval functions
let num = null;

/**
 * Event listener for the Start button
 * Starts the timer and updates the display every 10 milliseconds
 */
document.getElementById("start-timer").addEventListener("click", function() {
    if (num !== null) {
        clearInterval(num);
    }
    num = setInterval(displayTimer, 10);
});

/**
 * Event listener for the Pause button
 * Pauses the timer by clearing the interval
 */
document.getElementById("pause-timer").addEventListener("click", function() {
    clearInterval(num);
});

/**
 * Event listener for the Reset button
 * Resets the timer and updates the display to 00 : 00 : 00.000
 */
document.getElementById("reset-timer").addEventListener("click", function() {
    clearInterval(num);
    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    time_ref.innerHTML = "00 : 00 : 00.000";
});

/**
 * Function to update the timer display
 * Increments the time variables and updates the HTML element
 */
function displayTimer() {
    milliseconds += 10;
    if (milliseconds == 1000) {
        milliseconds = 0;
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minutes++;
            if (minutes == 60) {
                minutes = 0;
                hours++;
            }
        }
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

    time_ref.innerHTML = `${h} : ${m} : ${s}.${ms}`;
}
