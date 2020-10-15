//WEEK 2
'use strict';
/***********************************
/*Initialize an array literal-array obj
************************************/
const myArray = new Array();//This is an array constructor function
/*OR*/
//Best Practice
const myArray = [];//This is an array literal

/*******************************************************
/*Initialize/Create an empty array literal called heroes
*******************************************************/
const heroes = [];

/******************************************************
/*Determine the value of an element in an array 
*******************************************************/
heroes[0];
heroes[1];
heroes[2];
heroes[3];
heroes[5];
heroes[6];

/*************************
/*Add a value to an array 
**************************/
heroes[0, 1, 2, 3, 4, 5] = 'Wonder Woman', 'Superman', 'Aquaman', 'Flash', 'Green Latern', 'Batman';

/**************************************************************
/*Type the name of the array into the console to see the value/s
**************************************************************/
/*heroes;*/

/*****************************************
/*Create an array literal that's not empty
*****************************************/
const avengers = ['Captain America', 'Iron Man', 'Thor', 'Hulk', 'Hawkeye', 'Black Widow'];

/*******************************************************
/*Create an array literal that's containes mix data type
********************************************************/
const mixedArray = [ null, 1, [], 'two', true ];

const mixedArray2 = ['Dr. Who', equals, 100, '%'];


/*****************************************
/*Remove a value from an array
*****************************************/
delete heroes[6];

/*****************************************
/*Destructuring: Assign multiply values to 
an array at the same time
*****************************************/
const [a, b, c] = ['Andy', 'Brooklyn', 'Chris'];


/*****************************************
/*Destructuring: Swap the values in the 
array
*****************************************/
[a, b, c] = ['Chris', 'Andy', 'Brooklyn'];


/*****************************************
/*Destructuring: Create a reference to the 
Avengers array
*****************************************/


/***********************************
/*Declare an array
************************************/
const title = 'Doctor';
let amount = 50;

/*************************************
*Use the length property to iterate 
through the loop
*************************************/
length
 for (let i=0 ; i < document.images.length ; i++) {
  // do something with each image using document.images[i]
  }

/*************************************
*Declare/Define a function 'literal'
*************************************/
function name(){
    console.log('Renee');
    }


function city(){
    console.log('Clinton Township');
    }
/*************************************
*Declare/Define a function using a 
function 'expression' to assign an 
anonymous function to a var
*************************************/
const goodbye = function(){
    console.log('Goodbye World!');
    };

/*************************************
*Declare  function using a 'constructor'
 NOT RECOMMENDED TO USE
*************************************/  
const bonjour = new Function('console.log("BonjourWorld!");');

const makeModel= new Function('console.log("Honda Civic");');

/*******************************************************
*Invoke a function by name or reference (Run Code inside 
the function's body Keep code DRY (don't repeat)
*******************************************************/  
date();
Ciao();
trees();

/***********************************
/*Return a value from a function
************************************/
function howdy(){
    return 'Howdy World!';
    }
function trees(){
    return 'Maple, Willow, Ever Green';
       }

/***********************************
/*Return a value from a function's 
// arguments()Pg. 157 ?????
************************************/
function square(x) {//x is the parameter
    return x*x;
}
square(8.2);//provide an argument of the number to be squared
 //2.86356421…

function colorMix(red, blue){
    return newColor;
}
colorMix(rgb(255, 128, 128)+ rgb(51, 102, 255));


/***********************************
/*Invoke a parameter w/ no arguments
************************************/
mean(1,2)//not invoked; can't complete operation w/ undefined
//Nan

mean(1, 2, 3, 4, 5);//function invoked finds the mean of 1, 2, & 3 but ignores the rest of the argument
//2

square();//not invoked; no number given to square
//undefine

trees();// not invoked; no tree names given as argument
//undefine
 

/*******************************************
/*Create a function called arguments() that
will return arguments objs to view the values
*******************************************/
//Ex.
function arguments(){
    return arguments;
}


/******************************************************
/*Create an array of arguments() using th rest operator 
to view the values w/in the previously created functions
*******************************************************/
function rest(...args){
    return args;
    }

/*******************************************
/*Invoke a function using called arguments()
*******************************************/
arguments('Ciao', NaN, name, city, square);
arguments(1, 2, 3, 4, 5);


/*******************************************
/*Use a for-of loop to iterate through each
values given in an argument
********************************************/
function rest(...args){
    for(arg of args){
    console.log(arg);
    }
    }
    rest(2,4,6,8);


/*******************************************
/*Use a rest parameter to improve the mean()
function  to accept any number of values
********************************************/
function mean(...values) {
    let total = 0;
    for(const value of values) {
    total += value;
    }
    return total/values.length;
    }
/**************************************************************************
//Write a function that adds an extra class to an element using an addClass
**************************************************************************/
function addClass(element,newClass){
  if (element.className) {
      element.className = element.className + ' ' + newClass;
  } else {
      element.className = newClass;
  }
  return element.className;
}

addClass(wonderWoman,'warrior');
"hero warrior"

//Create a new element with a function
function createElement (tag,text) {
  const el = document.createElement(tag);
  el.textContent = text;
  return el
}