// Datepicker
$('#dateFilter').datepicker({
  minDate: new Date(),
  range: true,
  multipleDatesSeparator: " - ",
  prevHtml: '<div class="find-room__arrow-date find-room__arrow-date-prev"></div>',
  nextHtml: '<div class="find-room__arrow-date find-room__arrow-date-next"></div>',
  clearButton: true,
  todayButton: true,
  dateFormat: "dd M",
});
// 818 строка в datepicker.js для настроек

// Закрытие календаря по нажатию кнопки применить
const datepickerButtons = document.querySelectorAll('.datepicker--button');
const myDatepicker = $('#dateFilter').datepicker().data('datepicker');

$('#dateFilter').val('Выберите дату')

datepickerButtons[1].addEventListener("click", function(event) {
  myDatepicker.hide();
});


// Развернутый список с чекбоксами
const moreComfortFilter = document.getElementById('moreComfortFilter');
const moreComfortFilterWrapper = document.getElementById('moreComfortFilterWrapper');

moreComfortFilter.addEventListener("click", function(event) {
  moreComfortFilterWrapper.classList.toggle('checkbox__wrapper_expandable-active');
  this.classList.toggle('checkbox__title_expandable-active');
});


// Dropdown
window.input = document.getElementById('guestsFilter');
window.dropMenu = document.getElementById('guestsDrop');
window.values = document.querySelectorAll('.dropdown__content .dropdown__value');
window.funcBtns = document.querySelectorAll('.dropdown__func-btn');
window.primeItem = document.getElementById('guestsDropPrimeItemValue'); // Младенцы

window.amount = 0;

//
