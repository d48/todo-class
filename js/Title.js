class Title {
  constructor({title}) {
    this.title = title;
  }

  displayTitle(num) {
    return `${this.title}: ${num} lists`;
  }
}

export default Title;
