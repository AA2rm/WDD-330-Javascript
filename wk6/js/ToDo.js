/*Import files into the ToDo file*/
import utils from './utils.js';
import ls from './ls.js';

/*********************************
 * Add a  button to the ToDo func
 ********************************/

document.querySelector('#addBtn').onclick = newTodo;

/****************************
 *  Add a loadTodos func
 ****************************/
function loadTodos() {
    const todoList = ls.getTodoList();

    todoList.forEach(todo => {
        const el = createTodoElement(todo)
        addToList(el);
    })
}

/****************************
 * Add a ToDo func
 ***************************/
function newTodo() {
    const todo = createTodo();
    const todoDiv = createTodoElement(todo);
    addToList(todoDiv);
    ls.saveTodo(todo);
}

/****************************
 * Create a createToDo func
 ***************************/
function createTodo() {
    const input = document.querySelector('#todoInput');
    const newTodo = {
        id: Date.now(),
        content: input.value,
        completed: false
    }
    const todoDiv = createTodoElement(todo);
    input.value = '';
    return newTodo;
}

/****************************
 * Pass in the elements into
 * the createToDo func
 ***************************/
function createTodoElement(todo) {
    // todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    // completebtn
    const completebtn = document.createElement('button');
    completeBtn.classList.add('complete-btn');

    // todo content
    const todoContent = document.createElement('div');
    todoContent.innerText = todo.content;
    todoContent.classList.add('todo-content');

    // delete btn
    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('data-id', todo.id);
    deleteBtn.classList.add('todo-delete-btn');
    deleteBtn.innerText = "X";
    deleteBtn.onclick = deleteTodo;

    todoDiv.appendChild(completeBtn);
    todoDiv.appendChild(todoContent);
    todoDiv.appendChild(deleteeBtn);

    return todoDiv;
}

/****************************
 *  Add the list to the doc
 * NOTE: should this be
 * addTodoList
 ****************************/

function addToList(todoDiv) {

    document.querySelector('#todos').appendChild(todoDiv);
}

/****************************
 *  Add the event handlers
 ****************************/
function deleteTodo(e) {
    const btn = e.currentTarget;
    ls.deleteTodo(btn.getAttribute('data-id'));
    document.querySelector('#todos').innerHTML = '';
    loadTodos();
}