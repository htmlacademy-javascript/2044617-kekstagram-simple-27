import { isEscapeKey } from './utils.js';
import { resetScaleInput } from './scaling.js';
import { resetEffets } from './effects.js';
import { getSuccessMessage, getErrorMessage } from './show-message.js';
import { sendData } from './fetch.js';

const form = document.querySelector('.img-upload__form');
const uploadFileInput = document.querySelector('#upload-file');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const closeUploadOverlayElement = document.querySelector('#upload-cancel');
const commentField = document.querySelector('.text__description');
const submitButton = document.querySelector('.img-upload__submit');

//Функция проверяет нажатие Esc и закрывает окно загрузки фото
const onUploadOverlayEscKeydown = function (evt) {
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

function closeUploadOverlay() {
  uploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');

  document.removeEventListener('keydown', onUploadOverlayEscKeydown);
  uploadFileInput.value = '';
  commentField.value = '';
}

const onSuccessfulSending = function () {
  closeUploadOverlay();
  getSuccessMessage();
  resetEffets();
  resetScaleInput();
};

const onFailSending = function () {
  getErrorMessage();
};

//Добавляет обработчик событий - при загрузке фото, открывается окно
uploadFileInput.addEventListener('change', () => {
  openUploadOverlay();
});

//Добавляет обработчик событий  - при нажатии на кнопку закрытия окна, оно закрывается
closeUploadOverlayElement.addEventListener('click', () => {
  closeUploadOverlay();
});

const blockSubmitButton = function () {
  submitButton.disabled = true;
  submitButton.textContent = 'Публикую...';
};

const unblockSubmitButton = function () {
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';
};


// функция отправки формы
const formSubmit = function (onSuccess, onFail) {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    blockSubmitButton();
    sendData(
      () => {
        onSuccess();
        unblockSubmitButton();
      },
      () => {
        onFail();
        unblockSubmitButton();
      },
      new FormData(evt.target),
    );
  });
};

formSubmit(closeUploadOverlay);

export { formSubmit, onSuccessfulSending, onFailSending };
