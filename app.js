// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#tasks');

// Load all event listeners
loadEventListeners();

// Load all evvent listeners
function loadEventListeners() {
    form.addEventListener('submit', addTask);
}

// add task
function addTask(e) {
    if(taskInput.value === '') {
        alert('Add a task');
    }
    
 
    const li = document.createElement('li');
    
    li.className = 'collection-item';





    e.preventDefault();
}