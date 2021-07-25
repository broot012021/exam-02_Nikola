const burgerBtn = document.querySelector('#menu');
const nav = document.querySelector('#nav');

burgerBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
} );

$(document).ready(function(){
    $('.slider').slick({
        infinite: true
    });
    $('.single-item').slick();
  });

  