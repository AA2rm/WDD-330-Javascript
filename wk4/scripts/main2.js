//TEAM ASSIGNMENT
//#1 Build a 3X3 board in HTML and CSS.

//#2
//Add a touch event handlers
someElement.addEventListener('touchend', process_touchend, false);

//Release the touch to trigger a func
document.getElementById("game_board").ontouchend = myFunction;

function myFunction() {
  document.getElementById("game_board").innerHTML = "Hello World";
}
//Add the addEventListener method
document.getElementById("game_board").addEventListener("touchend", myFunction);

function myFunction() {
  document.getElementById("game_board").innerHTML = ""};