$('.js-header__burger').click(function(event) {
  event.preventDefault();
  const burger = $(this);
  burger.toggleClass('js-header__burger_opened');
  $('.header__site-nav').slideToggle(300);
  $('.header__user-nav').slideToggle(300);
});
