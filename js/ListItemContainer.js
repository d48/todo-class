import ListItem from './ListItem.js';
import listBuilder from './helpers.js';
import Storage from './Storage.js';

class ListItemContainer {
  constructor({element}) {
    this.element = element;
    this.items = [];
    this.storage = new Storage({
      idLists: null,
      isListSelected: null
    });
  }

  // checks for items in storage to restore
  checkStorage() {
    this.items = [];

    const items = this.storage.getItems(this.id);

    if (items) {
      items.forEach(item => {
        this.addItem(item);
      });
    }
  }

  addItem(obj) {
    let newItem = new ListItem(obj);
    this.items.push(newItem);
    this.storage.setItems(this.id, this.items);
  }

  displayTitle(list) {
    this.element.querySelector('h2').textContent = `${list.getName()}`;
    this.element.querySelector('h3').textContent = `${list.getItems().length} items`;
  }

  clearContainer() {
    this.element.className = 'hide';
    this.element.removeChild(this.element.lastChild);
    this.element.appendChild(document.createElement('ul'));
  }

  render() {
    this.checkStorage();

    const buildHTML = (item) => {
      return `
<li><input type="checkbox" id="item-${item.getId()}" data-item-name="${item.getName()}" data-item-id="${item.getId()}"/><label>${item.getName()}</label></li>`
    };

    return listBuilder({
      fn: buildHTML,
      list: this.items
    });
  }

  renderContainer(list) {
    this.id = list.getId();
    this.element.className = 'show';
    this.element.removeChild(this.element.lastChild);
    this.element.appendChild(this.render());
    this.displayTitle(list);
  }
}

export default ListItemContainer;
