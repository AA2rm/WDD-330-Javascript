/************************
//Create an object method
*************************/
let user = {
    name: "Renee",
    phone: 725 - 555 - 5555,
    id: 1234,
    level: 1,
    department: networkEngineer
};


/**********************************
//Create a method/function property
**********************************/
user.userName = function () { //notice the '.' unlike the ex. below
    alert("Tech=4me2");
};

//OR
//Create a pre-declared function as a method
//1. first, declare
function userName() {
    alert("Tech=4me2");
};

//2. then add as a method
//user is the obj & userName is the method, but together they are the property of the function (user.userName)
user.userName = userName;

/***********************************
//Create a shorthand function object
************************************/
user = {
    userName: function () {
        alert("Tech=4me2");
    }
};

//This is the shorthand method
user = {
    userName() { // same as "sayHi: function()"
        alert("Tech=4me2");
    }
};

/*******************************************
//Use the 'this' to call/retrieve the method
*******************************************/
let user = {
    name: "Renee",
    phone: 725 - 555 - 5555,
    id: 1234,
    level: 1,
    department: networkEngineer,

    userName() {
        // "this" is the "current object" & is the value of 'this'
        alert(this.name);
    }

};

user.userName(); // Renee

/**************************************************************
//Retrieve the method by way of the outer var (NOT RECOMMENDED)
**************************************************************/
let user = {
    name: "Renee",
    name: "Renee",
    phone: 725 - 555 - 5555,
    id: 1234,
    level: 1,
    department: networkEngineer,

    userName() {
        alert(user.name); // "user" instead of "this"
    }
};

/********************************************************
Assign two different objs to 'this" & to call the method
********************************************************/
let user = {
    name: "Renee"
};
let admin = {
    name: "Admin"
};

function userName() {
    alert(this.name);
}

// use the same function in two objects
user.f = userName;
admin.f = userName;

// these calls have different this
// "this" inside the function is the object "before the dot"
user.f(); // John  (this == user)
admin.f(); // Admin  (this == admin)

admin['f'](); // Admin (dot or square brackets access the method – doesn't matter)


/*******************************************
Call a function w/o an obj so that it is 
undefined(strictmode)
*******************************************/
function userName() {
    alert(this);
}

userName; // undefined

/*******************************************
Use an arrow function to call an obj from 
the outter method
*******************************************/
let user = {
    firstName: "Renee",
    userName() {
        let arrow = () => alert(this.firstName);
        arrow();
    }
};

user.userName(); // Renee

/******************************************
 * Return an obj by accessing its ref
 * ***************************************/
function makeUser() {
    return {
        name: "Renee",
        ref: this
    };
}

let user = makeUser();

alert(user.ref.name); // What's the result?

/*Ans: the obj is only referenced when it is called 
 *and does not reference what's in the obj. called 'this'
 *therefore, it returns an error of undefined
 */

/*********************************************
 * Create an obj 'calculator' with 3 methods
 **********************************************/


describe("calculator", function () {

    context("when 2 and 3 entered", function () {
        beforeEach(function () {
            sinon.stub(window, "prompt");

            prompt.onCall(0).returns("2");
            prompt.onCall(1).returns("3");

            calculator.read();
        });

        afterEach(function () {
            prompt.restore();
        });

        it("the sum is 5", function () {
            assert.equal(calculator.sum(), 5);
        });

        it("the multiplication product is 6", function () {
            assert.equal(calculator.mul(), 6);
        });
    });

});

/************  
//Ex: Syntax
************/
function doSomething(event) {
    console.log('event.type');
}
addEventListener('click', doSomething);

/******************************************
//Find the position of the last event click
*******************************************/
function doSomething(event) {
    console.log(`screen: (${event.screenX},${event.screenY}), page: (${event.pageX},${event.pageY}), client: (${event.screenX},${event.screenY})`)
}


/***********************************************
//Add a click event for a move up and down click
***********************************************/
const clickParagraph = document.getElementById('click');
clickParagraph.addEventListener('click', () => console.log('click'));
clickParagraph.addEventListener('mousedown', () => console.log('down'));
clickParagraph.addEventListener('mouseup', () => console.log('up'));

/*************************************
 Add a doubleclick event to the page
 ************************************/
const dblclickParagraph = document.getElementById('dblclick');
dblclickParagraph.addEventListener('dblclick', highlight);

function highlight(event) {
    event.target.classList.toggle('highlight');
}

/**********************
//Remove the last event
**********************/
const onceParagraph = document.getElementById('once');
onceParagraph.addEventListener('click', remove);

function remove(event) {
    console.log('Enjoy this while it lasts!');
    onceParagraph.style.backgroundColor = 'pink';
    onceParagraph.removeEventListener('click', remove);
}

/******************************************
//Add a default event listener to the event
******************************************/
const brokenLink = document.getElementById('broken');
brokenLink.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('Broken Link!');
});

/*******************
//Add a bubble event
*******************/
ulElement = document.getElementById('list');
liElement = document.querySelector('#list li');
ulElement.addEventListener('click', (event) =>
    console.log('Clicked on ul'));
liElement.addEventListener('click', (event) =>
    console.log('Clicked on li'));

/**********************
//Add a capturing event
**********************/
ulElement.addEventListener('click', (event) =>
    console.log('Clicked on ul'), true);
liElement.addEventListener('click', (event) =>
    console.log('Clicked on li'), true);

/*******************************
//Add a bubble and capture event
*******************************/
// capturing
ulElement.addEventListener('click', (event) =>
    console.log('Clicked on ul'), true);
liElement.addEventListener('click', (event) =>
    console.log('Clicked on li'), true);
// bubbling
ulElement.addEventListener('click', (event) =>
    console.log('Clicked on ul'), false);
liElement.addEventListener('click', (event) =>
    console.log('Clicked on li'), false);

/*******************************************
//Write and event that stop the bubble event
*******************************************/
liElement.addEventListener('click', (event) => {
    console.log('clicked on li');
    event.stopPropagation();
}, false);


/********************************************
// Attach an event delegation to the parent 
element on the page
*********************************************/
ulElement.addEventListener('click', highlight);


/**********************************************
//Create a structure list of links that has 
a label & URL of the pg that opens when clicked
**********************************************/
const links = [{
    label: "Week1 notes",
    url: "wk1/index.html"
}]