import ListItem from './ListItem.js';
import listBuilder from './helpers.js';
import Storage from './Storage.js';

class ListItemContainer {
  constructor({element}) {
    this.element = element;
    this.items = [];
    this.storage = new Storage();
    this.list = null;
  }

  // checks for items in storage to restore
  checkStorage() {
    this.items = this.storage.getItemsFromList(this.list.getId()) || [];

    if (items.length) {
      items.forEach(item => {
        this.addItem(item);
      });
    }
  }

  setList(list) {
    this.list = list;
  }

  addItem(obj) {
    let newItem = new ListItem(obj);
    this.list.addItem(newItem);
    this.storage.setItemsForList(this.list.getId(), this.list.getItems());
  }

  displayTitle() {
    this.element.querySelector('h2').textContent = `${this.list.getName()}`;
    this.element.querySelector('h3').textContent = `${this.list.getItems().length} items`;
  }

  clearContainer() {
    this.element.className = 'hide';
    this.element.removeChild(this.element.lastChild);
    this.element.appendChild(document.createElement('ul'));
  }

  render() {
    this.checkStorage();
    this.displayTitle();

    const buildHTML = (item) => {
      const id = item.getId();
      const name  = item.getName();

      return `
<li><input type="checkbox" id="item-${id}" data-item-name="${name}" data-item-id="${id}" name="${id}"/><label for="item-${id}">${name}</label></li>`
    };

    return listBuilder({
      fn: buildHTML,
      list: this.list.getItems()
    });

  }

  renderContainer(list) {
    this.element.className = 'show';
    this.element.removeChild(this.element.lastChild);
    this.element.appendChild(this.render());
  }
}

export default ListItemContainer;
