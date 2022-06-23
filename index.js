// Track the count
let count = 5;

// Run a callback function once every second
let timer = setInterval(function () {

	// Reduce count by 1
	count--;

	// Update the UI
	if (count > 0) {
		clock.textContent = count;
	} else {
        var audio = new Audio('Assets/Audio/BeleiveinDreamFS.wav')
		audio.play();
        clock.textContent = '⏰';

		clearInterval(timer);
	}

}, 1000);