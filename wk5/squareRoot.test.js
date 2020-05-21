//Create a squareRoot function that contains negative numbers
function squareRoot(number) {
    'use strict';
    if (number < 0) {
        throw new RangeError("You can't find the square root of negative numbers")
    }
    return Math.sqrt(number);
};
//Create a test function that has a string to be tested, implements an anonymous function expect(),
//and test the function as an argument, and returns an expectation object, & implements the 'matchers'
//methods tobe()
test('square root of 4 is 2', () => {
expect(squareRoot(4)).toBe(2);
});//test to see if the value returned by squareRoot() function is the  same
//value provided in the 2nd argument
//jest -c {}
