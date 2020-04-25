/* Create a function that links the navigation and menu items*/
function toggleMenu() {
    document.querySelector('#navigation').classList.toggle('open');
}
/* Call the function & medthod linking it to the function abv.*/
document.querySelector('#menu').addEventListener('click', toggleMenu);
