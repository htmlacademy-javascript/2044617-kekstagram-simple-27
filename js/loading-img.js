const IMG_TYPES = ['jpg', 'jpeg', 'png'];

const fileChooser = document.querySelector('.img-upload__input');
const preview = document.querySelector('.img-upload__preview img');

fileChooser.addEventListener('change', () => {
  const file = fileChooser.files[0];
  const fileName = file.name.toLowerCase();

  const matches = IMG_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    preview.src = URL.createObjectURL(file);
  }
});
