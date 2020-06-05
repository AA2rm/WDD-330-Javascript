//Use a call() to set the value of 'this' inside a function
function sayHello(){
    return `Hello, my name is ${ this.name }`;//this is the argument
}

//Use the call() method to invoke the hello function  &  provide an argument for ea. obj
const clark = { name: 'Clark' };//provide arguments for name prperty
const bruce = { name: 'Bruce' };
sayHello.call(clark);//call method invokes the hello function
'Hello, my name is Clarke'
sayHello.call(bruce);
'Hello, my name is Bruce'

//Provide a call() using a null
square.call(null, 4)
16

//Use the apply method  providing an argument for the function 
quare.apply(null, [4])
16

//Write a square function to save each result in a casche obj that's a property of te function.
function square(x){
    square.cache = square.cache || {};
    if (!square.cache[x]) {
        square.cache[x] = x*x;
    }
    return square.cache[x]
}

//Invoke a function expression immediately
(function(){
    const temp = 'World';
    console.log(`Hello ${temp}`);
    })();
    'Hello World'

//Write a welcome message to the console, then eliminates all the temporary variables used in th message 
(function() {
    const name = 'Peter Parker'; // This might be obtained from a cookie in reality
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday', 'Friday','Saturday'];
    const date = new Date(),today = days[date.getDay()];
    console.log(`Welcome back ${name}. Today is ${today}`);
})();
'Welcome back Peter Parker. Today is Tuesday'

//BEST PRACTICE: Write a welcome message to the console, then eliminates all the temporary variables used in th message {
    const name = 'Peter Parker'; // This might be obtained from a cookie in reality
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday', 'Friday','Saturday'];
    const date = new Date(),today = days[date.getDay()];
    console.log(`Welcome back ${name}. Today is ${today}`);

'Welcome back Peter Parker. Today is Tuesday'

//Add strict mode to a function
(function() {
    'use strict';
// All your code would go inside this function
})();

//Add strict mode to a code block
(function() {
    // block A
    const name = 'Block A';
    console.log(`Hello from ${name}`);
    }());
    (function() {
    // block B
    const name = 'Block B';
    console.log(`Hello from ${name}`);
}());

// Write a loadGame() function as an async function
async function loadGame(userName) {
    //use a try block to catch errors
    try {
        const user = await login(userName);//assign the var user
        const info = await getPlayerInfo (user.id);//
        // load the game using the returned info
    }
    catch (error){
        throw error;
    }
}

//Write  a function to return a random integer btn 2 values that are arguments
function random(a,b=1) { //implement logic in the function
    // if only 1 argument is provided, we need to swap the values of a and b
    if (b === 1) {
        [a,b] = [b,a];
    } 
    return Math.floor((b-a+1) * Math.random()) + a;
}
random(6);
4
random(10,20);
13
// Refactor the function to be more generic
function random(a,b,callback) {
    if (b === undefined) b = a, a = 1; // if only one argument is supplied, assume the lower limit is 1
        const result = Math.floor((b-a+1) * Math.random()) + a
    if(callback) {
        result = callback(result);
    }
    return result;
}
//Implement a random square number from 1 to 100
function square(n) {
    return n*n;
}
random(1,10,square);
49
//Implemnet a randome even number from 2 to 10
random(1,5, (n) => 2 * n );
8

// Write a function to return another function
function returnHello() {
    console.log('returnHello() called');
    return function() {
        console.log('Hello World!');
    }
}

//Invoke the returnHello function to return a function after the message log
returnHello()
returnHello() //called

//Assign a var to the console log returned function
const hello = returnHello();
returnHello() //called

//Write a var inside the scope and outside of the scope
const outside = 'In the global scope';
function fn() {
    const inside = 'In the function scope';
}
outside
'In the global scope'
inside
ReferenceError://unaable to access var insideo outside of; is not defined
//Create a closure function inside of the inner function
function outer() {
    const outside = 'Outside!';
    function inner() {
        const inside = 'Inside!';//inner() function, however, has access to the variable inside , declared in its scope, but also the variable outside , declared outside its scope.
        console.log(outside);
        console.log(inside);
    }
    console.log(outside);
    inner();
}

// Assign a var to the return value of the outer() function, so it points to the inner function
const closure = outer();
//Invoke the 'outside' function to give access to the outer function to the 'inner' function.
outer()
//Outside!
//Inside!
//Outside!

//Define a generator function
function* exampleGenerator() {
    // code for the generator goes here to return an obj
}
//Call the generator function to return an object that can be iterated  to rturn a value each time the next method is called.
function* fibonacci(a,b) {
    let [ prev,current ] = [ a,b ];//initialize  the values
    while(true) {
        [prev, current] = [current, prev + current];//loop through
        yield current;//the yield keyword returns a value that's memorized
    }
}

//Assign a var to the function and the arguments
const sequence = fibonacci(1,1);


//Write a sript that returns the arugment in reverse
function reverse(string) {
    return string.split('').reverse().join('');
}
//Return antoher string that returns the argument in reverse
//that's an example of a non-destructive data transformation
const message = 'Hello JavaScript';
reverse(message);
'tpircSavaJ olleH'
message // hasn't changed
'Hello JavaScript'