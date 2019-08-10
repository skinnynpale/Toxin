// Datepicker
$('#dateFilter').datepicker({
  minDate: new Date(),
  range: true,
  multipleDatesSeparator: " - ",
  prevHtml: '<div class="find-room__arrow-date find-room__arrow-date-prev"></div>',
  nextHtml: '<div class="find-room__arrow-date find-room__arrow-date-next"></div>',
  clearButton: true,
  todayButton: true,
  dateFormat: "dd M",
});
// 818 строка в datepicker.js для настроек

// Закрытие календаря по нажатию кнопки применить
const datepickerButtons = document.querySelectorAll('.datepicker--button');
const myDatepicker = $('#dateFilter').datepicker().data('datepicker');

$('#dateFilter').val('Выберите дату')

datepickerButtons[1].addEventListener("click", function(event) {
  myDatepicker.hide();
});


// Развернутый список с чекбоксами
const moreComfortFilter = document.getElementById('moreComfortFilter');
const moreComfortFilterWrapper = document.getElementById('moreComfortFilterWrapper');

moreComfortFilter.addEventListener("click", function(event) {
  moreComfortFilterWrapper.classList.toggle('checkbox__wrapper_expandable-active');
  this.classList.toggle('checkbox__title_expandable-active');
});


// Dropdown
window.input = document.getElementById('guestsFilter');
window.dropMenu = document.getElementById('guestsDrop');
window.values = document.querySelectorAll('#guestsDrop .dropdown__value');
window.funcBtns = document.querySelectorAll('.dropdown__func-btn');
window.primeItem = document.getElementById('guestsDropPrimeItemValue'); // Младенцы

window.amount = 0;
//




// Dropdown comfortFilter
const inputComfortFilter = document.getElementById('comfortFilter');
const dropMenuComfort = document.getElementById('comfortDrop');
const valuesComfort = document.querySelectorAll('#comfortDrop .dropdown__value');

var arrayComfort = [];


// Анимация появления dropdown__content
inputComfortFilter.addEventListener("click", function(event) {
  dropMenuComfort.classList.toggle('dropdown__content_active');
  inputComfortFilter.classList.toggle('field_default_active');
});


// Закрытие dropdown__content_active если клик вне его
$(document).mouseup(function (e){ // событие клика по веб-документу
  if (dropMenuComfort.classList.contains('dropdown__content_active')) {
    var div = $("#comfortDrop"); // тут указываем ID элемента
    if (!div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0) { // и не по его дочерним элементам
          dropMenuComfort.classList.toggle('dropdown__content_active');
          inputComfortFilter.classList.toggle('field_default_active');
    }
  }
});

// Расставление addEventListener
for (var i = 0; i < valuesComfort.length; i++) {
  // Изначальная проверка на нули в значениях
  if (valuesComfort[i].innerHTML == 0) {
    isZero(valuesComfort[i]);
  }

  // Добавление в массив всех элементов
  arrayComfort.push(valuesComfort[i].innerHTML + ' ' + valuesComfort[i].previousSibling.previousSibling.innerHTML);

  // +
  valuesComfort[i].nextSibling.addEventListener("click", function(event) {
    this.previousSibling.previousSibling.classList.remove('dropdown__btn_disable');
    this.previousSibling.innerHTML = +this.previousSibling.innerHTML + 1;
  });
  // -
  valuesComfort[i].previousSibling.addEventListener("click", function(event) {
    if (this.nextSibling.innerHTML == 0) {
      isZero(this.nextSibling);
    }
    else {
      this.nextSibling.innerHTML = +this.nextSibling.innerHTML - 1;
      isZero(this.nextSibling);
    }
  });
};

// Проверка на ноль
function isZero(e) {
  if (e.innerHTML == 0) {
    return !!e.previousSibling.classList.toggle('dropdown__btn_disable');
  }
}
