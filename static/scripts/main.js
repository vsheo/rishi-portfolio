// ---------------------------------------------------------interaction button---------------------------------------------------------
// select all interaction buttons
const allButton = document.querySelectorAll('.interaction-button');

// listen for a click, and remember the index of that klik
allButton.forEach((button, index) => {
	button.addEventListener('click', (e) => {
		// +1 because CSS starts counting at 1
		let cellNumber = index + 1;

		// select the children of the grid-cell that corresponds to the button that was clicked. (the children in the same container as the button)
		const currentView = document.querySelector(
			`.grid-cell:nth-of-type(${cellNumber}) > *:nth-of-type(1)`
		);
		const newView = document.querySelector(
			`.grid-cell:nth-of-type(${cellNumber}) > *:nth-of-type(2)`
		);

		// change the one that is displayed
		currentView.classList.toggle('hidden');
		newView.classList.toggle('hidden');
	});
});
