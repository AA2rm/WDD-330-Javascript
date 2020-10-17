//API JavaScript
'use strict';

//Assign each of the buttons in the HTML  file to a var to reference to later
const textButton = document.getElementById('number');
const apiButton = document.getElementById('chuck');
const outputDiv = document.getElementById('output');

//Assign URL's to vars
const textURL = 'http://numbersapi.com/random';
const apiURL = 'https://api.chucknorris.io/jokes/random';


//Assign an eventHandler to the button 'Number Fact', and build a fetch request 
//that return a promise as a string w/in a div w/ an id of output
textButton.addEventListener('click', () => {
    fetch(textURL)
    .then( response => {
        outputDiv.innerHTML = 'Waiting for response...';
    if(response.ok) {
        return response;
    }
        throw Error(response.statusText);
    })
    .then( response => response.text() )
    .then( text => outputDiv.innerText = text )
    .catch( error => console.log('There was an error:', error))
},false);

//Assign an evenHandler to the button 'Chuck Norris Fact', and build a fetch request
//that returns a promise to a JSON w/in a div w/   an id of innerText
apiButton.addEventListener('click', () => {
    fetch(apiURL)
    .then( response => {
        outputDiv.innerHTML = 'Waiting for response...';
    if(response.ok) {
        return response;
    }
    throw Error(response.statusText);
    })
    .then( response => response.json() )
    .then( data => outputDiv.innerText = data.value )
    .catch( error => console.log('There was an error:', error))
},false);

