const ALERT_SHOW_TIME = 5000;

//Функция, возвращающая случайное целое число из переданного диапазона включительно. Пример функции: //взято c https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
const getRandomIntInclusive = function (min, max) {
  if (min >= 0 && max >= 0 && min < max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return NaN;
};

//Функция для проверки максимальной длины строки:
const checkMaxStringLength = function (value, minLength, maxLength) {
  return value.length >= minLength && value.length <= maxLength;
};

checkMaxStringLength ('20', '140');

//Проверка нажатия клавиши Esc
const isEscapeKey = (evt) => evt.key === 'Escape';


//Функция, возвращающая элемент массива с рандомным индексом
const getRandomArrayElement = function (array) {
  return array[getRandomIntInclusive(0, array.length - 1)];
};

//Свойства элемента с сообщением об ошибке

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.color = '#ffefd5';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.bottom = '200px';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.lineHeight = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = '#8b0000';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export {getRandomIntInclusive, getRandomArrayElement, isEscapeKey, checkMaxStringLength, showAlert};
