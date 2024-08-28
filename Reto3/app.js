let startButton = document.getElementById('startBtn');
let pauseButton = document.getElementById('pauseBtn');
let resetButton = document.getElementById('resetBtn');
let minutesDisplay = document.getElementById('minutes');
let secondsDisplay = document.getElementById('seconds');
let millisecondsDisplay = document.getElementById('milliseconds');

let timer;
let isRunning = false;
let elapsedTime = 0;
let lastUpdateTime = 0;

function updateDisplay() {
    let milliseconds = Math.floor((elapsedTime % 1000) / 10);
    let seconds = Math.floor((elapsedTime / 1000) % 60);
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);

    millisecondsDisplay.textContent = milliseconds.toString().padStart(2, '0');
    secondsDisplay.textContent = seconds.toString().padStart(2, '0');
    minutesDisplay.textContent = minutes.toString().padStart(2, '0');
}

function runTimer() {
    let now = Date.now();
    elapsedTime += now - lastUpdateTime;
    lastUpdateTime = now;
    updateDisplay();
    timer = setTimeout(runTimer, 10);
}

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        lastUpdateTime = Date.now();
        runTimer();
    }
}

function pauseTimer() {
    if (isRunning) {
        isRunning = false;
        clearTimeout(timer);
    }
}

function resetTimer() {
    isRunning = false;
    clearTimeout(timer);
    elapsedTime = 0;
    updateDisplay();
}

startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);
