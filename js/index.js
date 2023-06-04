const sliderTabButtons = document.querySelectorAll('.slider-pagination-button');
const slides = document.querySelectorAll('.slider-item');
const buttonPrevious = document.querySelector('.button-previous-slide');
const buttonNext = document.querySelector('.button-next-slide');
let counter = 0;

const clearClasses = () => {
  document.querySelector('.current-slider').classList.remove('current-slider');
  document.querySelector('.slider-pagination-current').classList.remove('slider-pagination-current');
};

const changeColor = (theme) => {
  document.body.style.backgroundColor = theme;
};

sliderTabButtons.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    clearClasses();
    counter = index;
    slides[index].classList.add('current-slider');
    tab.classList.add('slider-pagination-current');
    changeColor(slides[index].dataset.theme);
  });
});

buttonPrevious.addEventListener('click', () => {
  clearClasses();
  counter = counter - 1;
  if (counter < 0) {
    counter = slides.length - 1;
  }

  slides[counter].classList.add('current-slider');
  sliderTabButtons[counter].classList.add('slider-pagination-current');
  changeColor(slides[counter].dataset.theme);
});

buttonNext.addEventListener('click', () => {
  clearClasses();
  counter = counter + 1;
  if (counter > slides.length - 1) {
    counter = 0;
  }
  slides[counter].classList.add('current-slider');
  sliderTabButtons[counter].classList.add('slider-pagination-current');
  changeColor(slides[counter].dataset.theme);
});

// Modal Window

const additionalButton = document.querySelector('.modal-window-link');
const modalContainer = document.querySelector('.modal-container');
const modalWindowClose = document.querySelector('.modal-window-close-button');

additionalButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  modalContainer.classList.remove('modal-container-closed');
});

modalWindowClose.addEventListener('click', () => {
  modalContainer.classList.add('modal-container-closed');
});

modalContainer.addEventListener('click', (evt) => {
  if (!evt.target.classList.contains('modal-window')) {
    modalContainer.classList.add('modal-container-closed');
  }
});

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    modalContainer.classList.add('modal-container-closed');
  }
});
