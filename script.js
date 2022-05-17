const openModal = document.querySelector(".modal-open");
const modalOverlay = document.querySelector(".modal-overlay");
const modalClose = document.querySelector(".modal-close");

openModal.addEventListener("click", () => {
  modalOverlay.classList.add("active");
  document.body.style.overflow = "fixed";
});

modalClose.addEventListener("click", () => {
  modalOverlay.classList.remove("active");
  document.body.style.position = "static";
});
