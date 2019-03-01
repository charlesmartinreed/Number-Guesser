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

	// check for win cases
	if(guess === winningNumber) {
		// GAME OVER - WON
		endGame(true, `${winningNumber} is correct! You WIN!`)
	} else {
		guessesLeft -= 1;

		if(guessesLeft === 0){
			// GAME OVER - LOST
			endGame(false, `Game over, you lost :( The correct number was ${winningNumber}.`)
		} else if (isNaN(guess) || guess < min || guess > max) {
			setMessage(`Please enter a number between ${min} and ${max}`, 'red');
		} else {
			// GAME CONTINUES
			guessInput.style.borderColor = 'red';
			guessInput.value = '';
			setMessage(`Sorry, ${guess} is incorrect. You have ${guessesLeft} guesses left`, 'red');
		}
	}
});

function endGame(won, msg){
		let color;
		// SET THE BORDER COLOR
		won === true ? color = 'green' : color = 'red';

		// DISABLE INPUTS
		guessInput.disabled = true;
		guessBtn.disabled = true;


		setMessage(msg, color);
}

function setMessage(msg, color) {
	guessMessage.style.color = color;
	guessMessage.textContent = msg;
}
