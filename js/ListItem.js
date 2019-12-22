class ListItem {
  constructor({ name, id = new Date().toISOString(), selected = false }) {
    this.name = name;
    this.id = id;
    this.selected = selected;
  }

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }
}

export default ListItem;
