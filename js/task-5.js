const name = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

name.addEventListener('input', () => {
  nameOutput.textContent = name.value || 'Anonymous';
});
