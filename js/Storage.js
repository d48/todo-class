class Storage {
  constructor({idLists = '', idListSelected = ''}) {
    var instance;
    this.idLists = idLists;
    this.idListSelected = idListSelected;

    if (instance) {
      return instance;
    }

    instance = this;
  }

  getLists() {
    const lists = localStorage.getItem(this.idLists);
    return lists ? JSON.parse(lists) : [];
  }

  setLists(lists) {
    localStorage.setItem(this.idLists, JSON.stringify(lists));
  }

  getSelectedList() {
    return localStorage.getItem(this.idListSelected);
  }

  setSelectedList(id) {
    localStorage.setItem(this.idListSelected, id);
  }

  clearSelectedList() {
    localStorage.removeItem(this.idListSelected);
  }

  setItems(id, items) {
    localStorage.setItem(id, JSON.stringify(items));
  }

  getItems(id) {
    const items = localStorage.getItem(id);
    return JSON.parse(items);
  }
}

export default Storage;
