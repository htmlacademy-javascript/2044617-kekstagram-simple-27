import {isEscapeKey} from './utils.js';

//const MIN_COMMENTH_LENGTH = 20;
//const MAX_COMMENTH_LENGTH = 140;
//const commentField = document.querySelector('.text__description');
//const form = document.querySelector('.img-upload__form');
const uploadFileInput = document.querySelector('#upload-file');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const closeUploadOverlayElement = document.querySelector('#upload-cancel');


//Функция проверяет нажатия Esc и закрывает окно загрузки фото
const onUploadOverlayEscKeydown = function(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUploadOverlay();
  }
};
//Функция открывает окно загрузки фото
const openUploadOverlay = function () {
  uploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');

  document.addEventListener('keydown', onUploadOverlayEscKeydown);
};

//Функция закрывает окно загрузки фото

function closeUploadOverlay () {
  uploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');

  document.removeEventListener('keydown', onUploadOverlayEscKeydown);
  uploadFileInput.value = '';
}

//Добавляет обработчик событий - при загрузке фото, открывается окно
uploadFileInput.addEventListener('change', () => {
  openUploadOverlay();
});

//Добавляет обработчик событий  - при нажатии на кнопку закрытия окна, оно закрывается
closeUploadOverlayElement.addEventListener('click', () => {
  closeUploadOverlay();
});
