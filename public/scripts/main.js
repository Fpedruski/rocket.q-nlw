import Modal from './modal.js';

const modal = Modal();

const modalTitle = document.querySelector('.modal h2');
const modalDescription = document.querySelector('.modal p');
const modalButton = document.querySelector('.modal button');
const checkButtons = document.querySelectorAll('.actions a.check');

checkButtons.forEach(button => {
	// Arrow function necessary as we are using the a module to parse the open( function )
	button.addEventListener("click", handleClick);
});

const deleteButtons = document.querySelectorAll('.actions a.delete');

deleteButtons.forEach(button => {
	button.addEventListener('click', (event) => handleClick(event, false));

});

function handleClick(event, check = true) {
	// Reitar # em links
	event.preventDefault();
	const text = check ? "Marcar como lida" : "Excluir";
	const slug = check ? "check" : "delete"
	const roomId = document.querySelector("#room-id").dataset.id
	const questionId = event.target.dataset.id


	const form = document.querySelector(".modal form")
	form.setAttribute("action", `room/${roomId}/${questionId}/${slug}`);

	modalTitle.innerHTML = `${text} esta pergunta`;

	modalDescription.innerHTML = `Tem certeza que deseja ${text.toLocaleLowerCase()} esta pergunta?`;

	modalButton.innerHTML = `Sim, ${text.toLocaleLowerCase()}`
	check? modalButton.classList.remove("red") : modalButton.classList.add("red");
	/** Abrir modal */
	modal.open();
};

/** Min - 2:04 29jun. 2021 */
/** Min - 2:19 29jun. 2021 */
