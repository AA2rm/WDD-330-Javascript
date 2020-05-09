//WEEK 1

/* Create a function that links the navigation and menu items*/
function toggleMenu() {
    document.querySelector('#navigation').classList.toggle('open');
}
/* Call the function & medthod linking it to the function abv.*/
document.querySelector('#menu').addEventListener('click', toggleMenu);


//LOCAL STORAGE EX
/*How to use getItem()*/
window.localStorage.getItem('user');
/*Using removeItem()*/
window.localStorage.removeItem('name');
/*Using the key()method*/
var KeyName = window.localStorage.key(index);
/*Retrieving data from Windows storage*/
// Check browser support
if (typeof(Storage) !== "undefined") {
    // Store
    localStorage.setItem("lastname", "Smith");
    // Retrieve
    document.getElementById("result").innerHTML = localStorage.getItem("lastname");
  } else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
  }


  //WEEK 2
  for (let i = 1; j < 13; i++) {
    for (let i = 1; j < 13; j++) {
        console.log(`${j} multiplied by ${i} is ${i*j}`);
    }
}
//    The outer loop counts up from i=1 to i=12 . For every iteration 
//of the outer loop, the inner loop counts up from j=1 to j=12 . 
//This means that it starts in the first iteration with i = 1 and j = 1 , 
//producing the following output that is logged to the console:


//WEEK 3
//Team Assignment: Cardio 1

const inventors = [{
  first: 'Albert',
  last: 'Einstein',
  year: 1879,
  passed: 1955
},
{
  first: 'Isaac',
  last: 'Newton',
  year: 1643,
  passed: 1727
},
{
  first: 'Galileo',
  last: 'Galilei',
  year: 1564,
  passed: 1642
},
{
  first: 'Marie',
  last: 'Curie',
  year: 1867,
  passed: 1934
},
{
  first: 'Johannes',
  last: 'Kepler',
  year: 1571,
  passed: 1630
},
{
  first: 'Nicolaus',
  last: 'Copernicus',
  year: 1473,
  passed: 1543
},
{
  first: 'Max',
  last: 'Planck',
  year: 1858,
  passed: 1947
},
{
  first: 'Katherine',
  last: 'Blodgett',
  year: 1898,
  passed: 1979
},
{
  first: 'Ada',
  last: 'Lovelace',
  year: 1815,
  passed: 1852
},
{
  first: 'Sarah E.',
  last: 'Goode',
  year: 1855,
  passed: 1905
},
{
  first: 'Lise',
  last: 'Meitner',
  year: 1878,
  passed: 1968
},
{
  first: 'Hanna',
  last: 'Hammarström',
  year: 1829,
  passed: 1909
}
];

const people = [
'Beck, Glenn',
'Becker, Carl',
'Beckett, Samuel',
'Beddoes, Mick',
'Beecher, Henry',
'Beethoven, Ludwig',
'Begin, Menachem',
'Belloc, Hilaire',
'Bellow, Saul',
'Benchley, Robert',
'Benenson, Peter',
'Ben-Gurion, David',
'Benjamin, Walter',
'Benn, Tony',
'Bennington, Chester',
'Benson, Leana',
'Bent, Silas',
'Bentsen, Lloyd',
'Berger, Ric',
'Bergman, Ingmar',
'Berio, Luciano',
'Berle, Milton',
'Berlin, Irving',
'Berne, Eric',
'Bernhard, Sandra',
'Berra, Yogi',
'Berry, Halle',
'Berry, Wendell',
'Bethea, Erin',
'Bevan, Aneurin',
'Bevel, Ken',
'Biden, Joseph',
'Bierce, Ambrose',
'Biko, Steve',
'Billings, Josh',
'Biondo, Frank',
'Birrell, Augustine',
'Black, Elk',
'Blair, Robert',
'Blair, Tony',
'Blake, William'
];

//Cardio 2





//Reading Ex: Rainbow
//Create a var
const btn = document.getElementById('button');//document.getElementById locates the HTML ID & assigns a var. This assigns the var to 
const rainbow = ['red','orange','yellow','green','blue','rebeccapurple','violet'];//Strings are assigned to the var rainbow
function change() {   //create a function called change & sets the background color of the body element   
    document.body.style.background = rainbow[Math.floor(7*Math.random())];//Select a random number using the Math obj & apply to the rainbow array
}
btn.addEventListener('click', change);//create an envent handler to check when the button is used.

//Reading Ex: Superheros
const body = document.body;// assign the body element a var
typeof body;//reference the body element to get information on the element
"object";

body.nodeType;//this property tells us what type of note it is.

body.nodeName;//get the name of the element
"BODY"
 1

 document.image[0]//returns images in the node list
 
 length//property is used to iterate through element
 for (let i=0 ; i < document.images.length ; i++) {
  // do something with each image using document.images[i]
  }

  const imageArray = Array.from(document.images);//turns a node list into an aray
  //or
  const imageArray = [...document.images];

  //Get an element by it's id
  const h1 = document.getElementById('title');

  //Get element by its tag name
  const listItems = document.getElementsByTagName('li');

  //Write a node list notation to locate ea. individual paragraph
  listItems[0];
  <li class='hero'>Superman</li>
listItems[1];
  <li class='vigilante hero' id='bats'>Batman</li>
listItems[2];
   <li class='hero'>Wonder Woman</li>


  //Get elemnt by its class name
  const heroes = document.getElementsByClassName('hero');


  //Write a query to locate the word bats
  document.querySelector('#bats');
  <li class="vigilante hero" id="bats">Batman</li>

  //Call the #roster from the <ul>
  const ul = document.querySelector('ul#roster');


//Write a function that adds and extra class to an element using an addClass
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

const aquaman = createElement('li','Aquaman');

//Insert a new element before the wonderWoman element in your html
heroes.insertBefore(aquaman,wonderWoman);

//Event Listeners
//Change the content of the <h1> tag of the title page.
const h1 = document.getElementById('title');
const oldText = h1.firstChild;
const newText = document.createTextNode('Justice League of America');
h1.replaceChild(newText,oldText);

//Add an event lister to the document that activates when the user clicks the page
document.body.addEventListener("click", doSomething);

//Create an inline event handler  to activate the document when the user clicks the page.
document.onclick = function (){ console.log('You clicked on the page!'); }

//Creast an addEventListener() to call a node
document.body.addEventListener('click',doSomething);

//Add a click event listener to the page w/o using a node reference
//Then declare a name function & reference it in the event listener
addEventListener('click', () => alert('You Clicked!'));
function doSomething() {
  alert('You Clicked!');
  }
  addEventListener('click',doSomething);