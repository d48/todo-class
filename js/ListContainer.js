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

        let selectedList = this.storage.getSelectedListId();
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
    const list = new List(obj);
    this.lists.push(list);
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

const list = this.getSelectedList();
this.listItemContainerInstance.setList(list);
this.listItemContainerInstance.renderContainer();
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
const id = item.getId();
const name  = item.getName();

return `
<li data-li="list-row"><input type="radio" id="list-${id}" name="list" data-name="${name}" data-id="${id}" /><label for="list-${id}">${name}</label></li>`
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
