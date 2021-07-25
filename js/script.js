const burgerBtn = document.querySelector('#menu');
const nav = document.querySelector('#nav');

burgerBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
} );

$(document).ready(function(){
    $('.news-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
        variableWidth: false,
        responsive: [
            {
                breakpoint: 1320,
                settings: {
                    slidesToShow: 2,
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
      });
  });

  