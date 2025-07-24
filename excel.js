'use strict';

let user = JSON.parse(localStorage.getItem('user'));

if (user && user?.name && user?.phone && user?.time) {
  const formData = new FormData();
  formData.append('Ismi', user?.name);
  formData.append('Telefon raqami', user?.phone);
  formData.append(`Ro'yxatdan o'tgan vaqti`, user?.time);
  fetch('https://script.google.com/macros/s/AKfycbwlgWrQ18cXcuK2pcD0AMfNMYXPC46lQUygyjsM8-CUCt4-OwRKdGotef1aaN_hk_RX/exec', {
    method: 'POST',
    body: formData
  })
    .then()
    .then(() => {
      localStorage.clear();
    })
} else {
  localStorage.clear();
}
