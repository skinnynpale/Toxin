function rangeSlider(anchorValues, options) {
  const valuesHTML = document.querySelector(anchorValues);

  $('.js-range-slider').ionRangeSlider({
    onStart(data) {
      valuesHTML.innerHTML = `${data.from}₽ - ${data.to}₽`;
    },
    onChange(data) {
      valuesHTML.innerHTML = `${data.from}₽ - ${data.to}₽`;
    },
    ...options,
  });
}

export default rangeSlider;
