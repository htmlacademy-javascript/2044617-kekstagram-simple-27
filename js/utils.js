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
const checkMaxStringLength = function (string, maxLength) {
  return string.length <= maxLength;
};

checkMaxStringLength ('20', '140');


//Функция, возвращающая элемент массива с рандомным индексом
const getRandomArrayElement = function (array) {
  return array[getRandomIntInclusive(0, array.length - 1)];
};

export {getRandomIntInclusive, getRandomArrayElement};
