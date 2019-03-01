// Game values
let min = 1,
		max = 10,
		winningNumber = 2,
		guessesLeft = 3;

// UI Elements
const gameEl = document.querySelector('#game'),
			minNumberEl = document.querySelector('.min-number'),
			maxNumberEl = document.querySelector('.max-number'),
			guessBtn = document.querySelector('#guess-btn'),
			guessInput = document.querySelector('#guess-input'),
			guessMessage = document.querySelector('.message');

// assign the min and max in the corresponding spans
minNumberEl.textContent = min;
maxNumberEl.textContent = max;

// create the event listener for our button
guessBtn.addEventListener('click', function(){
	let guess = parseInt(guessInput.value);

	// validate input - not empty, less than
	if(isNaN(guess) || guess < min || guess > max) {
		setMessage(`Please enter a number between ${min} and ${max}`, 'red');
	}

	// check for win cases
	if(guess === winningNumber) {
		guessInput.disabled = true;
		guessInput.style.borderColor = 'green';
		setMessage(`${winningNumber} is correct! You WIN!`, 'green');
	}
});

function setMessage(msg, color) {
	guessMessage.style.color = color;
	guessMessage.textContent = msg;
}
