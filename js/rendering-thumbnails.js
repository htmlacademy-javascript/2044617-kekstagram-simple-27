//Находим контайнер для изображения других пользователей
const picturesContainer = document.querySelector('.pictures');

// шаблон изображения случайного пользователя
const templatePicture = document.querySelector('#picture').content.querySelector('.picture');

const createPhoto = (photoData) => {
  const photography = templatePicture.cloneNode(true);
  photography.querySelector('.picture__img').src = photoData.url;
  photography.querySelector('.picture__img').alt = photoData.description;
  photography.querySelector('.picture__comments').textContent = photoData.comments;
  photography.querySelector('.picture__likes').textContent = photoData.likes;

  return photography;
};

//функция с данными, которые прислал сервер

const getThumbnails = (data) => {

  //создание фрагмента для последующей отрисовки миниатюр

  const renderingListFragment = document.createDocumentFragment();

  //Выбираем из массива нужные нам данные и записываем во фрагмент
  data.forEach(({ url, description, likes, comments }) => {
    renderingListFragment.append(createPhoto({ url, description, likes, comments }));
  });

  picturesContainer.append(renderingListFragment);
};

export { getThumbnails };
