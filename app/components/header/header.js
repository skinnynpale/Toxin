$('.js-header__burger').click(function(event) {
  event.preventDefault();
  const burger = $(this);
  burger.toggleClass('js-header__burger_opened');
  const targets = ['.header__site-nav', '.header__user-nav'];
  targets.forEach(item => {
    $(item)[0].style.display = 'block';
  });

  if (!burger.hasClass('js-header__burger_opened')) {
    targets.forEach(item => {
      $(item)[0].style.display = '';
    });
  }
});
