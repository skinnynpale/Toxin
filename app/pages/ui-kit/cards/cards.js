import Calendar from '../../../components/calendar/calendar';

const cardsCalendar = new Calendar(
  '.cards__item_with-calendar',
  {
    className: 'js-cards__calendar',
  },
  true,
);
cardsCalendar.showCalendar();
