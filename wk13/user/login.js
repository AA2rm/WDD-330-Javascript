/*LOGIN JS*/
'use strict';
/********************************************
 * Add an Auth class & export it 
 ********************************************/
// export class Auth {
//     constructor() {
//         this.jwtToken = '';
//         this.user = {};
//   }
// }        


// AJAX call route.js wk 10 line 30 ??????

/********************************************
 * Authenticate the login form 
 ********************************************/

//Auth class which provides basic JWT based authentication for our app.
// Requires: access to the makeRequest  functions
// ***** CORRECT ERROR: makeRequest value is not read*****
import {
    Errors,
    makeRequest
} from './aid.js';
export default class Login {
    constructor() {
        this.jwtToken = '';
        this.user = {};
        this.errors = errorHandler;
    }

    async login(callback) {
        // replace the ids below with whatever you used in your form.    
        // const firstname = document.getElementById('firstname');
        // const lastname = document.getElementById('lastname');
        const username = document.getElementById('email');
        const password = document.getElementById('password');
        const postData = {
            // firstname: firstname.value,
            // lastname: lastname.value,
            email: username.value,
            password: password.value
        };


        try {
            // 1. use the makeRequest function to pass our credentials to the server
            const data = await makeRequest('login', 'POST', postData);
            // 2. if we get a successful response...we have a token!  Store it since we will need to send it with every request to the API.
            // same token from the constructor
            this.jwtToken = data.accessToken;
            // let's get the user details as well and store them locally in the class
            // you can pass a query to the API by appending it on the end of the url like this: 'users?email=' + email
            this.user = await this.getCurrentUser( username.value, password.value);

            console.log(data);


            // hide the login form.
            hideLogin();
            document.getElementById('login').classList.add('hidden');

            // clear the password
            password.value = '';

            // clear login errors if any
            this.errors.clearError();

            // since we have a token let's go grab some data from the API by executing the callback if one was passed in
            if (callback) {
                callback();
            }
        } catch (error) {
            // if there were any errors display them
            this.errors.handleError(error);
            console.log(error);
        }
    }



    // uses the email of the currently logged in user to pull up the full user details for that user from the database
    async getCurrentUser(email) {
        try {
            // 3. add the code here to make a request for the user identified by email...don't forget to send the token!
            const data = await makeRequest(
                // 'firstname' + "lastname",
                'users?email=' + email,
                'GET',
                null,
                this.jwtToken
            );
            console.log(data);

        } catch (error) {
            // if there were any errors display them
            this.errors.handleError(error);
            console.log(error);
        }
    }

    async updateUser() {
        // after logging in we pulled down the user from the api...including the id...we can use that to do our update.

        this.user.age = 51;
        try {
            const result = await makeRequest(
                'users/' + this.user.id,
                'PUT',
                this.user,
                this.jwtToken
            );
            console.log('Update user:', result);
        } catch (error) {
            this.errors.handleError(error, showLogin);
        }
    }

    set token(value) {
        // we need this for the getter to work...but we don't want to allow setting the token through this.
    }
    get token() {
        return this.jwtToken;
    }
}
// end auth class

/***********************************
 * call the login() method
 **********************************/
function showLogin() {
    document.getElementById('login').classList.remove('hidden');
}

function hideLogin() {
    document.getElementById('login').classList.add('hidden');
}


/*****************************************
 * Attach a listerner to the submit button
 ****************************************/
const loginForm = document.getElementById("login");
loginForm.querySelector('button').addEventListener("click", () => {
    Auth.login(getPosts);
});