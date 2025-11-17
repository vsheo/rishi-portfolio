// select button and section
const allButton = document.querySelectorAll('.interaction-button');
// console.log(allButton.item(index))

// // select the secttions that belong to this button
// const currentView = document.querySelectorAll('.grid-cell > *:nth-of-type(1)');
// const newView = document.querySelectorAll('.grid-cell > *:nth-of-type(2)');
// console.log(currentView)
// console.log(newView)

allButton.forEach((button, index) => {
	button.addEventListener('click', (e) => {
		// select the secttions that belong to this button
		let cellNumber = index + 1
		const currentView = document.querySelector(`.grid-cell:nth-of-type(${cellNumber}) > *:nth-of-type(1)`);
		const newView = document.querySelector(`.grid-cell:nth-of-type(${cellNumber}) > *:nth-of-type(2)`);

		console.log(cellNumber);
		currentView.classList.toggle('hidden');
		newView.classList.toggle('hidden');
	});
});

// change target
// button.addEventListener('click', () => {
// 	currentView.classList.toggle('hidden');
// 	newView.classList.toggle('hidden');
// });
