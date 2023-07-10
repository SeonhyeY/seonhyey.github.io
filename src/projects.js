'use strict';

// Projects section filtering with color chagable button
const category = document.querySelector('.categories');
const projects = document.querySelectorAll('.project');
const projectContainer = document.querySelector('.projects');

category.addEventListener('click', (event) => {
  const keyword = event.target.dataset.category;
  if (keyword == null) {
    return;
  }

  // btn bg color change
  const active = document.querySelector('.category--selected');
  active.classList.remove('category--selected');
  event.target.classList.add('category--selected');

  // filtering projects by keyword
  projectContainer.classList.add('anim-out');
  projects.forEach((project) => {
    if (keyword == 'all' || keyword == project.dataset.type) {
      project.style.display = 'block';
    } else {
      project.style.display = 'none';
    }
  });
  setTimeout(() => {
    projectContainer.classList.remove('anim-out');
  }, 400);
});
