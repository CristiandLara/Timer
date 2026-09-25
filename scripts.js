// Selectores del DOM
const hoursInput = document.querySelector('#hours');
const minutesInput = document.querySelector('#minutes');
const secondsInput = document.querySelector('#seconds');
const hoursDisplay = document.querySelector('#hours-display');
const minutesDisplay = document.querySelector('#minutes-display');
const secondsDisplay = document.querySelector('#seconds-display');
const startButton = document.querySelector('#start-button');
const restartButton = document.querySelector('#restart-button');
const timerState = document.querySelector('#timer-state');

// Event listeners
[hoursInput, minutesInput, secondsInput].forEach((input) => input.addEventListener('input', restartTimer));
startButton.addEventListener('click', startTimer);
restartButton.addEventListener('click', restartTimer);

// Estado del timer
let remainingSeconds = 0;
let timerId = null;

// Funciones auxiliares
function pad(value) {
	return String(value).padStart(2, '0');
}

function readInputs() {
	const hours = Math.min(99, Math.max(0, Number(hoursInput.value) || 0));
	const minutes = Math.min(59, Math.max(0, Number(minutesInput.value) || 0));
	const seconds = Math.min(59, Math.max(0, Number(secondsInput.value) || 0));
	hoursInput.value = hours;
	minutesInput.value = minutes;
	secondsInput.value = seconds;
	return (hours * 3600) + (minutes * 60) + seconds;
}

function renderTimer() {
	const hours = Math.floor(remainingSeconds / 3600);
	const minutes = Math.floor((remainingSeconds % 3600) / 60);
	const seconds = remainingSeconds % 60;
	hoursDisplay.textContent = pad(hours);
	minutesDisplay.textContent = pad(minutes);
	secondsDisplay.textContent = pad(seconds);
}

function stopTimer() {
	clearInterval(timerId);
	timerId = null;
}

function startTimer() {
	if (timerId) {
		stopTimer();
		timerState.textContent = 'PAUSED';
		startButton.innerHTML = '<span class="button-icon">▶</span> Start';
		return;
	}
	if (remainingSeconds === 0) remainingSeconds = readInputs();
	if (remainingSeconds === 0) return;
	timerState.textContent = 'COUNTDOWN';
	startButton.innerHTML = '<span class="button-icon">Ⅱ</span> Pause';
	timerId = setInterval(() => {
		remainingSeconds -= 1;
		renderTimer();
		if (remainingSeconds <= 0) {
			stopTimer();
			timerState.textContent = 'COMPLETE';
			startButton.innerHTML = '<span class="button-icon">▶</span> Start';
		}
	}, 1000);
}

function restartTimer() {
	stopTimer();
	remainingSeconds = readInputs();
	renderTimer();
	timerState.textContent = 'STANDBY';
	startButton.innerHTML = '<span class="button-icon">▶</span> Start';
}

// Inicializacion del timer
renderTimer();
