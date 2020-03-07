/* eslint-disable no-param-reassign */
import './dropdown.sass';

class Dropdown {
  constructor({ anchor, showFullAmount, fallbackTitle, anchorDeclensions, items, helpButtons }) {
    this.anchor = anchor;
    this.fallbackTitle = fallbackTitle;
    this.anchorDeclensions = anchorDeclensions;
    this.helpButtons = helpButtons;
    this.showFullAmount = showFullAmount;

    this.amount = 0;
    this.wrapperHTML = null;
    this.lastId = Date.now();

    this.initAssignWithDefault(items);
    this.createWrapper();

    if (!helpButtons) {
      this.wrapperHTML.classList.add('dropdown_poor');
    }

    this.renderHTML();

    this.addEventListeners();
  }

  renderHTML() {
    this.correctValues();

    this.createFuncButtons();
    this.createItems();
    this.updateDisabledHTML();
  }

  correctValues() {
    this.countDropDownAmount();
    this.correctItemsDeclensions();
    this.correctInputValue();
  }

  addEventListeners() {
    this.anchor.addEventListener('click', this.toggleDropdown.bind(this));
    document.addEventListener('mouseup', this.checkClickOnHide.bind(this));
    this.wrapperHTML.addEventListener('click', this.changeAmount.bind(this));
  }

  correctInputValue() {
    const showedItems = this.items
      .map(item => item.tempDeclension || '')
      .join(' ')
      .trim();

    if (this.amount === 0) {
      this.anchor.value = this.fallbackTitle;
    } else if (this.showFullAmount) {
      const showedFullAmount = this.getDeclension(this.amount, this.anchorDeclensions);
      this.anchor.value = `${showedFullAmount} ${showedItems}`;
    } else {
      this.anchor.value = `${showedItems}`;
    }
  }

  correctItemsDeclensions() {
    this.items = this.items.map(item => {
      if (!item.show) return item;

      item.tempDeclension = this.updateItemDeclension(item);
      return item;
    });
  }

  countDropDownAmount() {
    this.amount = this.items.map(item => item.amount).reduce((total, num) => total + num, 0);
  }

  initAssignWithDefault(items) {
    const defaultItem = {
      title: 'Item',
      show: false,
      amount: 0,
    };

    this.items = items.map(item => ({ ...defaultItem, ...item }));
  }

  createWrapper() {
    const wrapperHTML = '<div class="dropdown js-dropdown"></div>';
    this.anchor.parentElement.insertAdjacentHTML('beforeend', wrapperHTML);
    this.wrapperHTML = this.anchor.parentElement.querySelector('.js-dropdown');
  }

  createFuncButtons() {
    if (!this.helpButtons) return;

    const wrapperButtonsHTML = `<div class="dropdown__functions">
                                  <a
                                    class="dropdown__func-btn dropdown__clear"
                                    href="#!"
                                    style="opacity: ${this.amount > 0 ? 1 : 0}; cursor: default;"
                                  >
                                    Очистить
                                  </a>
                                  <a class="dropdown__func-btn dropdown__apply" href="#!">
                                    Применить
                                  </a>
                                </div>`;

    this.wrapperHTML.insertAdjacentHTML('beforeend', wrapperButtonsHTML);

    const buttonApplyHTML = this.wrapperHTML.querySelector('.dropdown__apply');
    buttonApplyHTML.addEventListener('click', this.toggleDropdown.bind(this));

    const buttonClear = this.wrapperHTML.querySelector('.dropdown__clear');
    buttonClear.addEventListener('click', this.resetDropDown.bind(this));
  }

  createItems() {
    this.items.forEach(item => this.createItem(item));
  }

  createItem(item) {
    item.id = this.lastId;
    this.lastId += 1;
    const wrapperItemHTML = `
                                <span class="dropdown__item" data-id="${item.id}">
                                  <span class="dropdown__target">${item.title}</span>
                                  <a class="dropdown__btn dropdown__btn-minus" href="#!">
                                    -
                                  </a>
                                  <span class="dropdown__value">${item.amount}</span>
                                  <a class="dropdown__btn dropdown__btn-plus" href="#!">
                                    +
                                  </a>
                                </span>`;

    this.wrapperHTML.insertAdjacentHTML('afterbegin', wrapperItemHTML);
  }

  getDeclension(amount, declensions) {
    if (amount === 0) {
      return '';
    }
    if (amount === 1) {
      return `${amount} ${declensions[0]}`;
    }
    if (amount >= 2 && amount < 5) {
      return `${amount} ${declensions[1]}`;
    }
    if (amount >= 5) {
      return `${amount} ${declensions[2]}`;
    }

    throw new Error('Неверное кол-во');
  }

  updateItemDeclension(item) {
    return this.getDeclension(item.amount, item.declensions);
  }

  changeAmount(e) {
    if (!e.target.className.includes('dropdown__btn')) return;

    const { dataset } = e.target.parentElement;
    const [desiredItem] = this.items.filter(item => item.id === +dataset.id);

    if (e.target.className.includes('dropdown__btn dropdown__btn-plus')) {
      desiredItem.amount += 1;
    } else {
      desiredItem.amount -= 1;
    }

    this.correctValues();

    this.updateItemHTML(e, desiredItem);
    this.updateDisabledHTML();
  }

  updateDisabledHTML() {
    this.updateDisabledButtons();
    this.updateDisabledClear();
  }

  updateDisabledButtons() {
    const allButtonMinus = this.wrapperHTML.querySelectorAll('.dropdown__btn-minus');

    allButtonMinus.forEach(btn => {
      if (btn.nextElementSibling.textContent > 0) {
        btn.classList.remove('dropdown__btn_disabled');
      } else {
        btn.classList.add('dropdown__btn_disabled');
      }
    });
  }

  updateDisabledClear() {
    const buttonClear = this.wrapperHTML.querySelector('.dropdown__clear');
    if (!buttonClear) return;
    if (this.amount > 0) {
      buttonClear.style.opacity = '1';
    } else {
      buttonClear.style.opacity = '0';
    }
    buttonClear.addEventListener('click', this.resetDropDown.bind(this));
  }

  resetDropDown() {
    this.items = this.items.map(item => {
      item.amount = 0;
      return item;
    });
    this.lastId = 0;
    this.wrapperHTML.textContent = '';

    this.renderHTML();
  }

  updateItemHTML(e, item) {
    e.target.parentElement.querySelector('.dropdown__value').textContent = item.amount;
  }

  checkClickOnHide(e) {
    if (this.wrapperHTML.classList.contains('dropdown_active')) {
      const div = this.wrapperHTML;

      if (div !== e.target && !div.contains(e.target)) {
        this.toggleDropdown();
      }
    }
  }

  toggleDropdown() {
    this.wrapperHTML.classList.toggle('dropdown_active');
    this.anchor.classList.toggle('field__input_active');
  }
}

export default Dropdown;
