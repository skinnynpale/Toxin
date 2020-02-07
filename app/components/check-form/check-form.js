import Calendar from '../calendar/calendar';
import Dropdown from '../dropdown/dropdown';

const checkFormCalendar = new Calendar('.check-form__item--with-calendar', {
  className: 'js-check-form__calendar',
  multipleDatesSeparator: '-',
  onSelect(formattedDate) {
    $('#check-form__from').val(formattedDate.split('-')[0]);
    $('#check-form__to').val(formattedDate.split('-')[1]);
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

export { checkFormCalendar, guestsDropDown };
