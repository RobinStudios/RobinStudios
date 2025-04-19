// Select carousel elements
const track = document.querySelector('.carousel-track');
const leftBtn = document.querySelector('.nav.left');
const rightBtn = document.querySelector('.nav.right');

// Track the current slide index
let index = 0;

// Update carousel position
const updateCarousel = () => {
  const width = track.children[0].clientWidth;
  track.style.transform = `translateX(-${index * width}px)`;
};

// Handle left button click
leftBtn.addEventListener('click', () => {
  if (index > 0) {
    index--;
    updateCarousel();
  }
});

// Handle right button click
rightBtn.addEventListener('click', () => {
  if (index < track.children.length - 1) {
    index++;
    updateCarousel();
  }
});

// Update position on resize (for responsiveness)
window.addEventListener('resize', updateCarousel);

// Optional: update on load in case images are delayed
window.addEventListener('load', updateCarousel);
