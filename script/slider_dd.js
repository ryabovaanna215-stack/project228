const container_cards = document.querySelector(".cards");
const card = document.querySelectorAll('.card');

let draggedCard;
let startOrder = 1; 

// ПЕРЕБИРАЕМ КАРТОЧКИ
card.forEach(card => {
    card.addEventListener("dragstart", (event) => {

        const computedStyle = window.getComputedStyle(card); //чтение всех стилей css через браузер
        startOrder = parseInt(computedStyle.order) //берет определённый стиль из css (то что в скобках) и превращает это в число (parseInt)

        console.log(`Стартовый order взятой карточки: ${startOrder}`);
        draggedCard = card;

        event.dataTransfer.setDragImage(new Image(), 0, 0);
    });
});

// ПЕРЕМЕЩЕНИЕ КАРТОЧКИ НАД ДРУГИМИ
container_cards.addEventListener("dragover", (event) => {  
    const currentCard = event.target.closest('.card');
    if (currentCard && currentCard !== draggedCard) {
        const currentComputedStyle = window.getComputedStyle(currentCard);
        const currentOrder = parseInt(currentComputedStyle.order)
        
        if (startOrder !== currentOrder) {
            draggedCard.style.order = currentOrder;
            currentCard.style.order = startOrder;
            startOrder = currentOrder;
        }
    }
});
