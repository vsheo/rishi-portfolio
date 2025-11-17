// select button and section
const button = document.querySelector('.button-0');
const currentSection = document.querySelector('.view-1');
const newSection = document.querySelector('.view-2');
// change target
button.addEventListener('click', () => {
	currentSection.classList.toggle('hidden');
	newSection.classList.toggle('hidden');
});
