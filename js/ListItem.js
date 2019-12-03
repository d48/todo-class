class ListItem {
  constructor(name) {
    this.name = name;
    this.selected = true;
    this.id = new Date().toISOString();
  }

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }
}

export default ListItem;
