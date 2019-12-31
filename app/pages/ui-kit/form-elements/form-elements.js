import 'ion-rangeslider';
import 'ion-rangeslider/css/ion.rangeSlider.css';

import Dropdown from '../../../components/dropdown/dropdown';
import Calendar from '../../../components/calendar/calendar';
import rangeSlider from '../../../components/range-slider/range-slider';

// DropDown
const guestsDropDown = new Dropdown({
  anchor: document.getElementById('elements-guestsDropDown'),
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
const arrivalCalendar = new Calendar('#formElementsCalendar', {
  multipleDatesSeparator: '-',
  onSelect(formattedDate) {
    $('#arrival').val(formattedDate.split('-')[0]);
    $('#checkOut').val(formattedDate.split('-')[1]);
  },
});
arrivalCalendar.calendar.css({ top: `${80}px` });

// Calendar
const dateFilterCalendar = new Calendar('#filterDate', {
  dateFormat: 'dd M',
  multipleDatesSeparator: ' - ',
});
dateFilterCalendar.calendar.css({ left: `${290}px`, width: '318px' });

// rangeslider
const rangePrices = rangeSlider('.rooms-filter__values', {
  type: 'double',
  min: 0,
  max: 15000,
  from: 5000,
  to: 10000,
  hide_min_max: true,
  hide_from_to: true,
});

// Dropdown
const comfortFilterDropDown = new Dropdown({
  anchor: document.getElementById('comfortFilter'),
  fallbackTitle: 'Выберите удобства',
  showFullAmount: false,
  items: [
    {
      title: 'CПАЛЬНИ',
      show: true,
      declensions: ['спальня', 'спальни', 'спален'],
    },
    {
      title: 'КРОВАТИ',
      show: true,
      declensions: ['кровать', 'кровати', 'кроватей'],
    },
    {
      title: 'ВАННЫЕ КОМНАТЫ',
      show: true,
      declensions: ['ванная комната', 'ванных комнаты', 'ванных комнат'],
    },
  ],
  helpButtons: false,
});
