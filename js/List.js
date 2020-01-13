import Storage from './Storage.js';

class List {
  constructor({name, selected = false, id = new Date().toISOString(), items = []}) {
    this.name = name;
    this.selected = selected;
    this.id = id;
    this.items = items;
    this.storage = new Storage({
      idLists: null,
      isListSelected: null
    });
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
    this.storage.setItems(this.getId(), this.getItems());
  }
}

export default List;
