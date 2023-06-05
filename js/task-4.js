const counterValue = document.querySelector('#value');

counterValue.textContent = 0;
const less = document.querySelector('[data-action="decrement"]');
const more = document.querySelector('[data-action="increment"]');

less.addEventListener('click', () => {counterValue.textContent = Number(counterValue.textContent) - 1});
more.addEventListener('click', () =>  {counterValue.textContent = Number(counterValue.textContent) + 1});