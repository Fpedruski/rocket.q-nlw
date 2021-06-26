import Modal from './modal.js';

const modal = Modal();

const checkButtons = document.querySelectorAll('.actions a.check');
const deleteButtons = document.querySelectorAll('.actions a.delete');

checkButtons.forEach((button) => {
	// Arrow function necessary as we are using the a module to parse the open( function )
	button.addEventListener('click', (event) => {
		// Abrir a modal
		modal.open();
	});
});

deleteButtons.forEach((button) => {
	button.addEventListener('click', (event) => {
		modal.open();
	});
});
