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
  if (!document.body.classList.contains('special-class')) {
    uploadOverlay.classList.add('hidden');
    document.body.classList.remove('modal-open');

    document.removeEventListener('keydown', onUploadOverlayEscKeydown);
    uploadFileInput.value = '';
    commentField.value = '';
  }
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

// функция отправки формы
const formSubmit = function (onSuccess, onFail) {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const submitHandler = evt.target.querySelector('[type="submit"]');
    submitButton.textContent = 'Публикую...';
    submitHandler.setAttribute('disabled', 'disabled');
    sendData(
      () => {
        onSuccess();
        submitHandler.removeAttribute('disabled');
        submitButton.textContent = 'Опубликовать';
      },
      () => {
        onFail();
        submitHandler.removeAttribute('disabled');
        submitButton.textContent = 'Опубликовать';
      },
      new FormData(evt.target),
    );
  });
};

export { formSubmit, onSuccessfulSending, onFailSending };
