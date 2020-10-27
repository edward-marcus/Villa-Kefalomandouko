const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = false;
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
  const current = document.querySelector('.current'); //Get the slide with the current class
  current.classList.remove('current'); //Remove the current class from that slide

  //Check for next slide
  if (current.nextElementSibling) {
    //Add current to the next sibling(slide)
    current.nextElementSibling.classList.add('current');
  } else {
    //Remove the current attribute from the last slide
    current.classList.remove('current');
    //Add it to the first element - the first slide
    slides[0].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

const prevSlide = () => {
  const current = document.querySelector('.current'); //Get the slide with the current class
  current.classList.remove('current'); //Remove the current class from that slide

  //Check for next slide
  if (current.previousElementSibling) {
    //Add current to the previous sibling(slide)
    current.previousElementSibling.classList.add('current');
  } else {
    //Remove the current attribute from the last slide
    current.classList.remove('current');
    //Add it to the last element - the last slide
    slides[slides.length - 1].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

//Button events
next.addEventListener('click', (e) => {
  nextSlide();
});
prev.addEventListener('click', (e) => {
  prevSlide();
});
