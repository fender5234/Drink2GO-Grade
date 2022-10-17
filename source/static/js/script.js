import './nouislider-init.js';


const inputLeft = document.querySelector('.catalog__input');
const inputRight = document.querySelector('.catalog__input-rigth');
const inputs = [inputLeft, inputRight];

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination'
  },

  // Navigation arrows
  navigation: {
    nextEl: '.promo__button--prev',
    prevEl: '.promo__button--next'
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar'
  }
});

