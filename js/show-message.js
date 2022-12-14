import {isEscapeKey} from './utils.js';

const successMessage = document.querySelector('#success').content.querySelector('.success').cloneNode(true);
const successButton = successMessage.querySelector('.success__button');
const errorMessage = document.querySelector('#error').content.querySelector('.error').cloneNode(true);
const errorButton = errorMessage.querySelector('.error__button');

//Переменная, необходимая для определния элемента - окна с нужным сообщением
let message;

//Закрытие окна с сообщением по нажатию Esc (обработчик)
const onMessageEscKeydown = (evt) => {
  if(isEscapeKey(evt)) {
    closeMessage();
  }
};

//Закрытие окна с сообщением по нажатию на произвольную область, кроме самого окна с сообщением (обработчик)

const onWindowClick = (evt) => {

  const target = evt.target;
  if (target.closest('.success__inner') || target.closest('.error__inner'))
  {
    return;
  }

  closeMessage();
};

//Закрытие окна с сообщением, удаление обработчиков
function closeMessage() {
  message.remove();
  document.removeEventListener('keydown', onMessageEscKeydown);
  document.removeEventListener('click', onWindowClick);
  document.body.classList.remove('special-class');
}

//Добавление окна с сообщением при удачной загрузке изображения, добавление обработчиков
const getSuccessMessage = () => {
  message = successMessage;
  document.body.append(successMessage);
  successButton.addEventListener('click', closeMessage);
  document.addEventListener('keydown', onMessageEscKeydown);
  document.addEventListener('click', onWindowClick);
};

//Добавление окна с сообщением при ошибке, добавление обработчиков
const getErrorMessage = () => {
  message = errorMessage;
  document.body.classList.add('special-class');
  document.body.append(errorMessage);
  errorButton.addEventListener('click', closeMessage);
  document.addEventListener('keydown', onMessageEscKeydown);
  document.addEventListener('click', onWindowClick);
};

export {getSuccessMessage, getErrorMessage};
