const dotsContainer = document.querySelector(".dots");
const track = document.querySelector(".track");
const dots = document.querySelectorAll(".dot");
const cards = document.querySelectorAll(".container");

const cardWidth = cards[0].getBoundingClientRect().width;
const countCards = cards.length;

let currentNumber = 1;
dots[0].classList.add("active");

// Настройка события для перемещения трека по нажатии на ТОЧКИ
dotsContainer.addEventListener("click", (event) => {
    const newDot = event.target.closest(".dot");
    if (!newDot) return; // Если нажали не по точке, прерываем функцию

    // ОПРЕДЕЛЯЕМ ТОЧКУ, НА КОТОРУЮ НАЖАЛИ, ДАЕМ ВЫДЕЛЕНИЕ И ОПРЕДЕЛЯЕМ НОМЕР
    dots.forEach(dot => {
        if (dot == newDot) {
            dot.classList.add("active");
            currentNumber = +dot.getAttribute("data-number");
        } else {
            dot.classList.remove("active");
        };
    });

    const currentShift = -((currentNumber - 1) * cardWidth);
    track.style.cssText = `transform: translateX(${currentShift}px)`;
});

const slider = document.querySelector(".slider");
let startPosX;

// НАСТРОЙКА DRAG&DROP (НАЧАЛО)
slider.addEventListener("dragstart", (event) => {
    console.log("Start");
    startPosX = event.offsetX;
    event.dataTransfer.setDragImage(new Image(), 0, 0);
});

// НАСТРОЙКА DRAG&DROP (ПЕРЕТЯГИВАНИЕ)
slider.addEventListener("drag", (event) => {
    console.log("Drag...");
    const curPosX = event.offsetX;
    const diff = curPosX - startPosX; // Разница
    const currentShift = -((currentNumber - 1) * cardWidth);
    track.style.cssText = `transform: translateX(${diff + currentShift}px)`;
});

// НАСТРОЙКА DRAG&DROP (ЗАВЕРШЕНИЕ)
slider.addEventListener("dragend", (event) => {
    console.log("Finish");
    const curPosX = event.offsetX;
    const diff = curPosX - startPosX; // Разница

    if (diff > 300 && currentNumber > 1) {
        // Двигаеся влево
        currentNumber -= 1;
    }

    if (diff < -300 && currentNumber < 6) {
        // Двигаеся вправо
        currentNumber += 1;
    }

    // Отмечаем точки выделением
    dots.forEach((dot) => {
        const dotNumber = +dot.getAttribute("data-number");
        if (dotNumber === currentNumber) {
        dot.classList.add("active");
        } else {
        dot.classList.remove("active");
        }
    });

    // ВЫПОЛНЯЕМ СДВИГ
    const currentShift = -((currentNumber - 1) * cardWidth);
    track.style.cssText = `transform: translateX(${currentShift}px)`;
});