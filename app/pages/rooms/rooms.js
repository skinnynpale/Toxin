import 'ion-rangeslider';
import 'ion-rangeslider/css/ion.rangeSlider.css';

import Dropdown from '../../components/dropdown/dropdown';
import Calendar from '../../components/calendar/calendar';
import rangeSlider from '../../components/range-slider/range-slider';

// rangeslider
const rangePrices = rangeSlider('.rooms-filter__values', {
  type: 'double',
  min: 0,
  max: 15000,
  from: 5000,
  to: 10000,
  hide_min_max: true,
  hide_from_to: true,
});

// Calendar
const dateFilterCalendar = new Calendar('#dateFilter', {
  dateFormat: 'dd M',
  multipleDatesSeparator: ' - ',
});

// Dropdown
const guestsDropDown = new Dropdown({
  anchor: document.getElementById('guests'),
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

// Dropdown
const comfortFilterDropDown = new Dropdown({
  anchor: document.getElementById('comfortFilter'),
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

// Показать фильтры
$('.js-show-filters').click(event => {
  event.preventDefault();
  const $elem = $('.rooms-filter');
  $elem.slideToggle(300);

  if (this.innerHTML === 'Показать фильтры') {
    this.innerHTML = 'Спрятать фильтры';
  } else {
    this.innerHTML = 'Показать фильтры';
  }
});
