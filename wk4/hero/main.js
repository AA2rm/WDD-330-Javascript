//Heroes
const form = document.forms['hero'];//add the var hero
form.addEventListener('submit', makeHero, false);//add an event listerner to invoke the makeHero() function.

//Add a function to define a hero
function makeHero(event) {
    event.preventDefault(); // prevent the form from being submitted
    const hero = {}; // create an empty object
    hero.name = form.heroName.value; // create a name property based on the input field's value
    alert(JSON.stringify(hero)); // convert object to JSON string and display in alert dialog
    return hero;
    hero.city = form.city.value;
}

//Add a password input to the form
hero.realName = form.realName.value;

//Add a loop to loop thru the checkboxes objs to the form 
//to create the 'powers' property
hero.powers = [];
for (let i=0; i < form.powers.length; i++) {
    if (form.powers[i].checked) {
        hero.powers.push(form.powers[i].value);
    }
}

//or use an array to iterate thru the checkboxes
hero.powers = [...form.powers].filter(box => box.checked).map(box => box.value);

//Set the first checkbox to be true
document.forms.hero.powers[0].checked = true;

//Access a collection of powers
form.powers;

//Access a collection of categories
form.category;

//Assign a category to the hero obj
hero.category = form.category.value;

//Assign the hero & vilian checkboxes to false
form.type[2].checked = true;

//Prc the age info in the form
hero.age = form.age.value;

//Access the names of the city
form.city;

//Get the index of the city from the form
form.city.options[form.city.selectedIndex].text
//Add a property to the hero in the text area 
hero.origin = form.origin.value;

//or change the value in the form itself
form.origin.value = 'Born as Kal-El on the planet Krypton...';

//Add validation of an event listener to the hero name attribute
form.addEventListener('submit',validate,false);
function validate(event) {
    const firstLetter = form.heroName.value[0];
    if (firstLetter.toUpperCase() === 'X') {
        event.preventDefault();
        alert('Your name is not allowed to start with X!');
    }
}

//Add form usability for instanct feedback
//have the validate inline function called when event is triggered
//assign a var to heroName to the input field value
//validate if upper & lower case x in the checkboxes
//Check for errors using the startWith() method
//add a display block
//add an else clause if no error
const label = form.querySelector('label');
const error = document.createElement('div');
error.classList.add('error');
error.textContent = '! Your name is not allowed to start with X.';
label.append(error);
function validateInline() {
    const heroName = this.value.toUpperCase();
    if(heroName.startsWith('X')){
    error.style.display = 'block';
    } else {
    error.style.display = 'none';
    }
}

//Disable the submit button
function disableSubmit(event) {
    if(event.target.value === ''){
        document.getElementById('submit').disabled = true;
    } else {
        document.getElementById('submit').disabled = false;
    }
}

//Add an event handler to the keys
form.heroName.addEventListener('keyup',disableSubmit,false);



