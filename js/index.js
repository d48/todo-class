/* ---------------------- classes ----------------------- */
import Title from './Title.js';
import ListContainer from './ListContainer.js';
import ListItemContainer from './ListItemContainer.js';

// APP

/* ---------------------- Object instances ----------------------- */

const elementListContainer = document.querySelector('#list');
const elementTitle = document.querySelector('#page-title');
const elementItemsContainer = document.querySelector('#items');

let titleInstance = new Title({
  element: elementTitle,
  title: "Ryan's Todo App"
});

let listItemContainerInstance = new ListItemContainer({
  element: elementItemsContainer
});


let listInstance = new ListContainer({
  elementContainer: elementListContainer,
  titleInstance: titleInstance,
  listItemContainerInstance: listItemContainerInstance
});


// Buttons
const newListField = document.querySelector('#new-list-field');
const newListButton = document.querySelector('#new-list-button');
const newItemField = document.querySelector('#new-item-field');
const newItemButton = document.querySelector('#new-item-button');
const deleteListButton = document.querySelector('#delete-list-button');

// List Functions
const createNewList = event => {
  listInstance.addList({name: newListField.value});
  newListField.value = '';
  listInstance.renderContainer();
};

const deleteList = event => {
  listInstance.removeSelectedList();
};

const createNewItem = event => {
  listItemContainerInstance.addItem({id: listInstance.getSelectedList().getId(), name: newItemField.value});
  newItemField.value = '';
  listItemContainerInstance.renderContainer();
}

// Event Listeners
newListField.addEventListener('keyup', event => {
  if (event.key === 'Enter' ) {
    createNewList();
  }
});

newItemField.addEventListener('keyup', event => {
  if (event.key === 'Enter' ) {
    createNewItem();
  }
});

newListButton.addEventListener('click', createNewList);
newItemButton.addEventListener('click', createNewItem);
deleteListButton.addEventListener('click', deleteList);

// Renders
listInstance.renderContainer();
