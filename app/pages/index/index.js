import DropDown from '../../components/DropDown/DropDown';
import Calendar from '../../components/Calendar/Calendar';

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
const findRoomCalendar = new Calendar('#findRoomCalendar', {
  multipleDatesSeparator: '-',
  onSelect(formattedDate) {
    $('#find-room__from').val(formattedDate.split('-')[0]);
    $('#find-room__to').val(formattedDate.split('-')[1]);
  },
});
