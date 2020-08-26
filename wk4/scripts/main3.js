//NOTES EX
//Form Events
const input = form.elements.searchInput;
input.addEventListener('focus', () => alert('focused'), false);
input.addEventListener('blur', () => alert('blurred'), false);
input.addEventListener('change', () => alert('changed'), false);

//Submit a form
const form = document.forms['search'];
form.addEventListener ('submit', search, false);
function search() {
    alert(' Form Submitted');
}

//Stop a form submission
function search(event) {
    alert('Form Submitted');
    event.preventDefault();
}

//Retrieve data from a form
function search(event) {
    alert(`You Searched for: ${input.value}`);
// input if the defined var
    event.preventDefault();
 }

 //Set the value of the input box
 input.value = 'Search Here';

 //Add a focus to the input field
input.addEventListener('focus', function(){
    if (input.value==='Search Here') {
        input.value = '' 
    }
}, false);

//Add a blur to the input field
input.addEventListener('blur', function(){
    if(input.value === '') {
        input.value = 'Search Here';
    } }, false);

//Change the input filed to a placeholder
<input type='text' name='search-box' placeholder='Search Here'></input>

//Add an autofocus to a form
document.forms.hero.heroName.focus();


//OBJECT ORIENTED PROGRAMMING
//Create an obj using a const func
const Dice = function(sides=6){
    this.sides = sides;//keyword this is the obj that will be returned by the cons func
    this.roll = function() {
        return Math.floor(this.sides * Math.random() + 1)
    }
}


//Create a new obj using literal syntax
const literalObject = {};
{}

//Create a new obj using a const func
constructedObject = new Object();
{}

//Create an array const func
constructedArray = new Array(1,2,3);
[1, 2, 3]


//Create a new class declaration syntax
class Dice {
    constructor(sides=6) {
        this.sides = sides;
    }
    roll() {
        return Math.floor(this.sides * Math.random() + 1)
    }
}

