import { isEscapeKey } from './utils.js';
import { resetScaleInput } from './scaling.js';
import { resetEffects } from './effects.js';
import { getSuccessMessage, getErrorMessage } from './show-message.js';
import { sendData } from './fetch.js';

const form = document.querySelector('.img-upload__form');
const uploadFileInput = document.querySelector('#upload-file');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const closeUploadOverlayElement = document.querySelector('#upload-cancel');
const commentField = document.querySelector('.text__description');
const submitButton = document.querySelector('.img-upload__submit');

//Функция проверяет нажатие Esc и закрывает окно загрузки фото
const onUploadOverlayEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUploadOverlay();
  }
};
//Функция открывает окно загрузки фото
const openUploadOverlay = () => {
  uploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  resetEffects();
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

const onSuccessfulSending = () => {
  closeUploadOverlay();
  getSuccessMessage();
  resetEffects();
  resetScaleInput();
};

const onFailSending = () => {
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
const formSubmit = (onSuccess, onFail) => {
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
