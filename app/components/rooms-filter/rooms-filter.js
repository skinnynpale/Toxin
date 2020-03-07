import Dropdown from '../dropdown/dropdown';
import Calendar from '../calendar/calendar';
import rangeSlider from '../range-slider/range-slider';

const dateFilterCalendar = new Calendar('.rooms-filter__field_with-date .field__input', {
  className: 'js-rooms-filter__calendar',
  dateFormat: 'dd M',
  multipleDatesSeparator: ' - ',
});

const guestsDropDown = new Dropdown({
  anchor: document.querySelector('.rooms-filter__field_with-guests .field__input'),
  fallbackTitle: 'Сколько гостей',
  showFullAmount: true,
  anchorDeclensions: ['гость', 'гостя', 'гостей'],
  items: [
    {
      title: 'Младенцы',
      show: true,
      declensions: ['младенец', 'младенца', 'младенцев'],
    },
    {
      title: 'Дети',
    },
    {
      title: 'Взрослые',
    },
  ],
  helpButtons: true,
});

const rangePrices = rangeSlider(
  '.rooms-filter__item_with-range-slider',
  '.rooms-filter__values',
  {
    type: 'double',
    min: 0,
    max: 15000,
    from: 5000,
    to: 10000,
    hide_min_max: true,
    hide_from_to: true,
  },
  'Стоимость за сутки пребывания в номере',
);

const comfortFilterDropDown = new Dropdown({
  anchor: document.querySelector('.rooms-filter__item_with-comfort-filter .field__input'),
  fallbackTitle: 'Выберите удобства',
  showFullAmount: false,
  items: [
    {
      title: 'CПАЛЬНИ',
      show: true,
      declensions: ['спальня', 'спальни', 'спален'],
    },
    {
      title: 'КРОВАТИ',
      show: true,
      declensions: ['кровать', 'кровати', 'кроватей'],
    },
    {
      title: 'ВАННЫЕ КОМНАТЫ',
      show: true,
      declensions: ['ванная комната', 'ванных комнаты', 'ванных комнат'],
    },
  ],
  helpButtons: false,
});
