let RangeRed = document.querySelector('#RangeRed');
let textRed = document.querySelector('#textRed');
let RangeGreen = document.querySelector('#RangeGreen');
let textGreen = document.querySelector('#textGreen');
let RangeBlue = document.querySelector('#RangeBlue');
let textBlue = document.querySelector('#textBlue');
let square = document.querySelector('#square');

function changeColor() {
  square.style.backgroundColor = `rgb(${RangeRed.value} ,  ${RangeGreen.value} , ${RangeBlue.value})`;
}

RangeRed.addEventListener('input', () => {
  textRed.value = RangeRed.value;
  changeColor();
});

RangeGreen.addEventListener('input', () => {
  textGreen.value = RangeGreen.value;
  changeColor();
});

RangeBlue.addEventListener('input', () => {
  textBlue.value = RangeBlue.value;
  changeColor();
});
