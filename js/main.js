//Функция, возвращающая случайное целое число из переданного диапазона включительно. Пример функции:
function getRandomIntInclusive(min, max) {
  if (min >= 0 && max >= 0 && min < max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return NaN;
}

getRandomIntInclusive(5, 8);

//взято c https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

//Функция для проверки максимальной длины строки:
function checkMaxStringLength (string, maxLength) {
  return string.length <= maxLength;
}

checkMaxStringLength (20, 140);
