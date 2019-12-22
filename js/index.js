/* ---------------------- classes ----------------------- */
import Title from './Title.js';
import ListContainer from './ListContainer.js';

// APP

/* ---------------------- Object instances ----------------------- */

const elementListContainer = document.querySelector('#list');
const elementTitle = document.querySelector('#page-title');

let titleInstance = new Title({
  title: "Ryan's Todo App"
});
let listInstance = new ListContainer({
  elementContainer: elementListContainer,
  elementTitle: elementTitle,
  titleInstance: titleInstance
});

// Buttons
const newListField = document.querySelector('#new-list-field');
const newListButton = document.querySelector('#new-list-button');
const deleteListButton = document.querySelector('#delete-list-button');

// List Functions
const createNewList = (event) => {
  listInstance.addList({name: newListField.value});
  newListField.value = '';
  listInstance.renderContainer();
};

const deleteList = event => {
  listInstance.removeSelectedList();
};

// Event Listeners
newListField.addEventListener('keyup', event => {
  if (event.key === 'Enter' ) {
    createNewList();
  }
});

newListButton.addEventListener('click', createNewList);
deleteListButton.addEventListener('click', deleteList);

// Renders
listInstance.renderContainer();
