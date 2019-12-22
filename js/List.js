class List {
  constructor({name, selected=false, id=new Date().toISOString(), items= []}) {
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
}

export default List;
