// Подключение rangeslider
import 'ion-rangeslider';
import 'ion-rangeslider/css/ion.rangeSlider.css';
// Подключение рейтинга
import '../../components/buttons/rate/rate';

import DropDown from '../../components/dropdown/dropdown';
import Calendar from '../../components/calendar/Calendar';

// Инициализация rangeslider
const rangeSliderRoomValue = document.getElementById('rangeSliderRoomValue');
$('.js-range-slider').ionRangeSlider({
  type: 'double',
  min: 0,
  max: 15000,
  from: 5000,
  to: 10000,
  onStart(data) {
    rangeSliderRoomValue.innerHTML = `${data.from}₽` + ` - ${data.to}₽`;
  },
  onChange(data) {
    rangeSliderRoomValue.innerHTML = `${data.from}₽` + ` - ${data.to}₽`;
  },
  hide_min_max: true,
  hide_from_to: true,
});

const dateFilterCalendar = new Calendar('#dateFilter', {
  dateFormat: 'dd M',
  multipleDatesSeparator: ' - ',
});

// TODO засунуть в отдельный моудль
// Развернутый список с чекбоксами
const moreComfortFilter = document.getElementById('moreComfortFilter');
const moreComfortFilterWrapper = document.getElementById('moreComfortFilterWrapper');

moreComfortFilter.addEventListener('click', function() {
  moreComfortFilterWrapper.classList.toggle('checkbox__wrapper_expandable-active');
  this.classList.toggle('checkbox__title_expandable-active');
});
//

// Dropdown
const guestsDropDown = new DropDown({
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

const comfortFilterDropDown = new DropDown({
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
$('.js-show-filters').click(function(event) {
  event.preventDefault();
  const $elem = $('.rooms-filter');
  $elem.slideToggle(300);

  if (this.innerHTML == 'Показать фильтры') {
    this.innerHTML = 'Спрятать фильтры';
  } else {
    this.innerHTML = 'Показать фильтры';
  }
});
