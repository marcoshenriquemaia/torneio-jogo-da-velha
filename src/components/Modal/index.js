const modal = (text, onOk) => {
  const $body = document.querySelector("body");

  const modalContainer = document.createElement("div");
  modalContainer.classList.add("container-modal");

  const modalElement = document.createElement("div");
  modalElement.classList.add("modal");

  const modalText = document.createElement("p");
  modalText.classList.add("modal-text");
  modalText.textContent = text;

  const modalButton = document.createElement("button");
  modalButton.classList.add("modal-button");
  modalButton.textContent = "Ok";

  modalContainer.appendChild(modalElement);
  modalElement.appendChild(modalText);
  modalElement.appendChild(modalButton);

  modalButton.addEventListener("click", function () {
    onOk && onOk()
    modalContainer.remove();
  });

  modalContainer.addEventListener("click", function (event) {
    if (!event.target.classList.contains("container-modal")) return;
    modalContainer.remove();
  });

  $body.appendChild(modalContainer);

  return false;
};

export default modal;
