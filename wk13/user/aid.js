'use strict';
/* Week 11 Team Project*/
// MAKE REQUEST FUNCTION
/**********************************************
 * Create an AJAX function request that fetches
 * from the server, does a POST, & sends login
 * data to the authentication server
 *********************************************/
  export class Errors {
    constructor(errorElementId) {
      this.errorElement = document.getElementById(errorElementId);
    }
  
    handleError(error, callback) {
      // parse out the error code from the error string
      const code = error.message.substring(0, 3);
      this.displayError(error);
      // if it is something related to authentication then show the login form again.
      if (code == 500 || code == 401) {
        callback();
      }
      console.log(code);
    }
  
    displayError(error) {
      this.errorElement.innerHTML = error.message;
      this.errorElement.classList.remove('hidden');
    }
    clearError() {
      this.errorElement.innerHTML = '';
      this.errorElement.classList.add('hidden');
    }
  }
  
  // Server Address
const baseURL = 'http://127.0.0.1:3000/';
// helper function to make an http request with fetch.
// pass an URL & method set to GET
// modify the function declaration adding in a token arg
export async function makeRequest(url, method = 'GET', body = null, token = null) {
    // we will need to set some custom options for our fetch call
    // specify method GET is the default
    // set headers
    let options = {
      method: method,
      headers: {
         // returns a json object
        'Content-Type': 'application/json'
      }
    };
    
    // if we are sending any data with the request add it here w/ a JSON POST
    // validate if the method is POST or PUT
    // add & convert the body of the request to a string
    if (method == 'POST' || method == 'PUT') {
      options.body = JSON.stringify(body);
    }

    // test for a token
    
  // if a token was passed in we should send it on.
  if (token) {
    options.headers.Authorization = `Bearer ${token}`;
  }
    
    
    // prc the promises w/ an async/await
    // pass in the URL & ooptions obj
    const response = await fetch(baseURL + url, options);
    // in this case we are processing the response as JSON before we check the status. 
    // The API we are using will send back more meaningful error messages than the default messages in the response, 
    // but we have to convert it before we can get to them.
    const data = await response.json();
  
    if (!response.ok) {
      // server will (throw errors) send a 500 server error if the token expires...
      // or a 401 if we are not authorized, ie bad username/password combination, 
      // and a 404 if the URL we requested does not exist. All of these would cause response.ok to be false
  
      console.log(response);
      throw new Error(`${data.status}: ${data.message}`);
    } else {
      
      return data;
    }
  
    // not catching the error here...so we will need to catch it later on and handle it.
  }