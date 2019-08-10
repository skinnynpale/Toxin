// Datepicker
$('#find-room__from').datepicker({
  minDate: new Date(),
  range: true,
  multipleDatesSeparator: "-",
  onSelect: function(formattedDate, date, inst) {
    $('#find-room__from').val(formattedDate.split("-")[0]);
    $('#find-room__to').val(formattedDate.split("-")[1]);
  },
  prevHtml: '<div class="find-room__arrow-date find-room__arrow-date-prev"></div>',
  nextHtml: '<div class="find-room__arrow-date find-room__arrow-date-next"></div>',
  clearButton: true,
  todayButton: true,
});

// Закрытие календаря по нажатию кнопки применить
const datepickerButtons = document.querySelectorAll('.datepicker--button');
const myDatepicker = $('#find-room__from').datepicker().data('datepicker');

$('#find-room__from').val('ДД.ММ.ГГГГ')

datepickerButtons[1].addEventListener("click", function(event) {
  myDatepicker.hide();
});

// Dropdown
window.input = document.getElementById('guests');
window.dropMenu = document.getElementById('guestsDrop');
window.values = document.querySelectorAll('.dropdown__content .dropdown__value');
window.funcBtns = document.querySelectorAll('.dropdown__func-btn');
window.primeItem = document.getElementById('guestsDropPrimeItemValue'); // Младенцы

window.amount = 0;

//
