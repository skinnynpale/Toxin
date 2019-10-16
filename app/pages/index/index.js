import DropDown from '../../components/field/dropdown/dropdown';

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

// Datepicker
$('#find-room__from').datepicker({
  minDate: new Date(),
  range: true,
  multipleDatesSeparator: '-',
  onSelect(formattedDate, date, inst) {
    $('#find-room__from').val(formattedDate.split('-')[0]);
    $('#find-room__to').val(formattedDate.split('-')[1]);
  },
  prevHtml: '<div class="find-room__arrow-date find-room__arrow-date-prev"></div>',
  nextHtml: '<div class="find-room__arrow-date find-room__arrow-date-next"></div>',
  clearButton: true,
  todayButton: true,
});

// Закрытие календаря по нажатию кнопки применить
const datepickerButtons = document.querySelectorAll('.datepicker--button');
const myDatepicker = $('#find-room__from')
  .datepicker()
  .data('datepicker');

$('#find-room__from').val('ДД.ММ.ГГГГ');

datepickerButtons[1].addEventListener('click', event => {
  myDatepicker.hide();
});
