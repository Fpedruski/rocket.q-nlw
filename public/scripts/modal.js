/** Creating a function called Modal to be upload in the main.js*/

export default function Modal() {

  const modalWrapper = document.querySelector(".modal-wrapper")
  const cancelButton = document.querySelector(".button.cancel")

  // Arrow function NOT necessary as we are using the a module to parse the close( function ) inside the same module
  cancelButton.addEventListener("click",close)

  function open() {
    // Funcionalidade de atribuir a classe active do modal
    modalWrapper.classList.add("active");
  }
  function close() {
    modalWrapper.classList.remove("active");
    // Funcionalidade de retirar a classe active do modal
  }

  return {
    open,
    close,
  };
}
