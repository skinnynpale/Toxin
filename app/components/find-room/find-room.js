import Calendar from '../calendar/calendar';
import Dropdown from '../dropdown/dropdown';

const findRoomCalendar = new Calendar('.find-room__item_with-calendar', {
  className: 'js-find-room__calendar',
  multipleDatesSeparator: '-',
  onSelect(formattedDate) {
    $('.find-room__field_type-from .field__input').val(formattedDate.split('-')[0]);
    $('.find-room__field_type-to .field__input').val(formattedDate.split('-')[1]);
  },
});

const guestsDropDown = new Dropdown({
  anchor: document.querySelector('.find-room__guests .field__input'),
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
