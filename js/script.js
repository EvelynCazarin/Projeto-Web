const carrocel = document.querySelector('carrocel');
const sliderItems = document.querySelectorAll('.carrocel img');
const prevBtn = document.querySelector(' .fa-chevron-left');
const nextBtn = document.querySelector('.chevron-right');
const itemWidth = sliderItems[0].clientWidth;
let currentIndex = 0;

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    sliderWrapper.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    console.log("chegei")
  }
});

nextBtn.addEventListener('click', () => {
  if (currentIndex < sliderItems.length - 1) {
    currentIndex++;
    sliderWrapper.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    console.log("chegei ao contrario")

  }
});