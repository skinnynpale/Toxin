// Dropdown
//

// Подключение rangeslider
import 'ion-rangeslider';
import 'ion-rangeslider/css/ion.rangeSlider.css';

window.input = document.getElementById('guests');
window.dropMenu = document.getElementById('guestsDrop');
window.values = document.querySelectorAll('#guestsDrop .dropdown__value');
window.funcBtns = document.querySelectorAll('.dropdown__func-btn');
window.primeItem = document.getElementById('guestsDropPrimeItemValue'); // Младенцы

window.amount = 0;
//

// Datepicker
$('#ui-kit-field__from').datepicker({
  minDate: new Date(),
  range: true,
  multipleDatesSeparator: '-',
  onSelect(formattedDate, date, inst) {
    $('#ui-kit-field__from').val(formattedDate.split('-')[0]);
    $('#ui-kit-field__to').val(formattedDate.split('-')[1]);
  },
  prevHtml: '<div class="find-room__arrow-date find-room__arrow-date-prev"></div>',
  nextHtml: '<div class="find-room__arrow-date find-room__arrow-date-next"></div>',
  clearButton: true,
  todayButton: true,
});

// Закрытие календаря по нажатию кнопки применить
const datepickerButtons = document.querySelectorAll('#firstDatepickerGroup .datepicker--button');
const myDatepicker = $('#ui-kit-field__from')
  .datepicker()
  .data('datepicker');

$('#ui-kit-field__from').val('ДД.ММ.ГГГГ');

datepickerButtons[1].addEventListener('click', function(event) {
  myDatepicker.hide();
});

// Развернутый список с чекбоксами
const moreComfortFilter = document.getElementById('moreComfortFilter');
const moreComfortFilterWrapper = document.getElementById('moreComfortFilterWrapper');

moreComfortFilter.addEventListener('click', function(event) {
  moreComfortFilterWrapper.classList.toggle('checkbox__wrapper_expandable-active');
  this.classList.toggle('checkbox__title_expandable-active');
});
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
