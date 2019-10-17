import DropDown from '../../components/dropdown/dropdown';
import Calendar from '../../components/calendar/Calendar';

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

// Datepicker
const findRoomCalendar = new Calendar('#find-room__from', {
  multipleDatesSeparator: '-',
  onSelect(formattedDate) {
    $('#find-room__from').val(formattedDate.split('-')[0]);
    $('#find-room__to').val(formattedDate.split('-')[1]);
  },
});
