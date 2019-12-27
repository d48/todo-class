class List {
  constructor({name, selected = false, id = new Date().toISOString(), items = []}) {
    this.name = name;
    this.selected = selected;
    this.id = id;
    this.items = items;
  }

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  getItems() {
    return this.items;
  }

  clearItems() {
    this.items = [];
  }

  setItems(items) {
    this.items = items;
  }

  addItem(item) {
    this.items.push(item);
    // save items in list in storage
  }
}

export default List;
