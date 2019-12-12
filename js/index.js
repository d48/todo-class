/* ---------------------- classes ----------------------- */
import Title from './Title.js';
import ListContainer from './ListContainer.js';

/*

tasks = [
  { id: '', name: '', completed: false },
  { id: '', name: '', completed: false },
  { id: '', name: '', completed: false },
  { id: '', name: '', completed: false },
]

addTask({name: ''})
removeTask(id)
getNumberOfTasks()
displayTitle()

*/


class Tasks {
  constructor(name) {
    this.titleName = name;
    this.tasks = [];
  }
}


/* ---------------------- Object instances ----------------------- */

let listInstance = new ListContainer();
let titleInstance = new Title("Ryan's Todo App", listInstance);

/* ---------------------- page elements ----------------------- */

const elementPageTitle = document.querySelector('#page-title');
const elementListContainer = document.querySelector('#list');


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
  listInstance.addList(newListField.value);
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

















