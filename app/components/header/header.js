$('.main-header__burger').click(function (event) {
    event.preventDefault();
    var $elem = $(this);
    $elem.toggleClass("main-header__burger_opened");
    $elem.next().slideToggle(300);
});