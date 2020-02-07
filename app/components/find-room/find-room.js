import Calendar from '../calendar/calendar';
import Dropdown from '../dropdown/dropdown';

const findRoomCalendar = new Calendar('.find-room__item--with-calendar', {
  multipleDatesSeparator: '-',
  onSelect(formattedDate) {
    $('#find-room__from').val(formattedDate.split('-')[0]);
    $('#find-room__to').val(formattedDate.split('-')[1]);
  },
});

const guestsDropDown = new Dropdown({
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

export { guestsDropDown, findRoomCalendar };
