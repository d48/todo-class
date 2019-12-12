class Title {
  constructor(title, list) {
    this.title = title;
    this.list = list;
  }

  get numberOfLists() {
    return this.list.getListsLength();
  }

  displayTitle() {
    return `${this.title}: ${this.numberOfLists} lists`;
  }
}

export default Title;
