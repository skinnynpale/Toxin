// Подключение rangeslider
import 'ion-rangeslider';
import 'ion-rangeslider/css/ion.rangeSlider.css';
// Подключение рейтинга
import '../../components/buttons/rate/rate.js';
// burger-menu
import '../../components/header/header'

// Инициализация rangeslider
const rangeSliderRoomValue = document.getElementById('rangeSliderRoomValue')

$(".js-range-slider").ionRangeSlider({
  type: "double",
  min: 0,
  max: 15000,
  from: 5000,
  to: 10000,
  onStart: function (data) {
      rangeSliderRoomValue.innerHTML = data.from + '₽' + ' - ' + data.to + '₽';
  },
  onChange: function (data) {
      rangeSliderRoomValue.innerHTML = data.from + '₽' + ' - ' + data.to + '₽';
  },
  hide_min_max: true,
  hide_from_to: true
});

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
//


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

  // // Добавление в массив всех элементов
  // arrayComfort.push(valuesComfort[i].innerHTML + ' ' + valuesComfort[i].previousSibling.previousSibling.innerHTML + ' ');

  // + Если прибавляем
  valuesComfort[i].nextSibling.addEventListener("click", function(event) {
    this.previousSibling.previousSibling.classList.remove('dropdown__btn_disable');
    this.previousSibling.innerHTML = +this.previousSibling.innerHTML + 1;
    window.readyStrForInputComfort = '';

    // если клик по bedrooms
    if (this.parentNode.id == "bedrooms") {
      if (this.previousSibling.innerHTML == 1) {
        arrayComfort.push(this.previousSibling.innerHTML + ' спальня');
        window.keyBedrooms = arrayComfort.indexOf('1 спальня');
      }
      else if (this.previousSibling.innerHTML >= 2) {
        arrayComfort[keyBedrooms] = this.previousSibling.innerHTML + ' спальни';
      }
      else if (this.previousSibling.innerHTML >= 5) {
        arrayComfort[keyBedrooms] = this.previousSibling.innerHTML + ' спален';
      }
      arrayComfort.forEach(function(item, index, array) {
        readyStrForInputComfort += item + ' ';
      });
      inputComfortFilter.value = readyStrForInputComfort;
    }
    // если клик по beds
    if (this.parentNode.id == "beds") {
      if (this.previousSibling.innerHTML == 1) {
        arrayComfort.push(this.previousSibling.innerHTML + ' кровать');
        window.keyBeds = arrayComfort.indexOf('1 кровать');
      }
      else if (this.previousSibling.innerHTML >= 2) {
        arrayComfort[keyBeds] = this.previousSibling.innerHTML + ' кровати';
      }
      else if (this.previousSibling.innerHTML >= 5) {
        arrayComfort[keyBeds] = this.previousSibling.innerHTML + ' кроватей';
      }
      arrayComfort.forEach(function(item, index, array) {
        readyStrForInputComfort += item + ' ';
      });
      inputComfortFilter.value = readyStrForInputComfort;
    }
    // если клик по bathrooms
    if (this.parentNode.id == "bathrooms") {
      if (this.previousSibling.innerHTML == 1) {
        arrayComfort.push(this.previousSibling.innerHTML + ' ванная комната');
        window.keyBathrooms = arrayComfort.indexOf('1 ванная комната');
      }
      else if (this.previousSibling.innerHTML >= 2) {
        arrayComfort[keyBathrooms] = this.previousSibling.innerHTML + ' ванных комнаты';
      }
      else if (this.previousSibling.innerHTML >= 5) {
        arrayComfort[keyBathrooms] = this.previousSibling.innerHTML + ' ванных комнат';
      }
      arrayComfort.forEach(function(item, index, array) {
        readyStrForInputComfort += item + ' ';
      });
      inputComfortFilter.value = readyStrForInputComfort;
    }


  });
  // - Если отнимаем
  valuesComfort[i].previousSibling.addEventListener("click", function(event) {
    if (this.nextSibling.innerHTML == 0) {
      isZero(this.nextSibling);
    }
    else {
      this.nextSibling.innerHTML = +this.nextSibling.innerHTML - 1;
      isZero(this.nextSibling);

      // если клик по bedrooms
      if (this.parentNode.id == "bedrooms") {
        if (this.nextSibling.innerHTML == 0) {
          arrayComfort.splice(keyBedrooms, 1)
        }
        else if (this.nextSibling.innerHTML == 1) {
          arrayComfort[keyBedrooms] = this.nextSibling.innerHTML + ' спальня';
        }
        else if (this.nextSibling.innerHTML >= 2) {
          arrayComfort[keyBedrooms] = this.nextSibling.innerHTML + ' спальни';
        }
        else if (this.nextSibling.innerHTML >= 5) {
          arrayComfort[keyBedrooms] = this.nextSibling.innerHTML + ' спален';
        }
        inputComfortFilter.value = readyStrForInputComfort;
      }
      // если клик по beds
      if (this.parentNode.id == "beds") {
        if (this.nextSibling.innerHTML == 0) {
          arrayComfort.splice(keyBeds, 1)
        }
        else if (this.nextSibling.innerHTML == 1) {
          arrayComfort[keyBeds] = this.nextSibling.innerHTML + ' спальня';
        }
        else if (this.nextSibling.innerHTML >= 2) {
          arrayComfort[keyBeds] = this.nextSibling.innerHTML + ' спальни';
        }
        else if (this.nextSibling.innerHTML >= 5) {
          arrayComfort[keyBeds] = this.nextSibling.innerHTML + ' спален';
        }
        inputComfortFilter.value = arrayComfort;
      }
      // если клик по bathrooms
      if (this.parentNode.id == "bathrooms") {
        if (this.nextSibling.innerHTML == 0) {
          arrayComfort.splice(keyBathrooms, 1)
        }
        else if (this.nextSibling.innerHTML == 1) {
          arrayComfort[keyBathrooms] = this.nextSibling.innerHTML + ' ванная комната';
        }
        else if (this.nextSibling.innerHTML >= 2) {
          arrayComfort[keyBathrooms] = this.nextSibling.innerHTML + ' ванных комнаты';
        }
        else if (this.nextSibling.innerHTML >= 5) {
          arrayComfort[keyBathrooms] = this.nextSibling.innerHTML + ' ванных комнат';
        }
        inputComfortFilter.value = arrayComfort;
      }
    }
  });
};

// Проверка на ноль
function isZero(e) {
  if (e.innerHTML == 0) {
    return !!e.previousSibling.classList.toggle('dropdown__btn_disable');
  }
}


// Показать фильтры
$('.js-show-filters').click(function (event) {
  event.preventDefault();
  var $elem = $('.rooms-filter');
  $elem.slideToggle(300);

  if (this.innerHTML == "Показать фильтры") {
    this.innerHTML = "Спрятать фильтры";
  } else {
    this.innerHTML = "Показать фильтры";
  }

});