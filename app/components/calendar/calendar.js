import 'air-datepicker/dist/js/datepicker.min';
import 'air-datepicker/dist/css/datepicker.min.css';
import './calendar.scss';

class Calendar {
  constructor(anchor, options, isStatic) {
    this.anchor = anchor;

    this.initDatePicker(options);
    this.createButtons();

    this.calendar = $(anchor).data('datepicker').$datepicker;

    if (!isStatic) {
      this.addEventListeners();
    }

    this.calendar.hide();
  }

  initDatePicker(options) {
    const defaultDatePicker = {
      inline: true,
      classes: options.className,
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
    $(this.anchor).on('click', this.handleAnchorClick.bind(this));
    $(document).on('mouseup', this.handleDocumentClick.bind(this));
    $('span[data-action="today"]').on('click', this.hideCalendar.bind(this));
  }

  isClickOnCalendar(e) {
    const { target } = e;
    return target.className.match(/(datepicker|calendar)/g);
  }

  isDisplay() {
    return this.calendar[0].style.display === '';
  }

  isClickOnOurNodes(e) {
    return $(this.anchor).has(e.target).length !== 0;
  }

  handleAnchorClick(e) {
    if (!this.isClickOnCalendar(e)) {
      this.toggleCalendar();
    }
  }

  handleDocumentClick(e) {
    if (!this.isClickOnOurNodes(e)) {
      this.calendar.hide();
    }
  }

  toggleCalendar() {
    if (this.isDisplay()) {
      this.calendar.hide();
    } else {
      this.calendar.show();
    }
  }

  hideCalendar(e) {
    e.stopPropagation();
    this.calendar.hide();
  }
}

export default Calendar;
