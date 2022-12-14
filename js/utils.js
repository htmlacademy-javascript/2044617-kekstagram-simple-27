const ALERT_SHOW_TIME = 5000;

//Проверка нажатия клавиши Esc
const isEscapeKey = (evt) => evt.key === 'Escape';

//Свойства элемента с сообщением об ошибке

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.color = '#ffefd5';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.bottom = '200px';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.lineHeight = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = '#8b0000';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export {isEscapeKey, showAlert};
