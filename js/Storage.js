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

  addItemToList(item) {
    const id = item.getId();
  }

  getSelectedList() {
    const lists = this.getLists();
    return lists.filter(list => list.getId() === this.idListSelected);
  }

  getSelectedListId() {
    return localStorage.getItem(this.idListSelected);
  }

  setSelectedList(id) {
    localStorage.setItem(this.idListSelected, id);
  }

  clearSelectedList() {
    const idOfListSelected = localStorage.getItem(this.idListSelected);
    localStorage.removeItem(this.idListSelected);
    localStorage.removeItem(idOfListSelected);;
  }

  setItems(id, items) {
    localStorage.setItem(id, JSON.stringify(items));
    // store items in list from main app list key
  }

  getItems(id) {
    const items = localStorage.getItem(id);
    return JSON.parse(items);
  }

}

export default Storage;
