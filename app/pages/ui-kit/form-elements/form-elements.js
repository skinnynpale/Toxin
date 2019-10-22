import 'ion-rangeslider';
import 'ion-rangeslider/css/ion.rangeSlider.css';

import ExpandableList from '../../../components/ExpandableList/ExpandableList';
import DropDown from '../../../components/DropDown/DropDown';
import Calendar from '../../../components/Calendar/Calendar';

// Развернутый список с чекбоксами
const moreComfortFilterList = new ExpandableList({
  mainAnchor: 'moreComfortFilter',
  wrapperAnchor: 'moreComfortFilterWrapper',
  mainClassActive: 'checkbox__title_expandable-active',
  wrapperClassActive: 'checkbox__wrapper_expandable-active',
});

// DropDown
const guestsDropDown = new DropDown({
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

// rangeslider
const rangeSliderRoomValue = document.getElementById('rangeSliderRoomValue');
$('.js-range-slider').ionRangeSlider({
  type: 'double',
  min: 0,
  max: 15000,
  from: 5000,
  to: 10000,
  onStart(data) {
    rangeSliderRoomValue.innerHTML = `${data.from}₽` + ` - ${data.to}₽`;
  },
  onChange(data) {
    rangeSliderRoomValue.innerHTML = `${data.from}₽` + ` - ${data.to}₽`;
  },
  hide_min_max: true,
  hide_from_to: true,
});

// Dropdown
const comfortFilterDropDown = new DropDown({
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

// Calendar
const dateFilterCalendar = new Calendar('#filterDateCalendar', {
  dateFormat: 'dd M',
  multipleDatesSeparator: ' - ',
});
dateFilterCalendar.calendar.css({ left: `${290}px`, width: '318px' });
