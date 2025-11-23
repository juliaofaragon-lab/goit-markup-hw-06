(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  // відкрити модалку
  refs.openModalBtn.addEventListener('click', toggleModal);
  // закрити по хрестику
  refs.closeModalBtn.addEventListener('click', toggleModal);
  // закрити по кліку на бекдроп
  refs.modal.addEventListener('click', onBackdropClick);
  // закрити по Esc
  window.addEventListener('keydown', onEscPress);

  function toggleModal() {
    refs.modal.classList.toggle('is-open');
    document.body.classList.toggle('modal-open');
  }

  function onBackdropClick(event) {
    if (event.target === refs.modal) {
      toggleModal();
    }
  }

  function onEscPress(event) {
    if (event.key === 'Escape' && refs.modal.classList.contains('is-open')) {
      toggleModal();
    }
  }
})();
