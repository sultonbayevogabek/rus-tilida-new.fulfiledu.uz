'use strict';

let user = JSON.parse(localStorage.getItem('user'));

if (user && user?.name && user?.phone && user?.time) {
  const formData = new FormData();
  formData.append('Ismi', user?.name);
  formData.append('Telefon raqami', user?.phone);
  formData.append(`Ro'yxatdan o'tgan vaqti`, user?.time);
  console.log(formData);
  fetch('https://script.google.com/macros/s/AKfycbz6PpqUm5bFyjJY-XXV3SFwM2vgrhIcFrPrTkwkm4fFf_RhkK4cHzZK6HWaEwKI9y1O/exec', {
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
