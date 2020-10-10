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
 * NOTE: keyword this represent the obj
 ********************************************/
const Dice = function(sides=6){
    this.sides = sides;
    this.roll = function() {// this respresentthe obj to  be return by the const func
    return Math.floor(this.sides * Math.random() + 1)
    }
}

/********************************************
 * Create an instance for the dice const func
 * using a new operator
 *******************************************/
const redDice = new Dice(); //() not required when use 'new'
    { sides: 6, roll [Function]
}

//OR
const redDice = new Dice;// () not required  when instantiating a new obj using a const function
const whiteDice = new Dice(4); // Use () are required when using a default arg


/**************************************************
 Validate the const is using an instanceof operator
 *************************************************/
redDice instanceof Dice
// true

 /******************************************
 * Create a a new obj that will inherit the 
 * properties & methods defined in the func
 *******************************************/
redDice.sides
// 6
redDice.roll()
//4
 /**************************************************
 * Create a new object is to using a literal syntax:
 **************************************************/

const literalObject = {};
// {}

constructedObject = new Object();//create a new obj using the obj const func
// {}

literalObject instanceof Object; //this literal is still an instance of the obj const
// true

const literalArray = [1,2,3]; //create an array that uses the literal syntax

constructedArray = new Array(1,2,3);//Use an alternative way to create an array const function
// [1, 2, 3]

 /********************************************
 Create an array that sets the array’s length
 property instead, and returns an array full of 
 undefined! 
 *******************************************/
new Array(5); // you might expect [5]
// [undefined, undefined, undefined, undefined, undefined]


new Array(2.5);//results in an error being thrown if a floating point decimal number is provided as an argument, because the length of an array must be an integer
// RangeError: Invalid array length



//ES^ Class Declarations
 /********************************************
 * Create a class declaration
 *******************************************/
class Dice {
    constructor(sides=6) {
    this.sides = sides;
    }
    roll() {
    return Math.floor(this.sides * Math.random() + 1)
    }
}

 /********************************************
 * Create an instance  of the Dice class 
 * using the new operator
 *******************************************/
const blueDice = new Dice(20);
// Dice { sides: 20 }

 /********************************************
 * Create a clss const & a const func & note
 * which one produces problems
 *******************************************/
// Using constructor function - noDice is just set to undefined without any warning
const noDice = Dice();
noDice
// undefined

// Using class - an error is thrown
const noDice = Dice();
// TypeError: Class constructor Dice cannot be invoked without 'new'

 

//Constructor Property
 /*******************************************
 * Create a const property that returns the 
 * const function it created
 *******************************************/
blueDice.constructor
// [Function: Dice]

/*******************************************
 * Create an new obj using an obj literal
 *******************************************/
const literalObject = {};
// {}
literalObject.constructor
// [Function: Object]

 /********************************************
 * Create another copy of the redDice object,
 * as if the const name was unknown
 *******************************************/
const greenDice = new redDice.constructor(10);
//greenDice instanceOf Dice

// true

 /********************************************
 * Create a method for the class name 'Dice'
 *******************************************/
class Dice {
    constructor(sides=6) {
    this.sides = sides;
    }
    roll() {
    return Math.floor(this.sides * Math.random() + 1)
    }
    static description() {
    return 'A way of choosing random numbers'
    }
}

/********************************************
 * Call  the static method by the class name
 *******************************************/
Dice.description()
// 'A way of choosing random numbers'

/********************************************
 * Get the method of the class instance
 * This cannot be done
 *******************************************/
redDice.description
// TypeError: red.description is not a function



//Prototypal Inheritance
 /********************************************
 * Create a class for creating ninja turtles
 *******************************************/
class Turtle {
    constructor(name) {
    this.name = name;
    this.weapon = 'hands';
    }
    sayHi() {
    return `Hi dude, my name is ${this.name}`;
    }
    attack(){
    return `Feel the power of my ${this.weapon}!`;
    }
}

 /********************************************
 * Create a new turnle instance
 *******************************************/
const leo = new Turtle('Leonardo');
// Turtle { name: 'Leonardo' }

 /********************************************
 *Create a var 'leo' that points to an instance
 of the Turtle class, & has a name property &
 a sayHi() method that references the name 
 property
 *******************************************/
leo.name;
// 'Leonardo'
leo.sayHi();
// 'Hi dude, my name is Leonardo'


//Prototype Property
 /********************************************
  Return an obj from a prototype property of a
   class and/or const func
 *******************************************/
Turtle.prototype;
// Turtle {}

 /********************************************
 * Add new properties to the prototype if it's
 * an obj
 *******************************************/
Turtle.prototype.weapon = 'Hands';
// 'Hands'

 /********************************************
 * Add new methods to the prototype if it's
 * an obj
 *******************************************/
Turtle.prototype.attack = function(){
    return `Feel the power of my ${this.weapon}!`;
    }
// [Function]

 /********************************************************
 * Create a new Turtle instance that it inherits the weapon
property and attack() method from the Turtle.prototype obj, 
as well as receives the name property and sayHi() method 
from the class declaration
 *******************************************/
const raph = new Turtle('Raphael');
raph.name
// 'Raphael'
raph.sayHi()
// 'Hi dude, my name is Raphael'
raph.weapon
// 'Hands'
raph.attack()
// 'Feel the power of my Hands!'


//Finding Out the Prototype
/********************************************
 *Find the prototype via the const func
 property prototype OKAY PRACTICE
 *******************************************/
raph.constructor.prototype;
// Turtle { attack: [Function], weapon: 'Hands' }

/********************************************
 * Locate the prototype by using the 
 * Object.getPrototypeOf() method taking the
 * obj as a parameter. BEST PRACTICE
 *******************************************/
Object.getPrototypeOf(raph);
// Turtle { attack: [Function], weapon: 'Hands' }

/***********************************
 * Locate the prototype by using the 
 * __proto__property(dunder proto)
 **********************************/

 /********************************************
 * Call  the static method by the class name
 * DEPRECATED
 *******************************************/
raph.__proto__
// Turtle { attack: [Function], weapon: 'Hands' }

 /********************************************
 * Call  the static method by the class name
 *******************************************/

 /********************************************
 * Call  the static method by the class name
 *******************************************/

 /********************************************
 * Call  the static method by the class name
 *******************************************/

 /********************************************
 * Call  the static method by the class name
 *******************************************/

 /********************************************
 * Call  the static method by the class name
 *******************************************/

 /********************************************
 * Call  the static method by the class name
 *******************************************/

 /********************************************
 * Call  the static method by the class name
 *******************************************/

 /********************************************
 * Call  the static method by the class name
 *******************************************/
