const arrowsRight = document.querySelectorAll('.slider__right');
console.log(arrowsRight);
const arrowsLeft = document.querySelectorAll('.slider__left');
const slideWidth = document.querySelector('.slider__item');
const rootSlider = document.getElementById('sliderRoot');
const sliderList = document.querySelector('.slider__list');

console.log(sliderList);

let sliderPosition = 0;



// обработчики нажатия правых стрелок
arrowsRight.forEach((arrow) => {
    arrow.addEventListener('click', () => moveRight());
});

// обработчики нажатия левых стрелок
arrowsLeft.forEach((arrow) => {
    arrow.addEventListener('click', () => moveLeft());
});

sliderList.addEventListener('swiped-right', ()=> moveLeft());
sliderList.addEventListener('swiped-left', ()=> moveRight());


// метод реализующий логику, для правых стрелок
function moveRight() {
    sliderPosition += slideWidth.clientWidth;
    // если мы в конечной позиции слайдера, то переходим на последний слайд
    console.log(sliderPosition, sliderList.clientWidth * (sliderList.children.length - 1))
    if (sliderPosition === sliderList.clientWidth * sliderList.children.length){
        // переходим к первому слайду
        sliderPosition = 0;
    }
    rootSlider.style.transform = `translate(-${sliderPosition}px)`;
}
// метод реализующий логику, для левых стрелок
function moveLeft() {
    if (sliderPosition === 0){
        // если мы в начальной позиции слайдера, то переходим на последний слайд
        sliderPosition = (sliderList.clientWidth * sliderList.children.length) - slideWidth.clientWidth;
    }else{
        // просто сдвигаем, на велину слайда
        sliderPosition -= slideWidth.clientWidth;
    }
    rootSlider.style.transform = `translate(-${sliderPosition}px)`;
}