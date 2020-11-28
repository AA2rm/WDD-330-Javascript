'use strict';
/*****************************************
 * Import the makeRequest function
 ****************************************/
import Auth from './auth.js';
import getJSON from './main.js';

/*****************************************
 * Test the makeRequest function
 ****************************************/

makeRequest('login', 'POST', {
    firstname: '',
    lastname: '',
    password: 'user1',
    email: 'user1@email.com'
    });