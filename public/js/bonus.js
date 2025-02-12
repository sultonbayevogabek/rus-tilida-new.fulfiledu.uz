'use strict';

// Index page
try {
  const phone = document.getElementById("phone");
  const allowedKeys = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    'Backspace',
    'ArrowLeft',
    'ArrowUp',
    'ArrowDown',
    'ArrowRight',
    'Enter'
  ]

  phone.addEventListener("keydown", e => {
    if (!allowedKeys.includes(e.key)) {
      e.preventDefault();
    }
  })

  phone.addEventListener("input", e => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    let parts = [value.slice(0, 2), value.slice(2, 5), value.slice(5, 7), value.slice(7, 9)];

    let result = parts[0];

    for (let i = 1; i < parts.length; i++) {
      if (parts[i]) {
        result += `-${parts[i]}`;
      }
    }

    e.target.value = result;
  })
  // Bonus modal
  const submitButtons = document.querySelectorAll('[data-submit-button]');
  const modalBonusBackdrop = document.querySelector('[data-modal-bonus-backdrop]');
  const modalBonusCloserElements = document.querySelectorAll('[data-modal-bonus-close]');
  const bonusForm = document.querySelector('[data-bonus-form]');
  const formBonusAlert = document.querySelector('[data-form-bonus-alert]');

  submitButtons.forEach(button => {
    button.addEventListener('click', () => {
      console.log('ok')
      modalBonusBackdrop.classList.remove('hidden')
    })
  })

  function closeBonusModal() {
    modalBonusBackdrop.classList.add('hidden');
  }

  window.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeBonusModal();
    }
  })

  modalBonusCloserElements.forEach(el => {
    el.addEventListener('click', e => {
      if (e.target.hasAttribute('data-modal-bonus-close')) {
        closeBonusModal();
      }
    })
  })

  bonusForm.addEventListener('submit', async e => {
    e.preventDefault();
    const submitButton = e.target.querySelector('[data-submit-button]');
    const name = e.target.querySelector('#name').value.trim();
    const phone = e.target.querySelector('#phone').value?.replace(/[^0-9]/g, '');

    if (!name.length) {
      formBonusAlert.textContent = 'Ismingizni kiriting';
      formBonusAlert.classList.remove('hidden');
      return;
    }
    if (phone?.length !== 9) {
      formBonusAlert.textContent = 'Telefon raqamingizni kiriting';
      formBonusAlert.classList.remove('hidden');
      return;
    }
    if (name.length && phone?.length === 9) {
      submitButton.setAttribute('disabled', true);
      submitButton.textContent = 'Yuborilmoqda...'
      const formData = new FormData();

      formData.append('Ismi', name);
      formData.append('Telefon raqami', "+998" + phone);
      formData.append(`Ro'yxatdan o'tgan vaqti`, new Date().toLocaleString());

      location.href = `https://t.me/+dFTN9jb0fVUyZmMy`;

      submitButton.removeAttribute('disabled');
      submitButton.textContent = "Ro'yxatdan o'tish";
      closeBonusModal();
      await fetch('https://script.google.com/macros/s/AKfycbx3BM4pk278QxpvEgdiHdV1fI4XVI73-EoqCFpodIISga_nlQxtlZE8aCiL6Us9zyqubA/exec', {
        method: 'POST',
        body: formData
      })
    }
  })

} catch (e) {
}
