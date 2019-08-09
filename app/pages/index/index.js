// Datepicker
$('#find-room__from').datepicker({
  minDate: new Date(),
  range: true,
  multipleDatesSeparator: "-",
  onSelect: function(formattedDate, date, inst) {
    $('#find-room__from').val(formattedDate.split("-")[0]);
    $('#find-room__to').val(formattedDate.split("-")[1]);
  },
  prevHtml: '<div class="find-room__arrow-date find-room__arrow-date-prev"></div>',
  nextHtml: '<div class="find-room__arrow-date find-room__arrow-date-next"></div>',
  clearButton: true,
  todayButton: true,
});

// Dropdown
const adult = document.getElementById('adult');
const adultValue = document.getElementById('adultValue');
const adultMinus = adult.childNodes[1]


adultMinus.addEventListener('click', function() {
  console.log('Тык');
});

function isZero(e) {
  if (e.innerHTML == 0) {
    return e.previousSibling.classList.add('dropdown__btn_disable');
  }
}

console.log(isZero(adultValue));
