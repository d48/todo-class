import ListItem from './ListItem.js';

class List {
  constructor() {
    this.lists = [];
  }

  getLists() {
    return this.lists;
  }

  getListsLength() {
    return this.lists.length;
  }

  addList(name) {
    const listItem = new ListItem(name);
    this.lists.push(listItem);
  }

  removeList(id) {

  }

  render() {
    const buildHTML = (item) => {
      return `
<li><input type="radio" name="list" /><label>${item.getName()}</label></li>`;
    };

    let listElement = document.createElement('ul');
    let listHTML = this.lists.length > 0
      ? this.lists.reduce((acc, currValue) => {
        return acc += buildHTML(currValue);
      }, '')
      : '';

    listElement.innerHTML = listHTML;

    console.log('listElement', listElement);

    return listElement;
  }
}

export default List;
