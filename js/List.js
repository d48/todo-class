class List {
  constructor(name) {
    this.name = name;
    this.selected = true;
    this.id = new Date().toISOString();
    this.items= [];
  }

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  addItem(item) {
  }

  removeItem(id) {
  }
}

export default List;
