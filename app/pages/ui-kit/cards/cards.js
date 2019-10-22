// Datepicker
import Calendar from '../../../components/Calendar/Calendar';

const cardsCalendar = new Calendar('#ui-kit__preview-calendar', {}, true);
cardsCalendar.calendar.css({ left: 0, position: 'static', width: '318px' });
cardsCalendar.showCalendar();
