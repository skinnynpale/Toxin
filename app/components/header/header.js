$('.header__burger').click(function (event) {
  event.preventDefault();
  const burget = $(this);
  burget.toggleClass('header__burger_opened');
  $('.header__site-nav').slideToggle(300);
  $('.header__user-nav').slideToggle(300);
});
