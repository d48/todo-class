/* ---------------------- classes ----------------------- */
import Title from './Title.js';
import ListContainer from './ListContainer.js';

// APP

/* ---------------------- Object instances ----------------------- */

const elementListContainer = document.querySelector('#list');

var listInstance = new ListContainer({
  element: elementListContainer
});
var titleInstance = new Title({
  title: "Ryan's Todo App",
  list: listInstance
});

/* ---------------------- page elements ----------------------- */

const elementPageTitle = document.querySelector('#page-title');


const newListField = document.querySelector('#new-list-field');
const newListButton = document.querySelector('#new-list-button');

const displayTitle = () => {
  elementPageTitle.textContent = titleInstance.displayTitle()
}

// List Functions
const renderList = () => {
  // listInstance.removeListeners();
  elementListContainer.removeChild(elementListContainer.lastChild);
  elementListContainer.appendChild(listInstance.render());
  // createListeners();
  listInstance.createEventListeners();
  displayTitle();
};

const createNewList = (event) => {
  listInstance.addList({name: newListField.value});
  newListField.value = '';
  renderList();
};


// Event Listeners
newListField.addEventListener('keyup', event => {
  if (event.key === 'Enter' ) {
    createNewList();
  }
});

newListButton.addEventListener('click', createNewList);

// Renders
displayTitle();
elementListContainer.appendChild(listInstance.render());

















