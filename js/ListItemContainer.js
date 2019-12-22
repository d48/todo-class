import ListItem from './ListItem.js';
import listBuilder from './helpers.js';

class ListItemContainer {
  constructor({element}) {
    this.element = element;
    this.items = [new ListItem({name:'banana'}), new ListItem({name:'apple'})];
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
    this.element.className = 'show';
    this.element.removeChild(this.element.lastChild);
    this.element.appendChild(this.render());
    this.displayTitle(list);
  }
}

export default ListItemContainer;
