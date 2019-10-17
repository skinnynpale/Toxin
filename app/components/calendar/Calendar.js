import 'air-datepicker/dist/js/datepicker.min';
import 'air-datepicker/dist/css/datepicker.min.css';
import './calendar.scss';

class Calendar {
  constructor(anchor, options) {
    this.anchor = anchor;

    this.initDatePicker(options);
    this.createButtons();

    this.calendar = $(anchor).data('datepicker').$datepicker;

    this.addEventListeners();

    this.calendar.hide();
  }

  initDatePicker(options) {
    const defaultDatePicker = {
      inline: true,
      classes: 'js-calendar',
      minDate: new Date(),
      range: true,
      prevHtml: '<div class="js-calendar__arrow-date js-calendar__arrow-date-prev"></div>',
      nextHtml: '<div class="js-calendar__arrow-date js-calendar__arrow-date-next"></div>',
      clearButton: true,
      todayButton: true,
    };

    $(this.anchor).datepicker({ ...defaultDatePicker, ...options });
  }

  createButtons() {
    const datePickerButtons = $(this.anchor)
      .data('datepicker')
      .$datepicker[0].querySelector('.datepicker--buttons');

    datePickerButtons.innerHTML = '';
    const clearButtonWrapper = `<span class="datepicker--button" data-action="clear">Очистить</span>`;
    const applyButtonWrapper = `<span class="datepicker--button" data-action="today">Применить</span>`;

    datePickerButtons.insertAdjacentHTML(
      'beforeend',
      [clearButtonWrapper, applyButtonWrapper].join(''),
    );
  }

  addEventListeners() {
    document.addEventListener('mouseup', this.checkClickOnHide.bind(this));
    $('span[data-action="today"]').on('click', this.hideCalendar.bind(this));
    $(this.anchor).on('click', this.showCalendar.bind(this));
  }

  showCalendar() {
    this.calendar.toggle();
  }

  hideCalendar() {
    this.calendar.hide();
  }

  checkClickOnHide(e) {
    const div = $(this.calendar);
    if (!div.is(e.target) && div.has(e.target).length === 0) {
      this.hideCalendar();
    }
  }
}

export default Calendar;
