class ListItemContainer {
  constructor({title}) {
    this.title = title;

  }

  setTitle(title) {
    this.title = title;
  }

  displayTitle(num) {
    return `${num} ${this.selectedList} items`;
  }
}

export default ListItemContainer;
