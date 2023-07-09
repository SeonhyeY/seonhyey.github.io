const header = document.querySelector('.header');
const headerHeight = header.getBoundingClientRect().height;

// Scrolling down: adapt the dark style to header
document.addEventListener('scroll', () => {
  if (window.scrollY > headerHeight) {
    header.classList.add('header--dark');
  } else {
    header.classList.remove('header--dark');
  }
});
