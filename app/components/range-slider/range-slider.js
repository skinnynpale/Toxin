import 'ion-rangeslider';
import 'ion-rangeslider/css/ion.rangeSlider.css';
import './range-slider.sass';

function rangeSlider(root, rootValues, options, tip) {
  const valuesHTML = document.querySelector(rootValues);
  const rootHTML = document.querySelector(root);
  const sliderTemplate = `
                            <div class="range-slider">
                                <div class="range-slider__app">
                                    <input class='js-range-slider' type="text" name="my_range" value="" />
                                    ${tip ? `<p class="range-slider__info">${tip}</p>` : ''}
                                </div>
                            </div>`;

  rootHTML.insertAdjacentHTML('beforeend', sliderTemplate);

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
