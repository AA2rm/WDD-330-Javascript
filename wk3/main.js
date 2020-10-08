
//CREATING METHODS
/************************
//Create an object method
*************************/
let user1 = {
    name: "Renee",
    phone: 725 - 555 - 5555,
    id: 1234,
    level: 1,
    department: networkEngineer
};


/**********************************
//Create a method/function property
**********************************/
user1.userName = function () { //notice the '.' unlike the ex. below
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
user1.userName = userName;

/***********************************
//Create a shorthand function object
************************************/
user1 = {
    userName: function () {
        alert("Tech=4me2");
    }
};

//This is the shorthand method
user1 = {
    userName() { // same as "sayHi: function()"
        alert("Tech=4me2");
    }
};

/*******************************************
//Use the 'this' to call/retrieve the method
*******************************************/
let user1 = {
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

user1.userName(); // Renee

/**************************************************************
//Retrieve the method by way of the outer var (NOT RECOMMENDED)
**************************************************************/
let user1 = {
    name: "Renee",
    name: "Renee",
    phone: 725 - 555 - 5555,
    id: 1234,
    level: 1,
    department: networkEngineer,

    userName() {
        alert(user1.name); // "user" instead of "this"
    }
};

/********************************************************
Assign two different objs to 'this" & to call the method
********************************************************/
let user1 = {
    name: "Renee"
};
let admin = {
    name: "Admin"
};

function userName() {
    alert(this.name);
}

// use the same function in two objects
user1.f = userName;
admin.f = userName;

// these calls have different this
// "this" inside the function is the object "before the dot"
user1.f(); // John  (this == user)
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
let user1 = {
    firstName: "Renee",
    userName() {
        let arrow = () => alert(this.firstName);
        arrow();
    }
};

user1.userName(); // Renee

/******************************************
 * Return an obj by accessing its ref
 * ***************************************/
function makeUser() {
    return {
        name: "Renee",
        ref: this
    };
}

let user1 = makeUser();

alert(user1.ref.name); // What's the result?

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



//NODS


//Getting Elements
/********************************************************
 Retrieve the body element & assign it to the  var's body
 *******************************************************/
const body = document.body;

typeof body;//checks the body's element (obj)


/*************************************************
 Using a nodType determine what type of node it is
 ************************************************/
body.nodeType;

/*********************************************************
 use the nodeName property to find the name of the element
 ********************************************************/
body.nodeName;//element's name is returned in uppercase letters



//Length Properties & Turning Length Properties in Array
/***********************************************
 Determine the length property  of the node list
 **********************************************/
for (let i=0 ; i < document.images.length ; i++) {
// do something with each image using document.images[i]
}


/*****************************
Turn a node list into an array
*****************************/
const imageArray = Array.from(document.images);


/***********************************
Use a spread operator in a node list
***********************************/
const imageArray = [...document.images];



//Getting An Element By Its Id
/***********************************
Get an element by its id
***********************************/
const h1 = document.getElementById('title');//Every id attribute should be unique to just one element



//Getting An Element By Its Tag Name
/***********************************
Get an element by its tag name
***********************************/
const listItems = document.getElementsByTagName('li');


/**********************************************
Get the index notation to find ea individual ph
**********************************************/
listItems[0];
//Gets from HTML: <li class='hero'>Superman</li>
listItems[1];
//Gets from HTML: <li class='vigilante hero'
//id='bats'>Batman</li>
listItems[2];
//Gets from HTML: <li class='hero'>Wonder Woman</li>


//Get Elements By Class Name
/*****************************************
 Return a live node list of element that 
 have a class name from the argument
*****************************************/
const heroes = document.getElementsByClassName('hero');

/*****************************************
Query the lenth propert of the class name
*****************************************/
heroes.length;//if there are no elements with the given class will have a length of 0:



//Query Selectors
/*****************************************
Use a query selector locate the first 
element in the doc that matches the CSS 
selector in the arg
*****************************************/
document.querySelector('#bats');
//Gets from HTML: <li class="vigilante hero" id="bats">Batman</li>


/*****************************************
Use a query selector 'all' locate the list
elems in the doc that matches the CSS 
selector in the arg
*****************************************/
document.querySelectorAll('.hero');

/***********************************************
Use a CSS pseudo-selecto to return the last list 
item in the document
************************************************/
const wonderWoman = document.querySelector('li:last-child');

/***********************************************
Use the querySelector method to call any element,
othen than just document
***********************************************/
const ul = document.querySelector('ul#roster');

/***********************************************
Use the querySelector method tofind a <li> 
element w/ an id of 'bats'
***********************************************/
const batman = ul.querySelector('li#bats')

//OR
const ul = document.querySelector('ul#roster');
ul.querySelector('li#bats')



//Navigating the DOM Tree
/***********************************************
Use a childNode property to return all child
nodes of the element w/ an id attribute of roster
***********************************************/
const heroes = document.getElementById('roster');
heroes.childNodes
//Gets from HTML: NodeList [#text "
// ", <li class="hero">, #text "
// ", <li id="bats">, #text "
// ", <li class="hero">, #text "
// ", <li class="hero">, #text "

/***********************************************
Use a children property to rturn any element 
node that are children of that 'node'
***********************************************/
heroes.children // this will only contain list items
heroes.childNodes
//Gets from HTML:  HTMLCollection [<li class="hero">, <li id="bats">, <li class="hero">, <li class="hero">] (4)
heroes.children.length

//Becareful: they both can generate
//whitespace characters that's btn tags
/**********************************
Use a firstChild property to return 
the first child of a node
***********************************/
heroes.firstChild
// #text " "

/*********************************
Use a lastChild property to return 
the first child of a node
*********************************/
heroes.lastChild
// #text " "

/*********************************
Use a parentNode to return the 
parent node of an element
*********************************/
const wonderWoman = document.querySelector('ul#roster li:last-child');
wonderWoman.parentNode
// Gets from HTML: <ul id='roster'>…</ul>

/*********************************
Use a nextSibling prperty to return 
the  next adjent node of the same 
parent
*********************************/
wonderWoman.nextSibling
// #text " "

/************************************
Use a previouSibling prperty to return 
the previous adjencent node
************************************/
wonderWoman.previousSibling
// #text " "

/************************************
Get the text w/in an element of a 
text node of the firstChild
************************************/
const textNode = wonderWoman.firstChild;
// "Wonder Woman"

/************************************
Find the text contained inside it
using the nodeValue method:
************************************/
textNode.nodeValue;
// "Wonder Woman"

/*********************************************
Find this value using the textContent property
**********************************************/
wonderWoman.textContent
// "Wonder Woman"


//Getting & Setting Attributes
/*********************************************
Use the getAttribute() method to return the 
attribute in the arg
**********************************************/
wonderWoman.getAttribute('class');//If there's no given attribute it returns null
// "hero"

/*********************************************
Use the setAttribute() method to change the 
class of the element variable to 'villian'
**********************************************/
wonderWoman.setAttribute('class', 'villain'); //1st arg value you want to change 'class'; 2nd arg new value 'villian'
// undefined
wonderWoman.getAttribute('class');
// "villain"


/*********************************************
Use the setAttribute() method to set the 
id to amazon
**********************************************/
wonderWoman.setAttribute('id','amazon');
wonderWoman.getAttribute('id');
// 'amazon'

/*********************************************
Get the attribute using a dot notation
**********************************************/
wonderWoman.id;
// 'amazon'


/***********************************************
Reference the wonderWoman var to see the changes
************************************************/
wonderWoman
//Gets from HTML: <li class="villain" id="amazon">Wonder ➥ Woman</li>


//Classes of an element
/***********************************
Get the value of the class attribute
***********************************/
wonderWoman.className;
// "villain"

/****************************
Change the class back to hero
****************************/
wonderWoman.className = 'hero'
// "hero"

/***********************************
Add a class to the element w/o 
overwriting any existing classes
***********************************/
wonderWoman.classList.add('warrior');

/***********************************************
Check  if the new class was added to the element
***********************************************/
wonderWoman.className;
// "hero warrior"

/********************************************
Use the remove method to remove a specific class
from an element
*********************************************/
wonderWoman.classList.remove('warrior');


/********************************************
Use a toggle to  add a class  if the element
doesn't have it and remove a class if it does
*********************************************/
wonderWoman.classList.toggle('hero'); // will remove the 'hero' class
// false
wonderWoman.classList.toggle('hero'); // will add the 'hero' class back
// true

//classList is on available in internet Eplorer 10 & up
/****************************
Check to see if the element
has a particular class
****************************/
wonderWoman.classList.contains('hero');
// true
wonderWoman.classList.contains('villain');
// false

/*******************************************
Use an addClass function and add a new class
name to the paramenter using an if block that
checks the value of the element's & if it's 
true or false
********************************************/
function addClass(element,newClass){
    if (element.className) {
    element.className = element.className + ' ' + newClass;
    } else {
    element.className = newClass;
    }
    return element.className;
}

/************************************************
Test if the new class was added to the hero class
************************************************/
addClass(wonderWoman,'warrior');
// "hero warrior"


//Creating Dynamic Markup

/*The prc to create a new element with text content is:
* 1. Create the element node
* 2. Create the text node
* 3. Append the text node to the element node
*/
/*************************************************
1. Use a createElement() method element node creates
a new list item as a DOM fragment in memory
*************************************************/
const flash = document.createElement('li');

/****************************************************
 2. Using document.createTextNode() create a text node 
 to place in the new element create above
*****************************************************/
const flashText = document.createTextNode('Flash');

/************************************************
Test if the new class was added to the hero class
************************************************/

//Append/Link Nodes
/*******************************************************
3. Use an appendChild()method will take the newly created
text node to be the child note of the list element node
*******************************************************/
flash.appendChild(flashText);



//Functions To Create Elements
//NOTE: An easier way to create a new element w/ text is
/************************************************
Test if the new class was added to the hero class
************************************************/
const flash = document.createElement('li');
flash.textContent = 'Flash';

/********************************************************
Use a func to create the new element & return the element
********************************************************/
function createElement (tag,text) {
    const el = document.createElement(tag);
    el.textContent = text;
    return el
}

/******************************************
Create another new  of a list item  element
******************************************/
const aquaman = createElement('li','Aquaman');

/******************************************
Using an insertBefore() to insert the aquaman 
element before the wonderWoman element
*******************************************/
heroes.insertBefore(aquaman,wonderWoman);


/************************************************
Using an  appendChild () method to move its
position to appear at the end of the <ul> element
************************************************/
heroes.appendChild(wonderWoman);



//Remove Elements From a Page
/********************************************************
Using the removeChild() method remove the aquaman element
********************************************************/
heroes.removeChild(aquaman);
// <li>Aquaman</li>


/****************************************
Add the aquaman element by referencing it
*****************************************/
heroes.appendChild(aquaman);



//Replacing Element on a Page
/************************************************
Using a replaceChild() method change the content
of the <h1> tag that makes the title of the page
************************************************/
const h1 = document.getElementById('title');
const oldText = h1.firstChild;
const newText = document.createTextNode('Justice League of America');
h1.replaceChild(newText,oldText);

/************************************************
Use an innerHTML element property to seel all the
HTML inside of the <ul> element of the roster
************************************************/
heroes.innerHTML
/*"
<li class=\"hero\">Superman</li>
<li class=\"vigilante hero\" id=\"bats\">Batman</li>
<li class=\"hero\">Wonder Woman</li> 
*"/

/************************************************
Using an innerHTML property change the heading 
text using one line
************************************************/
h1.innerHTML = 'Suicide Squad';

/************************************************
Using an innerHTML property change everything 
that's contained w/in the <ul> element
************************************************/
heroes.innerHTML = 
'<li>Harley Quinn</li><li>Deadshot</li><li>Killer Croc</li><li>Enchantress</li><li>Captain Boomerang</li><li>Katana</li><li>Slipknot</li>';



//Live Collections
/***************************************************
Use an document.getElementById() method to reflect
the changes of the class 'heroes' added that updates 
automatically w/o calling again to the method
***************************************************/
const heroes = document.getElementById('roster');
const list = heroes.children;
list.length
// 3

/************************************************
Use an document.getElementById() methodto remove 
the batman element
************************************************/
const batman = document.getElementById('bats');
// undefined
heroes.removeChild(batman);
list.length;
// 2



///Updating CSS
/************************************************
Use an document.getElementById() method to add a
red border to the superman element
************************************************/
const heroes = document.getElementById('roster');
const superman = heroes.children[0];
superman.style.border = "red 2px solid";
// "red 2px solid"


/********************************************
Use the backgroundColor property to change the 
color of the superman background to green
********************************************/
superman.style.backgroundColor = 'blue';
// "blue"

/************************************************
Use the backgroundColor property to add a string
w/o camel case
************************************************/
superman.style['background color'] = 'blue';
// "blue"


//Disappearing Act
/**************************************************
Use a display property to hide the superman element
**************************************************/
superman.style.display = 'none';
// "none"

/************************************************
Use a display property to make the superman element
reappear changing the property back to block
************************************************/
superman.style.display = 'block';
// "block"



//Checking Style Properties-Excludes external stylesheets
//NOTE: Cannot use in Chrome; use w/ caution
/************************************************
Use a getComputerStyle() property to get all the
styles applied to the superman element
************************************************/
getComputedStyle(superman);
//Gets from CSS:
// CSSStyleDeclaration 
//{0: "alt",
// 1: "animation-delay",
// 2: "animation-direction", 
//3: "animation-duration",
// 4: "animation-fill-mode", 
//5: "animation-iteration-count", 
//6: "animation-name", 
//7: "animation-play-state", 
//8: "animation-timing-function", 
//9:➥ "background-attachment", …}



//Use w/ caution
/************************************************
Use a getPropertyCSSValue() property to get all the
styles applied to the superman element
************************************************/
getComputedStyle(superman).getPropertyCSSValue('color').cssText;
// "rgb(0, 0, 0)"

/************************************************
Use a style element to add a red border around 
the superman element
************************************************/
superman.style.border('red 2px solid');

//OR
/*************************************************
 BEST PRACTICE 
 1a.Use a classList to add a class to 'highlighted...
**************************************************/
superman.classList.add('highlighted');


//THEN ADD
/************************************************
1b. Add CSS in a separate stylesheet file
************************************************/
/*.highlighted{
    border: red 2px solid;
    }
*/


/************************************************
Use a display property to make
************************************************/