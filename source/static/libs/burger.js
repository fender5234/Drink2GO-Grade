const buttonMenu = document.querySelector('.header__button-menu');
const navigationMenu = document.querySelector('.header__nav');

buttonMenu.onclick = function () {
  navigationMenu.classList.toggle('header__nav--show');
  buttonMenu.classList.toggle('header__button-menu--open');
};
