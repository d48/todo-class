class Storage {
  constructor({idLists = '', idListSelected = ''}) {
    this.idLists = idLists;
    this.idListSelected = idListSelected;
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

  setItems(items) {
    localStorage.setItem(id, JSON.stringify(items));
  }
}

export default Storage;
