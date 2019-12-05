import ListItem from './ListItem.js';

class List {
  constructor() {
    this.lists = [];
    this.listSelected = null;
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

  createEventListeners() {
    document.querySelectorAll('#list input[type="radio"]').forEach(item => {
      item.addEventListener('click', event => {
        console.log('clicky', event.target.dataset.value);
      });
    });
  }

  render() {
    const buildHTML = (item) => {
      return `
<li><input type="radio" id="list-${item.getId()}" name="list" data-value="${item.getName()}" /><label>${item.getName()}</label></li>`;
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
}

export default List;
