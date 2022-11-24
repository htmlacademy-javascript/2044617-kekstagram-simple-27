import {showAlert} from './utils.js';

const LINK_TO_GET = 'https://27.javascript.pages.academy/kekstagram-simple/data';
const LINK_TO_POST = 'https://27.javascript.pages.academy/kekstagram-simple';

const getData = (onSuccess) => {
  fetch(LINK_TO_GET)
    .then((response) => response.json())
    .then((data) => onSuccess(data))
    .catch(() => {
      showAlert('Не удалось загрузить фотографии других пользователей');
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    LINK_TO_POST,
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => onFail());
};


export {getData, sendData};
