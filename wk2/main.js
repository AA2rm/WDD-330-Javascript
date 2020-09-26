//WEEK 2
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