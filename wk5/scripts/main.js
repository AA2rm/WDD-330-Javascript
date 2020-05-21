
//Ex: Validate if the age enter is less than 12 is old engouh.(lines 1-12)<br>
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
//Now it will work as expected.
amIOldEnough(21)

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

//Remember to remove any references to the debugger command before shipping any code, otherwise the program will appear to freeze when people try to use it!
const error = new TypeError('You need to use numbers in this function');

//Write an error obj
throw new Error('Something has gone badly wrong!');

// Write a function using the Math.sqrt() method and throw an error exception in the equation.
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

//Write a function use the  squareRoot() function and throw a try catch block that 
//contains an error obj that's passes a parameter in the catch block, and returns a string
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

// Write a finally block that  modify the imaginarySquareRoot() function so that it 
//adds "+ or -" to the answer before returning it.
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

// Test the itSquareRoot function to return the correct answer
function itSquareRoots4() {
    return squareRoot(4) === 2;
}

//