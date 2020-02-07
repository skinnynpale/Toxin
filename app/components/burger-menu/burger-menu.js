import $ from 'jquery';

function burgerMenu(handlerSelector, activeClass, targets) {
  $(handlerSelector).click(function(event) {
    event.preventDefault();
    const burger = $(this);
    burger.toggleClass(activeClass);
    targets.forEach(item => $(item).slideToggle(300));
  });
}

export default burgerMenu;
