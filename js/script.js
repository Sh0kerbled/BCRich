const slider = document.querySelector('.slider');
const sliderLine = document.querySelector('.sliderLine');
let sliderImages = document.querySelectorAll('.sliderImg');

let sliderCount = 1; // Начинаем с 1, так как 0 — это клон последнего
let sliderWidth = slider.offsetWidth / 3; // Ширина одного изображения (треть экрана)

// Клонируем первый и последний слайды
const firstClone = sliderImages[0].cloneNode(true);
const lastClone = sliderImages[sliderImages.length - 1].cloneNode(true);

sliderLine.appendChild(firstClone); // Клон первого в конец
sliderLine.insertBefore(lastClone, sliderLine.firstChild); // Клон последнего в начало

// Обновляем массив изображений
sliderImages = document.querySelectorAll('.sliderImg');

// Ставим начальное положение (на первый реальный слайд)
sliderLine.style.transition = "none";
sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;

// Обновляем ширину при изменении экрана
window.addEventListener('resize', () => {
    sliderWidth = slider.offsetWidth / 3;
    rollSlider();
});

// Функция перехода к следующему слайду
function nextSlide() {
    if (sliderCount >= sliderImages.length - 1) return;
    sliderCount++;
    rollSlider();

    // Если достигли клона первого слайда, моментально переносимся к реальному первому
    setTimeout(() => {
        if (sliderCount === sliderImages.length - 1) {
            sliderCount = 1;
            resetTransition();
        }
    }, 500); // Ждем окончания анимации
}

// Функция перехода к предыдущему слайду
function prevSlide() {
    if (sliderCount <= 0) return;
    sliderCount--;
    rollSlider();

    // Если достигли клона последнего слайда, моментально переносимся к реальному последнему
    setTimeout(() => {
        if (sliderCount === 0) {
            sliderCount = sliderImages.length - 2;
            resetTransition();
        }
    }, 500);
}

// Функция анимации
function rollSlider() {
    sliderLine.style.transition = "transform 0.5s ease-in-out";
    sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
}

// Функция моментального переключения (без анимации)
function resetTransition() {
    sliderLine.style.transition = "none";
    sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
}

// Автоматическая смена слайдов
setInterval(nextSlide, 3000);
