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

function initMap() {
  // The location of Uluru
  const uluru = { lat: 40.682351, lng: -73.896630 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

// Прокрутка при клике

const menuLinks = document.querySelectorAll('.nav-list__link[data-goto]');

menuLinks.forEach(menuLink => {
  menuLink.addEventListener('click', menuLinkClick);
});

function menuLinkClick(e) {
  const menuLink = e.target;
  const gotoBlock = document.querySelector(menuLink.dataset.goto);
  const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;

  window.scrollTo({
    top: gotoBlockValue,
    behavior: 'smooth'
  });
  e.preventDefault();
}

  