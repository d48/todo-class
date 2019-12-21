import List from './List.js';

class ListContainer {
  constructor({elementContainer, elementTitle, titleInstance}) {
    this.id = 'todo-app-lists'
    this.elementContainer = elementContainer;
    this.elementTitle = elementTitle;
    this.titleInstance = titleInstance;
    this.lists = [];

    // check storage
    const listsFromStorage = this.checkStorage();

    if (listsFromStorage) {
      listsFromStorage.forEach(item => {
        this.addList(item);
      });
    }

    this.listSelected = null;
  }

  checkStorage() {
    let appStorage = [];

    // storage read
    if (!this.lists.length) {
      appStorage = localStorage.getItem(this.id);
      return appStorage && JSON.parse(appStorage) || [];
    }
  }

  getLists() {
    return this.lists;
  }

  getListsLength() {
    return this.lists.length;
  }

  addList(obj) {
    const listItem = new List(obj);
    let appStorage = [];

    // storage read
    if (this.lists.length) {
      appStorage = localStorage.getItem(this.id);
      appStorage = JSON.parse(appStorage);
    }

    // prep for storage writing
    appStorage.push(listItem);
    localStorage.setItem(this.id, JSON.stringify(appStorage));

    this.lists.push(listItem);
  }

  removeList(id) {
    this.lists = this.lists.filter(list => list.getId() !== id);
  }

  createEventListeners() {
    var self = this;
    document.querySelectorAll('[data-li="list-row"] input[type="radio"]').forEach(item => {
      item.addEventListener('click', event => {
        console.log('name', event.target.dataset.name);
        console.log('id', event.target.dataset.id);
      });
    });

    document.querySelectorAll('[data-li="list-row"] button').forEach(item => {
      item.addEventListener('click', event => {
        console.log('id', event.target.dataset.id);
        self.removeList(event.target.dataset.id);
      });
    });
  }

  render() {
    const buildHTML = (item) => {
      return `
<li data-li="list-row"><input type="radio" id="list-${item.getId()}" name="list" data-name="${item.getName()}" data-id="${item.getId()}" /><label>${item.getName()}</label></li>`
    };

    let listElement = document.createElement('ul');
    let listHTML = this.lists.length > 0
      ? this.lists.reduce((acc, currValue) => {
        return acc += buildHTML(currValue);
      }, '')
      : '';

    listElement.innerHTML = listHTML;

    return listElement;
  }

  renderContainer() {
    // listInstance.removeListeners();
    this.elementContainer.removeChild(this.elementContainer.lastChild);
    this.elementContainer.appendChild(this.render());
    // createListeners();
    this.createEventListeners();
    this.displayTitle()
  }

  displayTitle() {
    this.elementTitle.textContent = this.titleInstance.displayTitle(this.getListsLength())
  }
}

export default ListContainer;
