// Datepicker
import Calendar from '../../../components/calendar/calendar';

const cardsCalendar = new Calendar('#ui-kit__preview-calendar', {}, true);
cardsCalendar.calendar.css({ left: 0, position: 'static', width: '318px' });
cardsCalendar.showCalendar();
