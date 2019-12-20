// Datepicker
import Dropdown from '../../components/dropdown/dropdown';
import Calendar from '../../components/calendar/calendar';

const checkFormCalendar = new Calendar('#checkFormCalendar', {
  multipleDatesSeparator: '-',
  onSelect(formattedDate) {
    $('#check-form__from').val(formattedDate.split('-')[0]);
    $('#check-form__to').val(formattedDate.split('-')[1]);
  },
});

// Dropdown
const guests = document.getElementById('guests');
const guestsDropDown = new Dropdown({
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
