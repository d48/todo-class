class ListItemContainer {
  constructor({element}) {
    this.element = element;
  }

  showItemsFromList(list) {
    this.displayTitle(list);
    // render list
  }

  displayTitle(list) {
    this.element.querySelector('h2').textContent = `${list.getItems().length} ${list.getName()} items`;
  }
}

export default ListItemContainer;
