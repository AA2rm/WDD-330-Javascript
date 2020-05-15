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

