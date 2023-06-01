const myInput = document.querySelector('#validation-input');

myInput.addEventListener('blur', () => {
  const expectedLength = parseInt(myInput.dataset.length);
  const enteredValue = myInput.value.length;

  myInput.classList.remove('valid', 'invalid');

  if (enteredValue === expectedLength) {
    myInput.classList.add('valid');
  } else {
    myInput.classList.add('invalid');
  }
});
