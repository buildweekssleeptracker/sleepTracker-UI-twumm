const formSubmit = document.querySelector('.get-updates button');
formSubmit.addEventListener('click', (event) => {
  event.preventDefault();
  formSubmit.textContent = 'Thanks';
  document.querySelector('.get-updates input').value = '';
})