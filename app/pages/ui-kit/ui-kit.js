import 'ion-rangeslider'
import 'ion-rangeslider/css/ion.rangeSlider.css';

$(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 1000,
        from: 200,
        to: 500,
        grid: true
    });
