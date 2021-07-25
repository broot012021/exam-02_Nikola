const burgerBtn = document.querySelector('#menu');
const nav = document.querySelector('#nav');

burgerBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
} )