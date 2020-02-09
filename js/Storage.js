window.todoAppInstance;

class Storage {
  constructor() {
    this.idLists = 'todo-app-lists';
    this.idListSelected = 'todo-app-lists-selected';

    const instance = window.todoAppInstance;

    if (instance) {
      return instance;
    }

    window.todoAppInstance = this;
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
    return lists.filter(list => list.id === this.idListSelected);
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

  setItemsForList(id, items) {
    // read lists
    const lists = this.getLists();

    // add items on filtered list
    lists.map(item => {
      if (item.id === id) {
        item.items = items;
      }
    });

    // write to storage
    this.setLists(lists);
  }

  getItems(id) {
    const items = localStorage.getItem(id);
    return JSON.parse(items);
  }

  getItemsFromList(id) {
    const items = this.getSelectedList().items;
    return items ? JSON.parse(items) : [];
  }
}

export default Storage;
