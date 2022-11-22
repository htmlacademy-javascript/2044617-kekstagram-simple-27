import { getThumbnails } from './rendering-thumbnails.js';
import { formSubmit, onSuccessfulSending, onFailSending } from './sent-form.js';
import { getData } from './fetch.js';
import './sent-form.js';
import './scaling.js';
import './effects.js';


formSubmit(onSuccessfulSending, onFailSending);

//Вызов функции для получения фото других пользователей
getData((photos) => {
  getThumbnails(photos);
});
