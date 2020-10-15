/*Chp 10 Debugging & Errors*/
'use strict';

/*********************************************
 * try to assign a value to a variable that is
 * undeclared in strict mode, you’ll get an 
 * exception, instead of a warning
 * ******************************************/
'use strict';
e = 2.718;
// ReferenceError: e is not defined


/********************************************
 * You can even use strict mode on a per-function 
 * basis by adding the line inside a function. 
********************************************/
(function() {
    'use strict';
    // All your code would go inside this function
    // Strict mode will then only be applied to anything 
    // inside that function
    }());


 /********************************************
 * Call the unicorn method
 * throws an 'EXCEPTION' error
 * ******************************************/          
unicorn();
// ReferenceError: unicorn is not defined (nonexistent)


/*********************************************
 *Use a /STACK TRACE' error to determine where
 *the  error originated
 *******************************************/ 
function three(){ unicorn(); }
function two(){ three(); }
function one(){ two(); }
one();
// index.html:13 Uncaught ReferenceError: unicorn is not defined (does not exist & causes the error)
// Func invokes the function two-->
// Func invokes the function three-->
// Func invokes the unicorn function that doesn't exist & causes the error-->
// at index.html:24`


/********************************************
 * Assigns value to a var that's undeclared
 * to cause a 'WARNING' error
 *******************************************/           
pi = 3.142;
// JavaScript Warning: assignment to undeclared variable


/********************************************
 * wrap any method calls inside the following 
 * if block to insure that no error occurs if
 * the browser doesn't support the method
 *******************************************/  
if (window.holoDeck) {
    virtualReality.activate();
    }
// ensures that no error occurs if the browser doesn’t
// support the method,



//Trusty Alert-Ex. only. This use is discouraged for debugging
/*************************************************************
// Validate if the age enter is less than 12 is old enough
*************************************************************/
function amIOldEnough(age){
    if (age = 12) { // Instead of checking if the value of age is equal to 12, we have inadvertently assigned it the value of 12!
        alert(age); //method
        return 'No, sorry.';
    } else if (age < 18) {
        return 'Only if you are accompanied by an adult.';
    } else {
        return 'Yep, come on in!';
    }
}
amIOldEnough(21)
// 'No, sorry.'


//Update the code to the following:
function amIOldEnough(age){
    if (age < 12) {
    alert(age);
    return 'No, sorry.';
    } else if (age < 18) {
    return 'Only if you are accompanied by an adult.';
    }
    else {
    return 'Yep, come on in!';
    }
}
amIOldEnough(21)
// 'Yep, come on in!'


//Using the Console
/**********************************************
 * 
 **********************************************/




'Yep, come on in!'
function amIOldEnough(age){
    console.log(age);
        if (age < 12) {
        console.log(`In the if with ${age}`);
        return 'No, sorry.';
        } else if (age < 18) {
        console.log(`In the else-if with ${age}`);
        return 'Only if you are accompanied by an adult.';
        } else {
        console.log(`In the else with ${age}`);
        return 'Yep, come on in!';
    }
}
function amIOldEnough(age){
    debugger;
    if (age < 12) {
    debugger;
    return 'No, sorry.';
    } else if (age < 18) {
    debugger;
    return 'Only if you are accompanied by an adult.';
    } else {
    debugger;
    return 'Yep, come on in!';
    }
}
amIOldEnough(16);

/**************************************************
//Remember to remove any references to the debugger 
command before shipping any code, otherwise the 
program will appear to freeze when people try to use
it!
***************************************************/
const error = new TypeError('You need to use numbers in this function');

/*******************
//Write an error obj
*******************/
throw new Error('Something has gone badly wrong!');


/***********************************************
 *  Write a function using the Math.sqrt() method 
 * and throw an error exception in the equation.
***********************************************/
function squareRoot(number) {
    'use strict';
    if (number < 0) {
        throw new RangeError('You cannot find the square root of negative numbers')
    }
    return Math.sqrt(number);
};
squareRoot(121);
11
squareRoot(-1);


/****************************************************
 Write a function use the  squareRoot() function and
 throw a try catch block thatcontains an error obj 
 that's passes a parameter in the catch block, and 
 returns a string
 ***************************************************/
// of an imaginary  number
function imaginarySquareRoot(number) {
    'use strict';
    try {
        return String(squareRoot(number));
    } catch(error) {
        return squareRoot(-number)+'i';
    }
}
imaginarySquareRoot(-49) // no error message shown
'7i'

/**************************************************
* Write a finally block that  modify the 
* imaginarySquareRoot() function so that it 
* adds "+ or -" to the answer before returning it.
***************************************************/
function imaginarySquareRoot(number) {
    'use strict';
    let answer;
    try {
        answer = String(squareRoot(number));
    } catch(error) {
        answer = squareRoot(-number)+"i";
    } finally {
        return `+ or - ${answer}`;
    }
}

/************************************************************
* Test the itSquareRoot function to return the correct answer
************************************************************/
function itSquareRoots4() {
    return squareRoot(4) === 2;
}

