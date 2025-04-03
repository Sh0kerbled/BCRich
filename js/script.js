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

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9]
for (let i = 0; i < number.length; i++) {
    let newArray = number;
    console.log(newArray);
    if (number[i] % 2 == 0) {
        console.log($`делится на 2 {number[i]}`);
    }
}
