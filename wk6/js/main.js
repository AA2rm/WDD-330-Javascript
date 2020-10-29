//To Do List  JS
//Long handed code to add data to a form

// I.
//const form = document.forms['todo'];
//form.addEventListener('submit', addTask, false);//Prevent submission when button is clicked
//function addTask(event) {
    //event.preventDefault();
    //const number = form.task.value;
    
    //Create an obj title property
    //const task = {
    //    userId: 1,
    //    title: form.task.value,
    
    //Create a complete property w/ a default of false
    //    completed: false
    //}
    
    //Convert the obj into a JSON string method & assign it a var
    //const data = JSON.stringify(task);
    //const url = 'https://jsonplaceholder.typicode.com/todos';
    
    
    //Build the header to accept the JSON app & add a content-type app
    //const headers = new Headers({
    //    'Accept': 'application/json',
    //    'Content-Type': 'application/json'
    //});
    // const request = new Request(url,
    //{
    //    method: 'POST',//Add a post method to send the data
    //    header: headers,
    //    body: data//place data to send here
    //}
    //)
    //fetch(request)//send request & resolve JSON promise
    //.then( response => response.json() )//resolve the JS obj promise
    //.then( task => console.log(`Task saved with an id of ${task.id}`) )//save task to db
    //.catch( error => console.log('There was an error:', error))//log error to the console
//}


// II.
//Shorthanded code to add data to a form
const form = document.forms['todo'];
form.addEventListener('submit', addTask, false);
function addTask(event) {
    event.preventDefault();
    const task = new FormData(form);//creates a new FormData instance constructor function
    const url = `http://echo.jsontest.com/id/1/title/${form.task.value}`;
    const headers = new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    });
    const request = new Request(url,
    {
        method: 'POST',
        mode: 'cors',
        header: headers,
        body: JSON.stringify(task)
    }
    )
    fetch(request)
    .then( response => response.json() )
    .then( data => console.log(`${data.title} saved with an id of ${data.id}`) )
    .catch( error => console.log('There was an error:', error))
}

// III
//Add data to the form data instance as a key-value pair using the append() method
//data = new FormData(); // no form provided as an argument creates an empty form data instance
//data.append('height', 75);