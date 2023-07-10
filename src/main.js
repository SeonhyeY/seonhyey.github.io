'use strict';
// Adapt the dark style to header when the page scrolls down
const header = document.querySelector('.header');
const headerHeight = header.offsetHeight;

document.addEventListener('scroll', () => {
  if (window.scrollY > headerHeight) {
    header.classList.add('header--dark');
  } else {
    header.classList.remove('header--dark');
  }
});

// Make home gradually trasparent when the page scrolls down
const home = document.querySelector('.home__container');
const homeHeight = home.offsetHeight;

document.addEventListener('scroll', () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

// Show up arrow-up button when the page scrolls down
// Make disappear arrow button when the page is at the top
const scrollTop = document.querySelector('.arrow-up');

document.addEventListener('scroll', () => {
  if (window.scrollY < homeHeight / 2) {
    scrollTop.classList.add('hide');
  } else {
    scrollTop.classList.remove('hide');
  }
});

// Toggle the header nav bar
const navbarMenu = document.querySelector('.header__menu');
const navbarToggle = document.querySelector('.header__toggle');

navbarToggle.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
});

// Close the Navbar menu automatically when the menu is clicked
navbarMenu.addEventListener('click', () => {
  navbarMenu.classList.remove('open');
});
