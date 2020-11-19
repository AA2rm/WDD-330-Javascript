/* Week 10 Quakes API*/
'use strict';

/*******************************************************
* Add an export keyword before each of our functions to
* export the functions in utitlies doc
*******************************************************/
export function getJSON(url) { 
export const getLocation = function(options) { 

/*******************************************************
* Create a helper function that will fetch an external 
* API request from the url
*******************************************************/
function getJSON(url) {
    return fetch(url)
    // prc the response of the request
        .then(function(response) {
            // Validate if true & display ok
            if (!response.ok) {
                throw Error(response.statusText);
            } else {
                return response.json();
            }
        })
        // Add a catch method to validate if the fetch was  successful
        .catch(function(error) {
            console.log(error);
        });
        
}
/*******************************************************
* Add a promise method to return the current location
* of the user.
*******************************************************/
const getLocation = function(options) {
    return new Promise(function(resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
};
    
 



/*******************************************************
Create a function that will fetch a request from the url
*******************************************************/



/*******************************************************
Create a function that will fetch a request from the url
*******************************************************/



/*******************************************************
Create a function that will fetch a request from the url
*******************************************************/



/*******************************************************
Create a function that will fetch a request from the url
*******************************************************/