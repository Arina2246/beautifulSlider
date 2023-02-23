const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');
const sideBar = document.querySelector('.sidebar');
const mainSlide = document.querySelector('.main-slide');
const slidesCount = mainSlide.querySelectorAll('div').length;
const container = document.querySelector('.container');
let activeSlideIndex = 0;

sideBar.style.top = `-${slidesCount - 1}00vh`;

upBtn.addEventListener('click', () => {
  changeSlide('up');
});
downBtn.addEventListener('click', () => {
  changeSlide('down');
});

function changeSlide(direction) {
  const height = container.clientHeight;

  if (direction === 'up') {
    activeSlideIndex++;
    if (activeSlideIndex === slidesCount) {
      activeSlideIndex = 0;
    }
  } else if (direction === 'down') {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesCount - 1;
    }
  }

  mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
  sideBar.style.transform = `translateY(${activeSlideIndex * height}px)`;
}
