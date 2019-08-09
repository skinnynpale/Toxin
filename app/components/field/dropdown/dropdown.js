// Анимация появления dropdown__content
input.addEventListener("click", function(event) {
  dropMenu.classList.toggle('dropdown__content_active');
  input.classList.toggle('field_default_active');
});


// Закрытие dropdown__content_active если клик вне его
$(document).mouseup(function (e){ // событие клика по веб-документу
  if (dropMenu.classList.contains('dropdown__content_active')) {
    var div = $("#guestsDrop"); // тут указываем ID элемента
    if (!div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0) { // и не по его дочерним элементам
          dropMenu.classList.toggle('dropdown__content_active');
          input.classList.toggle('field_default_active');
    }
  }
});

// Расставление addEventListener
for (var i = 0; i < values.length; i++) {
  // Изначальная проверка на нули в значениях
  if (values[i].innerHTML == 0) {
    values[i].previousSibling.classList.toggle('dropdown__btn_disable');
  }
  // +
  values[i].nextSibling.addEventListener("click", function(event) {
    this.previousSibling.previousSibling.classList.remove('dropdown__btn_disable')
    this.previousSibling.innerHTML = +this.previousSibling.innerHTML + 1;
    amount += 1;
    if (amount == 1) {
      input.value = amount + ' гость';
      funcBtns[0].style.opacity = "1";
      funcBtns[0].style.cursor = "pointer";
      if (primeItem.innerHTML > 0) {
        input.value += ', ' + primeItem.innerHTML + ' младенец';
      }
    }
    if (amount >= 2 && amount < 5) {
      input.value = amount + ' гостя';
      if (primeItem.innerHTML > 0) {
        input.value += ', ' + primeItem.innerHTML + ' младенеца';
      }
    }
    if (amount >= 5) {
      input.value = amount + ' гостей';
      if (primeItem.innerHTML >= 5) {
        input.value += ', ' + primeItem.innerHTML + ' младенецев';
      } else if (primeItem.innerHTML >= 2) {
        input.value += ', ' + primeItem.innerHTML + ' младенеца';
      } else if (primeItem.innerHTML == 1) {
        input.value += ', ' + primeItem.innerHTML + ' младенец';
      }
    }
  });
  // -
  values[i].previousSibling.addEventListener("click", function(event) {
    if (this.nextSibling.innerHTML == 0) {
      isZero(this.nextSibling);
    }
    else {
      this.nextSibling.innerHTML = +this.nextSibling.innerHTML - 1;
      isZero(this.nextSibling);
      amount -= 1;
      input.value = amount + ' гость';
      if (amount == 0) {
        input.value = 'Сколько гостей';
        funcBtns[0].style.opacity = "0";
        funcBtns[0].style.cursor = "default";
      }
      if (amount == 1) {
        input.value = amount + ' гость';
        if (primeItem.innerHTML > 0) {
          input.value += ', ' + primeItem.innerHTML + ' младенец';
        }
      }
      if (amount >= 2 && amount < 5) {
        input.value = amount + ' гостя';
        if (primeItem.innerHTML > 0) {
          input.value += ', ' + primeItem.innerHTML + ' младенеца';
        }
      }
      if (amount >= 5) {
        input.value = amount + ' гостей';
        if (primeItem.innerHTML >= 5) {
          input.value += ', ' + primeItem.innerHTML + ' младенецев';
        } else if (primeItem.innerHTML >= 2) {
          input.value += ', ' + primeItem.innerHTML + ' младенеца';
        } else if (primeItem.innerHTML == 1) {
          input.value += ', ' + primeItem.innerHTML + ' младенец';
        }
      }
    }
  });
}

// Убрать кнопку Очистить если и так amount = 0
if (amount == 0) {
  funcBtns[0].style.opacity = "0";
  funcBtns[0].style.cursor = "default";
}

// Проверка на ноль
function isZero(e) {
  if (e.innerHTML == 0) {
    return !!e.previousSibling.classList.toggle('dropdown__btn_disable');
  }
}

// Очистка значений
funcBtns[0].addEventListener("click", function(event) {
  for (var i = 0; i < values.length; i++) {
    values[i].innerHTML = 0;
    values[i].previousSibling.classList.add('dropdown__btn_disable');
  }
  amount = 0;
  input.value = 'Сколько гостей';
  funcBtns[0].style.opacity = "0";
  funcBtns[0].style.cursor = "default";
});

// Применение значений
funcBtns[1].addEventListener("click", function(event) {
  dropMenu.classList.toggle('dropdown__content_active');
  input.classList.toggle('field_default_active');
});
