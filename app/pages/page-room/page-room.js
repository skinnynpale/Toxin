// Datepicker
import DropDown from '../../components/dropdown/dropdown';

$('#check-form__from').datepicker({
  minDate: new Date(),
  range: true,
  multipleDatesSeparator: '-',
  onSelect(formattedDate, date, inst) {
    $('#check-form__from').val(formattedDate.split('-')[0]);
    $('#check-form__to').val(formattedDate.split('-')[1]);
  },
  prevHtml: '<div class="find-room__arrow-date find-room__arrow-date-prev"></div>',
  nextHtml: '<div class="find-room__arrow-date find-room__arrow-date-next"></div>',
  clearButton: true,
  todayButton: true,
});
// 818 строка в datepicker.js для настроек

// Закрытие календаря по нажатию кнопки применить
const datepickerButtons = document.querySelectorAll('.datepicker--button');
const myDatepicker = $('#check-form__from')
  .datepicker()
  .data('datepicker');

$('#check-form__from').val('ДД.ММ.ГГГГ');

datepickerButtons[1].addEventListener('click', function(event) {
  myDatepicker.hide();
});

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
