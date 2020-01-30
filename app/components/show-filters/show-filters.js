export default function showFilters(anchorButton, target) {
  $(anchorButton).click(event => {
    event.preventDefault();
    const $elem = $(target);
    $elem.slideToggle(300);

    if (this.innerHTML === 'Показать фильтры') {
      this.innerHTML = 'Спрятать фильтры';
    } else {
      this.innerHTML = 'Показать фильтры';
    }
  });
}
