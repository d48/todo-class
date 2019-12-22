import List from './List.js';
import Storage from './Storage.js';
import listBuilder from './helpers.js';

class ListContainer {
  constructor({elementContainer, titleInstance, listItemContainerInstance}) {
    this.id = 'todo-app-lists'
    this.idListSelected = this.id + '-selected';
    this.elementContainer = elementContainer;
    this.titleInstance = titleInstance;
    this.listItemContainerInstance = listItemContainerInstance;
    this.lists = [];
    this.listSelectedId = null;
    this.storage = new Storage({
      idLists: this.id,
      idListSelected: this.idListSelected
    });

    // check for any lists to create that has been saved
    this.checkStorage();
  }

  checkStorage() {
    if (!this.lists.length) {
      let listsFromStorage = this.storage.getLists();

      if (listsFromStorage) {
        listsFromStorage.forEach(item => {
          this.addList(item);
        });

        let selectedList = this.storage.getSelectedList();
        if (selectedList) {
          this.selectList(selectedList);
        }
      }
    }
  }

  getList(id) {
    return this.lists.find(list => list.getId() === id);
  }

  getLists() {
    return this.lists;
  }

  getSelectedList() {
    return this.getList(this.listSelectedId);
  }

  getListsLength() {
    return this.lists.length;
  }

  addList(obj) {
    const listItem = new List(obj);
    this.lists.push(listItem);
    this.storage.setLists(this.lists);
  }

  removeSelectedList() {
    this.lists = this.lists.filter(list => list.getId() !== this.listSelectedId);
    this.storage.setLists(this.lists);
    this.storage.clearSelectedList();
    this.listSelectedId = null;

    this.renderContainer();
    this.listItemContainerInstance.clearContainer();
  }

  selectList(id) {
    this.listSelectedId = id;
    this.storage.setSelectedList(id);
    this.listItemContainerInstance.renderContainer(this.getList(this.listSelectedId));
  }

  createEventListeners() {
    var self = this;
    this.elementContainer.querySelectorAll('[data-li="list-row"] input[type="radio"]').forEach(item => {
      item.addEventListener('click', event => {
        self.selectList(event.target.dataset.id);
      });
    });
  }

  render() {
    const buildHTML = (item) => {
      return `
<li data-li="list-row"><input type="radio" id="list-${item.getId()}" name="list" data-name="${item.getName()}" data-id="${item.getId()}" /><label>${item.getName()}</label></li>`
    };

    return listBuilder({
      fn: buildHTML,
      list: this.lists
    });
  }

  clickSelectedList() {
    if(this.listSelectedId) {
      this.elementContainer.querySelectorAll('[data-id="' + this.listSelectedId + '"]')[0].click();
    }
  }

  renderContainer() {
    // listInstance.removeListeners();
    this.elementContainer.removeChild(this.elementContainer.lastChild);
    this.elementContainer.appendChild(this.render());

    this.createEventListeners();
    this.clickSelectedList();
    this.titleInstance.displayTitle(this.getListsLength())
  }

}

export default ListContainer;
