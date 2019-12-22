import List from './List.js';

class ListContainer {
  constructor({elementContainer, elementTitle, titleInstance}) {
    this.id = 'todo-app-lists'
    this.idListSelected = this.id + '-selected';
    this.elementContainer = elementContainer;
    this.elementTitle = elementTitle;
    this.titleInstance = titleInstance;
    this.lists = [];
    this.listSelectedId = null;

    // check for any lists to create that has been saved
    this.checkStorage();
  }

  checkStorage() {
    if (!this.lists.length) {
      let appStorage = localStorage.getItem(this.id);

      if (appStorage) {
        JSON.parse(appStorage).forEach(item => {
          this.addList(item);
        });

        let selectedList = localStorage.getItem(this.idListSelected);
        if (selectedList) {
          this.selectList(selectedList);
        }
      }
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
    this.lists.push(listItem);
    localStorage.setItem(this.id, JSON.stringify(this.lists));
  }

  removeSelectedList() {
    this.lists = this.lists.filter(list => list.getId() !== this.listSelectedId);
    localStorage.setItem(this.id, JSON.stringify(this.lists));
    localStorage.removeItem(this.idListSelected);
    this.listSelectedId = null;

    this.renderContainer();
  }

  selectList(id) {
    this.listSelectedId = id;
    localStorage.setItem(this.idListSelected, id);
  }

  createEventListeners() {
    var self = this;
    this.elementContainer.querySelectorAll('[data-li="list-row"] input[type="radio"]').forEach(item => {
      item.addEventListener('click', event => {
        console.log('id', event.target.dataset.id);
        self.selectList(event.target.dataset.id);
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

  clickSelectedList() {
    if(this.listSelectedId) {
      this.elementContainer.querySelectorAll('[data-id="' + this.listSelectedId + '"]')[0].click();
    }
  }

  renderContainer() {
    // listInstance.removeListeners();
    this.elementContainer.removeChild(this.elementContainer.lastChild);
    this.elementContainer.appendChild(this.render());
    // createListeners();
    this.createEventListeners();
    this.clickSelectedList();
    this.displayTitle()
  }

  displayTitle() {
    this.elementTitle.textContent = this.titleInstance.displayTitle(this.getListsLength())
  }
}

export default ListContainer;
