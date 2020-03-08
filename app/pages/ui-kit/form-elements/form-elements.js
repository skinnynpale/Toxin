import Dropdown from '../../../components/dropdown/dropdown';
import Calendar from '../../../components/calendar/calendar';
import rangeSlider from '../../../components/range-slider/range-slider';

const DropdownWithButtons = new Dropdown({
  anchor: document.querySelector('.form-elements__sub-item_type-guests .field__input'),
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

const arrivalCalendar = new Calendar('.form-elements__item_with-calendar', {
  className: 'js-form-elements__arrival-calendar',
  multipleDatesSeparator: '-',
  onSelect(formattedDate) {
    $('.form-elements__field_type-arrival .field__input').val(formattedDate.split('-')[0]);
    $('.form-elements__field_type-check-out .field__input').val(formattedDate.split('-')[1]);
  },
});

const dateFilterCalendar = new Calendar('.form-elements__item_with-filter-date .field__input', {
  className: 'js-form-elements__date-filter-calendar',
  dateFormat: 'dd M',
  multipleDatesSeparator: ' - ',
});

const DropdownWithoutButtons = new Dropdown({
  anchor: document.querySelector('.form-elements__sub-item_with-dropdown-no-buttons .field__input'),
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

const guestsDropDown = new Dropdown({
  anchor: document.querySelector('.form-elements__sub-item_with-dropdown .field__input'),
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
  '.form-elements__item_with-range-slider',
  '.form-elements__slider-values',
  {
    type: 'double',
    min: 0,
    max: 15000,
    from: 5000,
    to: 10000,
    hide_min_max: true,
    hide_from_to: true,
  },
);
