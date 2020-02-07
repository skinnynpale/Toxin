import Dropdown from '../../../components/dropdown/dropdown';
import Calendar from '../../../components/calendar/calendar';
import rangeSlider from '../../../components/range-slider/range-slider';

const DropdownWithoutButtons = new Dropdown({
  anchor: document.getElementById('DropdownWithoutButtons'),
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

const DropdownWithButtons = new Dropdown({
  anchor: document.getElementById('DropdownWithButtons'),
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

const guestsDropDown = new Dropdown({
  anchor: document.getElementById('elements-guestsDropDown'),
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

const arrivalCalendar = new Calendar('#formElementsCalendar', {
  className: 'js-form-elements__arrival-calendar',
  multipleDatesSeparator: '-',
  onSelect(formattedDate) {
    $('#arrival').val(formattedDate.split('-')[0]);
    $('#checkOut').val(formattedDate.split('-')[1]);
  },
});

const dateFilterCalendar = new Calendar('#filterDate', {
  className: 'js-form-elements__date-filter-calendar',
  dateFormat: 'dd M',
  multipleDatesSeparator: ' - ',
});

const rangePrices = rangeSlider(
  '.form-elements__item--with-range-slider',
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
