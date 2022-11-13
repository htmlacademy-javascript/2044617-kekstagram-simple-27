import {isEscapeKey} from './utils.js';
import {resetScaleInput} from './scale.js';
import {resetEffets} from './effects.js';

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
  resetEffets();
  resetScaleInput();
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
