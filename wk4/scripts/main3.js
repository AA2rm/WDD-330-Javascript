/******************
//Form Events-Chp 8
******************/
const input = form.elements.searchInput;
input.addEventListener('focus', () => alert('focused'), false);
input.addEventListener('blur', () => alert('blurred'), false);
input.addEventListener('change', () => alert('changed'), false);


//VARIOUS WAYS TO RETRIEVE FORMS
/******************************************
Retrieve any collection of forms from the
doc by order w/in the HTML using a numerical
index
******************************************/
const form = document.forms[0];


/**************************************
 Retrieve a collection of forms by its
 name attribute
 *************************************/
const form = document.forms['search', 'userInfo'];

/************************
 * Retrieve a form by its
 * elements
 * *********************/
const input = form.elements;

/****************************************
 * Retrieve a form by its name attributes
 ***************************************/
const input = form['searchInput']


//FORM PROPERTIES & METHODS
/**************
//Submit a form 
form.submit()
**************/
//Submit a form manually by an input or buton element
function myFunction() {
    document.forms("iteneraryForm").submit();




/*****************************************
  Reset a form back to its initial values
  listed in the HTML form
******************************************/
//form.reset()
myFormElement.reset("iteneraryForm");

//OR
function myFunction() {
    document.getElementById("iteneraryForm").reset();
  }


//FORM EVENTS
/********************************************
 * Create an event that focuses on an element
*********************************************/
const input = form.elements.searchInput;
input.addEventListener('focus', () => alert('focused'), false);

//OR
//Add a focus event to the input field
input.addEventListener('focus', function() {
    if (input.value==='Search Here') {
        input.value = '' 
    }
}, false);


/******************************
//Add a blur event to the input field
******************************/
input.addEventListener('blur', function() {
    if(input.value === '') {
        input.value = 'Search Here';
    } }, false);

//OR
input.addEventListener('blur', () => alert('blurred'), false);


/****************************************
//Add a message change event to the form
*****************************************/
input.addEventListener('change', () => alert('changed'), false);


/****************************************
//Add a submit form event to the form
*****************************************/
const form = document.forms['search'];
form.addEventListener ('submit', search, false);
function search() {
alert(' Form Submitted');
}


/************************************************ 
//Stop a form submission using the default method
************************************************/
function search(event) {
    alert('Form Submitted');
    event.preventDefault();
}


/************************************************ 
//Use a text input element to retrieve the text
from the form
************************************************/
function search(event) {
    alert(`You Searched for: ${input.value}`);
    event.preventDefault();
    }

    
/***********************
//Set the value using JS
************************/
input.value = 'Search Here';


/****************************************
//Add an element that deletes the text 
that's left inside of the text field 
*****************************************/
input.addEventListener('focus', function(){
    if (input.value==='Search Here') {
    input.value = ''
    }
    }, false);
    input.addEventListener('blur', function(){
    if(input.value === '') {
    input.value = 'Search Here';
    } }, false);


/****************************************
//Change the input filed to a placeholder
*****************************************/
<input type='text' name='search-box' placeholder='Search Here'></input>


//FORM CONTROLS
/***************************
//Add an autofocus to a form
input, select, textarea, button
***************************/
document.forms.hero.heroName.focus();


//TEXT INPUT FILEDS pg 317

//PASSWORD INPUT FIELDS 317
/*********************************
//Create an obj using a const func
**********************************/

//OBJECT ORIENTED PROGRAMMING
/*********************************
//Create an obj using a const func
**********************************/
const Dice = function(sides=6){
    this.sides = sides;//keyword this is the obj that will be returned by the cons func
    this.roll = function() {
        return Math.floor(this.sides * Math.random() + 1)
    }
}

/**************************************
//Create a new obj using literal syntax
***************************************/
const literalObject = {};
{}

/************************************
//Create a new obj using a const func
************************************/
constructedObject = new Object();
{}

/***************************
//Create an array const func
***************************/
constructedArray = new Array(1,2,3);
[1, 2, 3]

/**************************************
//Create a new class declaration syntax
**************************************/
class Dice {
    constructor(sides=6) {
        this.sides = sides;
    }
    roll() {
        return Math.floor(this.sides * Math.random() + 1)
    }
}
}


//FUNCTIONS-chp 12
/**************************************
 * Create a new obj literal notation
 **************************************/
const dice = {
    sides: 6,
    roll() {
    return Math.floor(this.sides * Math.random() + 1)
    }
    }

/********************************************
 * Create a construcor function that 
 * define the properties & methods of an obj
 ********************************************/
const Dice = function(sides=6){
    this.sides = sides;
    this.roll = function() {// this respresentthe obj to  be return by the const func
    return Math.floor(this.sides * Math.random() + 1)
    }
}

/********************************************
 * Create an instance for the dice const func
 *******************************************/
const redDice = new Dice(); //() not required when use 'new'
    { sides: 6, roll [Function]
}

//OR
const redDice = new Dice;// () required if using default arg

//OR
const whiteDice = new Dice(4); // Use to create another obj