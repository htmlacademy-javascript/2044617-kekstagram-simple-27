const EFFECTS = [
  {
    name: 'none',
    filter: 'none',
    min: 0,
    max: 100,
    step: 1,
    unit: ''
  },
  {
    name: 'chrome',
    filter: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: ''
  },
  {
    name: 'sepia',
    filter: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: ''
  },
  {
    name: 'marvin',
    filter: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%'
  },
  {
    name: 'phobos',
    filter: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px'
  },
  {
    name: 'heat',
    filter: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: ''
  },
];
const DEFAULT_EFFECT = EFFECTS[0];
const image = document.querySelector('.img-upload__preview img');
const form = document.querySelector('.img-upload__form');
const sliderDefault = document.querySelector( '.effect-level' );
const sliderElement = document.querySelector('.effect-level__slider');
const effectLevelElement = document.querySelector('.effect-level__value');

let chosenEffect = DEFAULT_EFFECT;

const isDefault = () => chosenEffect === DEFAULT_EFFECT;

noUiSlider.create(sliderElement, {
  range: {
    min: chosenEffect.min,
    max: chosenEffect.max,
  },
  start: chosenEffect.max,
  step: chosenEffect.step,
  connect: 'lower',
},);

const updateSlider = () => {
  sliderDefault.classList.remove('hidden');
  sliderElement.removeAttribute('disabled');

  sliderElement.noUiSlider.updateOptions({
    range: {
      min: chosenEffect.min,
      max: chosenEffect.max,
    },
    step: chosenEffect.step,
    start: chosenEffect.max,
  });

  if (isDefault()) {
    sliderDefault.classList.add( 'hidden' );
    sliderElement.setAttribute( 'disabled', true );
    effectLevelElement.value = '';
    image.className = '';
    image.style.filter = '';
  }
};

const resetEffects = () => {
  chosenEffect = DEFAULT_EFFECT;
  updateSlider();
};

const onFormChange = (evt) => {
  if (!evt.target.classList.contains('effects__radio')) {
    return;
  }

  chosenEffect = EFFECTS.find((effect) => effect.name === evt.target.value);
  image.className = '';
  image.classList.add(`effects__preview--${chosenEffect.name}`);
  updateSlider();
};

form.addEventListener ('change', onFormChange);

sliderElement.noUiSlider.on('update', () => {
  effectLevelElement.value = sliderElement.noUiSlider.get();
  image.style.filter = `${chosenEffect.filter}(${effectLevelElement.value}${chosenEffect.unit})`;
});

export {resetEffects};
