//переменные для значений изменения масштаба изображения
const MIN_SCALE = 25;
const MAX_SCALE = 100;
const CHANGE_SCALE = 25;
const BY_DEFAULT_SCALE = 100;
//переменные для кнопок уменьения и увеличения масштаба изображения
const decreaseButton = document.querySelector('.scale__control--smaller');
const increaseButton = document.querySelector('.scale__control--bigger');
const scalingInput = document.querySelector('.scale__control--value');
const image = document.querySelector('.img-upload__preview img');

const scaleImage = (value = BY_DEFAULT_SCALE) => {
  scalingInput.value = `${value}%`;
  image.style.transform = `scale(${value / BY_DEFAULT_SCALE})`;
};

const onDecreaseButtonClick = () => {
  const value = parseInt(scalingInput.value, 10);
  let newValue = value - CHANGE_SCALE;
  if (newValue < MIN_SCALE) {
    newValue = MIN_SCALE;
  }

  scaleImage(newValue);
};

const onIncreaseButtonClick = () => {
  const value = parseInt(scalingInput.value, 10);
  let newValue = value + CHANGE_SCALE;
  if (newValue > MAX_SCALE) {
    newValue = MAX_SCALE;
  }

  scaleImage(newValue);
};

const resetScaleInput = () => {
  scaleImage();
};

decreaseButton.addEventListener('click', onDecreaseButtonClick);
increaseButton.addEventListener('click', onIncreaseButtonClick);

export {resetScaleInput};
