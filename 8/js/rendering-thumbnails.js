//Находим контайнер для изображения других пользователей
const picturesContainer = document.querySelector('.pictures');

// шаблон изображения случайного пользователя
const templatePicture = document.querySelector('#picture').content.querySelector('.picture');

//создание массива с заполненными в него данными
/* const arrayData = getRandomPhotoDescription(); */

//функция с данными, которые прислал сервер

const getThumbnails = function(data) {

  //создание фрагмента для последующей отрисовки миниатюр

  const renderingListFragment = document.createDocumentFragment();

  //Выбираем из массива нужные нам данные и записываем во фрагмент
  data.forEach(({url, description, likes, comments}) => {
    const photography = templatePicture.cloneNode(true);
    photography.querySelector('.picture__img').src = url;
    photography.querySelector('.picture__img').alt = description;
    photography.querySelector('.picture__comments').textContent = comments;
    photography.querySelector('.picture__likes').textContent = likes;

    renderingListFragment.append(photography);
  });

  picturesContainer.append(renderingListFragment);

};

export {getThumbnails};
