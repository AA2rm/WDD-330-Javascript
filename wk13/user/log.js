'use strict';
/*****************************************
 * Import the makeRequest function
 ****************************************/
import Auth from '../register.js';
import Auth from '../login.js';
import getJSON from './aid.js';

/*****************************************
 * Test the makeRequest function
 ****************************************/

import { Errors,makeRequest } from './aid.js';

// ' makeRequest('login', 'POST', {
//     firstname: '',
//     lastname: '',
//     password: 'user1',
//     email: 'user1@email.com'
//     });


/*****************************************
 * Create an instance of the Auth class
 ****************************************/
const myErrors = new Errors('errors');
const myAuth = new Auth(myErrors);

/*****************************************
 * Call the login method
 ****************************************/

login.call("firstname", "lastname", "username", "password");

 /*****************************************
 * Attach a listener to the submit button
 ****************************************/
const loginForm = document.getElementById('login');
loginForm.querySelector('button').addEventListener('click', () => {
  myAuth.login(getPosts);
});


/*****************************************
 * Create a function that gets all POSTs
 * from the API
 ****************************************/
async function getPosts() {
  try {
    const data = await makeRequest('posts', 'GET', null, myAuth.token);
    // make sure the element is shown
    document.getElementById('content').classList.remove('hidden');
    console.log(data);
    var ul = document.getElementById('list');
    ul.innerHTML = '';
    for (var i = 0; i < data.length; i++) {
      var li = document.createElement('li');
      li.appendChild(document.createTextNode(data[i].title));
      ul.appendChild(li);
    }
    myErrors.clearError();
  } catch (error) {
    // if there were any errors display them
    myErrors.handleError(error);
  }
}
document.getElementById('createSubmit').addEventListener('click', () => {
  createPost();
});
async function createPost() {
  const form = document.forms.postForm;
  console.dir(form);
  if (form.title.validity.valid && form.content.validity.valid) {
    myErrors.clearError();
    const data = {
      title: form.title.value,
      content: form.content.value
    };

/*****************************************
 * Call the POSTs after the login is 
 * succesful
 ****************************************/
    try {
      const res = await makeRequest('posts', 'POST', data, myAuth.token);
      console.log('Post create:', data);
      form.title.value = '';
      form.content.value = '';
      getPosts();
    } catch (error) {
      myErrors.handleError(error);
    }
  } else {
    myErrors.displayError({ message: 'Title and Content are required' });
  }
}
