/*Create an export for the the file*/

/****************************
 * Add a saveTodo func that
 * calls getTodoList
 ***************************/
function saveTodo(todo){
    const toDoList = getTodoList();

    toDoList.push(todo);
    localStorage.setItem('toDoList', JSON.stringify(toDoList));//gets from the toDoList array
}


/****************************
 * Add a deleteTodo func that
 * will getTodoList, locate the
 * id that's deleted from the
 * ToDoList
 ***************************/
function deleteTodo(id) {
    const toDoList = getTodoList();

    const updatedTodos = toDoList.filter( todo => todo.id != id)
    localStorage.setItem('toDoList', JSON.stringify(updatedTodos));
}

/****************************
 * Add a getTodoList func that
 * gets the TodoList from the
 * localStorage
 ***************************/
function getTodoList(todo) {
    const todoListString = localStorage.getItem('todoList');//key:'todoList'
   
    let todoList = [];

    if (todoListString) {
        todoList =JSON.parse(todoListString);
    }
    return todoList;
}


/****************************************
* Return an obj w/ the Todo property
***************************************/
export default {
saveTodo,
getTodoList,
deleteTodo
}



