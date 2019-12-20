class ExpandableList {
  constructor({ mainAnchor, wrapperAnchor, mainClassActive, wrapperClassActive }) {
    this.mainClassActive = mainClassActive;
    this.wrapperClassActive = wrapperClassActive;

    this.mainAnchorHTML = document.getElementById(mainAnchor);
    this.wrapperAnchorHTML = document.getElementById(wrapperAnchor);

    this.mainAnchorHTML.addEventListener(
      'click',
      this.toggleClasses.bind(this, mainClassActive, wrapperClassActive),
    );
  }

  toggleClasses(mainClassActive, wrapperClassActive) {
    this.mainAnchorHTML.classList.toggle(mainClassActive);
    this.wrapperAnchorHTML.classList.toggle(wrapperClassActive);
  }
}

export default ExpandableList;
