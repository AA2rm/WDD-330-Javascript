//JS EXAMPLES HEROES PROJ

//Question array pg 273
/**********************************************************
//Update the ask, check and view methods
**********************************************************/
ask() {
    const question = `What is ${this.question.name}'s real name?`;
    view.render(view.question,question);
    const response = prompt(question);
    this.check(response);
    },

    check(response) {
    const answer = this.question.realName;
    if(response === answer) {
    view.render(view.result,'Correct!',{'class':'correct'});
    alert('Correct!');
    this.score++;
    view.render(view.score,this.score);
    } else {
    view.render(view.result,`Wrong! The correct answer was ${answer}`, {'class':'wrong'});
    alert(`Wrong! The correct answer was ${answer}`);
        }
    },
    gameOver() {
    view.render(view.info,`Game Over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`);
    }

/**********************************************************
//Access the elements required & assign them to a var
**********************************************************/
// View Object
const view = {
    score: document.querySelector('#score strong'),
    question: document.getElementById('question'),
    result: document.getElementById('result'),
    info: document.getElementById('info'),
    render(target,content,attributes) {
    for(const key in attributes) {
    target.setAttribute(key, attributes[key]);
    }
    target.innerHTML = content;
    }
};

/**********************************************************
//Add autofocusSattribute that focuses on the input element
**********************************************************/
document.forms.hero.heroName.focus();
//Heroes
const form = document.forms['hero'];//add the var hero
form.addEventListener('submit', makeHero, false);//add an event listerner to invoke the makeHero() function.

/********************************
//Add a function to define a hero
********************************/
function makeHero(event) {
    event.preventDefault(); // prevent the form from being submitted
    const hero = {}; // create an empty object
    hero.name = form.heroName.value; // create a name property based on the input field's value
    alert(JSON.stringify(hero)); // convert object to JSON string and display in alert dialog
    return hero;
    hero.city = form.city.value;
}

/***************************************
//Add a password input field to the form
***************************************/
hero.realName = form.realName.value;

/********************************************************
// Access the collection name property of powers from
 the  HTML form
********************************************************/
form.powers;

//Add a loop to loop thru the checkboxes objs to the form 
//to create the 'powers' property
/*hero.powers = [];
for (let i=0; i < form.powers.length; i++) {
    if (form.powers[i].checked) {
        hero.powers.push(form.powers[i].value);
    }
}
*/

//or use an array to iterate (LOOP) thru the checkboxes-BEST PRACTICE
hero.powers = [...form.powers].filter(box => box.checked).map(box => box.value);


/**********************************
//Set the first checkbox to be true
**********************************/
document.forms.hero.powers[0].checked = true;

/**********************************
//Access a collection of categories
**********************************/
form.category;

/**********************************
//Assign a category to the hero obj
**********************************/
hero.category = form.category.value;

/*********************************************
//Assign the hero & vilian checkboxes to false
*********************************************/
form.type[2].checked = true;

/*****************************
//Prc the age info in the form
*****************************/
hero.age = form.age.value;

/*****************************
//Access the names of the city
*****************************/
form.city;

/***********************************
 * Set the makeHero() function to set
 * the city property
 **********************************/
hero.city = form.city.value;


/****************************************
//Get the index of the city from the form
*****************************************/
form.city.options[form.city.selectedIndex].text


/********************************************
//Add a property to the hero in the text area 
********************************************/
form.city.options[0].text


/********************************************
//Add a property to the hero in the text area 
********************************************/
hero.origin = form.origin.value;

//or change the value in the form itself
form.origin.value = 'Born as Kal-El on the planet Krypton...';


/***************************************************************
//Add required validation of an event listener to the hero name attribute
***************************************************************/
form.addEventListener('submit',validate,false);
function validate(event) {
    const firstLetter = form.heroName.value[0];
    if (firstLetter.toUpperCase() === 'X') {
        event.preventDefault();
        alert('Your name is not allowed to start with X!');
    }
}

/*****************************************************************
//Add form usability for instanct feedback
//have the validate inline function called when event is triggered
//assign a var to heroName to the input field value
//validate if upper & lower case x in the checkboxes
//Check for errors using the startWith() method
//add a display block
//add an else clause if no error
*****************************************************************/
const label = form.querySelector('label');
const error = document.createElement('div');
error.classList.add('error');
error.textContent = '! Your name is not allowed to start with X.';
label.append(error);
function validateInline() {
    const heroName = this.value.toUpperCase();
    if(heroName.startsWith('X')) {
    error.style.display = 'block';
    } else {
    error.style.display = 'none';
    }
}

//Disable the submit button
function disableSubmit(event) {
    if(event.target.value === '') {
        document.getElementById('submit').disabled = true;
    } else {
        document.getElementById('submit').disabled = false;
    }
}

//Add an event handler to the keys
form.heroName.addEventListener('keyup',disableSubmit,false);


//Add the reference to the hero form
response: document.querySelector('#response')

//Remove the main game loop from the game.start() method
start(quiz) {
    this.score = 0;
    this.questions = [...quiz];
    this.ask();
    
}


//Change the game.ask() method
ask(name) {
    if(this.questions.length > 0) {
    this.question = this.questions.pop();
    const question = `What is ${this.question.name}'s real
    name?`;
    view.render(view.question, question);
    }
    else {
    this.gameOver();
    }
}


//Add an event handler the fires when the form is activated
view.response.addEventListener('submit', (event) =>
game.check(event), false);
view.hide(view.response);


//Stop the form from submitting
check(e); 
    e.preventDefault();
    const response = view.response.answer.value;
    const answer = this.question.realName;
    if(response === answer) {
    view.render(view.result,'Correct!', {'class':'correct'});
    this.score++;
    view.render(view.score,this.score);
    } else {
    view.render(view.result,`Wrong! The correct answer was
    ${answer}`, {'class':'wrong'});
    }
    this.ask();


//Set up the view when the game starts
setup() {
    this.show(this.question);
    this.show(this.response);
    this.show(this.result);
    this.hide(this.start);
    this.render(this.score,game.score);
    this.render(this.result,'');
    this.render(this.info,'');
    this.resetForm();
}

//Stop the view from displaying messages from the previous game
resetForm() {
    this.response.answer.value = '';
    this.response.answer.focus();
}

//Reset the input field to emptyp & focus on it when hovering
check(event) {
    event.preventDefault();
    const response = view.response.answer.value;
    const answer = this.question.realName;
    if(response === answer){
    view.render(view.result,'Correct!',{'class':'correct'});
    this.score++;
    view.render(view.score,this.score);
    } else {
    view.render(view.result,`Wrong! The correct answer was
    ${answer}`,{'class':'wrong'});
    }
    view.resetForm();
    this.ask();
}

//Call the view.setup() at the start of each game
start(quiz) {
    this.score = 0;
    this.questions = [...quiz];
    view.setup();
    this.ask();
}


//Call the view.teardown() method at the end of each game to hide un-required elements
teardown() {
    this.hide(this.question);
    this.hide(this.response);
    this.show(this.start);
}

//Call the gameOver() metho at the end of each game
gameOver() {
view.render(view.info,`Game Over, you scored ${this.score}
    point${this.score !== 1 ? 's' : ''}`);
        view.teardown();
}