const openModalBtn = document.querySelectorAll('[data-modal-open]');
const closeModalBtn = document.querySelector('[data-modal-close]');
const modal = document.querySelector('[data-modal]');


  console.log(openModalBtn);
  // openModalBtn.addEventListener('click', toggleModal);
  closeModalBtn.addEventListener('click', toggleModal);

for (var i = 0; i < openModalBtn.length; i++) {
  openModalBtn[i].addEventListener('click', toggleModal);
}

  function toggleModal() {
    modal.classList.toggle('is-hidden');
  }

