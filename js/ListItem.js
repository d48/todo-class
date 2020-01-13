class ListItem {
  constructor({ name, id = new Date().toISOString(), completed = false }) {
    this.name = name;
    this.id = id;
    this.completed = completed;
  }

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }
}

export default ListItem;
