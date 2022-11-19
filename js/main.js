import {getThumbnails} from './rendering-thumbnails.js';
import './sent-form.js';
import './scaling.js';
import './effects.js';

//получение данных с сервераы
fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
  .then((Response) => Response.json())
  .then((data) => {
    getThumbnails(data);
  });


