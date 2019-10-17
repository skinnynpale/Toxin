// Подключение rangeslider
import 'ion-rangeslider';
import 'ion-rangeslider/css/ion.rangeSlider.css';
// Подключение рейтинга
import '../../components/buttons/rate/rate';
import DropDown from '../../components/dropdown/dropdown';

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

// Datepicker
$('#dateFilter').datepicker({
  minDate: new Date(),
  range: true,
  multipleDatesSeparator: ' - ',
  prevHtml: '<div class="find-room__arrow-date find-room__arrow-date-prev"></div>',
  nextHtml: '<div class="find-room__arrow-date find-room__arrow-date-next"></div>',
  clearButton: true,
  todayButton: true,
  dateFormat: 'dd M',
});
// 818 строка в datepicker.js для настроек

// Закрытие календаря по нажатию кнопки применить
const datepickerButtons = document.querySelectorAll('.datepicker--button');
const myDatepicker = $('#dateFilter')
  .datepicker()
  .data('datepicker');

$('#dateFilter').val('Выберите дату');

datepickerButtons[1].addEventListener('click', function(event) {
  myDatepicker.hide();
});

// TODO засунуть в отдельный моудль
// Развернутый список с чекбоксами
const moreComfortFilter = document.getElementById('moreComfortFilter');
const moreComfortFilterWrapper = document.getElementById('moreComfortFilterWrapper');

moreComfortFilter.addEventListener('click', function(event) {
  moreComfortFilterWrapper.classList.toggle('checkbox__wrapper_expandable-active');
  this.classList.toggle('checkbox__title_expandable-active');
});
//

// Dropdown
const guests = document.getElementById('guests');
const guestsDropDown = new DropDown({
  anchor: guests,
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

// Dropdown comfortFilter
const comfortFilter = document.getElementById('comfortFilter');
const comfortFilterDropDown = new DropDown({
  anchor: comfortFilter,
  fallbackTitle: 'Выберите удобства',
  anchorDeclensions: ['гость', 'гостя', 'гостей'],
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
