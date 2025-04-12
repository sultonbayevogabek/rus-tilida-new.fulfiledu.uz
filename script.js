'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('#form817772954');
  const submitButton = document.querySelector('#form-submit-btn');

  form.addEventListener('submit', function (event) {
    event.preventDefault();
  })

  submitButton.addEventListener('click', (event) => {
    event.preventDefault();

    const nameInput = document.querySelector('#input_9259215262381');
    const phoneInput = document.querySelector('.js-phonemask-result.js-tilda-rule');

    const name = nameInput?.value?.trim();
    const phone = phoneInput?.value?.replace(/\D/g, "");

    if (!name?.length || phone?.length !== 12) {
      return;
    }

    localStorage.setItem('user', JSON.stringify({
      name, phone: '+' + phone, time: new Date().toLocaleString()
    }))

    window.location.href = window.location.origin + `/telegram.html`
  })
})
