let slider = document.querySelector('.slider');
let sliderLine = document.querySelector('.sliderLine');
const sliderImages = document.querySelectorAll('.sliderImg');

let count = 0;
let sliderWidth = slider.offsetWidth;

function nextSlide() {
    count++;

    if (count >= sliderImages.length) {
        count = 0;
    }

    rollSlider();
}

function rollSlider() {
    sliderLine.style.transform = `translateX(${-count * 698}px)`;
}

setInterval(() => {
    nextSlide();
}, 3000);
