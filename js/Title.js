class Title {
  constructor({element, title}) {
    this.element = element;
    this.title = title;
  }

  displayTitle(num) {
    this.element.textContent = `${this.title}: ${num} lists`;
  }
}

export default Title;
