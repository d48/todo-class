class List {
  constructor(name) {
    this.name = name;
    this.selected = true;
    this.id = new Date().toISOString();
    this.tasks = [];
  }

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  addItem(task) {
  }

  removeItem(id) {
  }
}

export default List;
