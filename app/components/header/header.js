$('.js-header__burger').click(function(event) {
  event.preventDefault();
  const burger = $(this);
  burger.toggleClass('js-header__burger_opened');
  const targets = ['.header__site-nav', '.header__user-nav'];
  targets.forEach(item => $(item).slideToggle(300));
});
