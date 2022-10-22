import {getRandomIntInclusive, getRandomArrayElement} from './utils.js';

const IMPORTANT_COUNT = 25;

//минимальное количество лайков
const MIN_LIKES = 15;
//максимальное количество лайков
const MAX_LIKES = 200;
//минимальное количество комментариев
const MIN_COMMENTS = 0;
//максимально количество комментариев
const MAX_COMMENTS = 200;

//массив с описаниями для фотографий
const DESCRIPTION = [
  'Красивое природное явление',
  'Милые котята',
  'Футбольный матч',];

//идентификатор опубликованной фотографии
const ides = [];
//ссылки на фотографии
const urles = [];

for (let i = 0; i + 1 <= IMPORTANT_COUNT; i++) {
  const itemValue = i + 1;
  ides[i] = itemValue;
  urles[i] = `photos/${itemValue}.jpg`;
}

//билдер

const getRandomDescription = function () {
  return {
    id: getRandomArrayElement(ides),
    url: getRandomArrayElement(urles),
    description: getRandomArrayElement(DESCRIPTION),
    likes: getRandomIntInclusive(MIN_LIKES, MAX_LIKES),
    comments: getRandomIntInclusive(MIN_COMMENTS, MAX_COMMENTS),
  };
};

//Генерация массива с заданной длиной
const getRandomPhotoDescription = function () {
  return Array.from({length: IMPORTANT_COUNT}, getRandomDescription);
};
getRandomPhotoDescription ();

export {getRandomPhotoDescription};
