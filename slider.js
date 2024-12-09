const slider = document.querySelector('.slider');
const items = document.querySelectorAll('.slider-item');
const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');
const controls = document.querySelectorAll('.slider-control');

let currentIndex = 0;

function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    items.forEach((item, index) => {
        item.classList.toggle('active', index === currentIndex);
    });
    controls.forEach((control, index) => {
        control.classList.toggle('active', index === currentIndex);
    });
}

// Обробники для кнопок навігації
leftBtn.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 1;
    updateSlider();
});

rightBtn.addEventListener('click', () => {
    currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
    updateSlider();
});

// Обробники для кнопок-слайдів
controls.forEach(control => {
    control.addEventListener('click', () => {
        currentIndex = parseInt(control.dataset.slide);
        updateSlider();
    });
});

// Ініціалізація активного елемента
updateSlider();
