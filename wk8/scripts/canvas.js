/* Week 8 Canvas API Ex*/
'use strict';

/******************************************
 * Store the canvas element in a var & then 
 * get the canvas element
 * ***************************************/
var canvas = document.getElementById("myCanvas");

/******************************************
 * Get the drawing context by calling the
 * getContext method & pass it the string 2d
 * which is the context object
 * ***************************************/
// var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

/******************************************
 * Learn ab 3demesional (3D graphics at) 
 * http://www.khronos.org/webgl/
 * ***************************************/

/******************************************
 * Use a color string to style the stroke
 * by deining the stroke color
 * ***************************************/
// var canvas = document.getElementById("myCanvas");     
// var context = canvas.getContext("2d");
context.strokeStyle = "red";

 /******************************************
 *Use a color string to define  the fill 
 * color for a blue filled rectangle
 * ***************************************/
// var canvas = document.getElementById("myCanvas");     
// var context = canvas.getContext("2d");
// context.strokeStyle = "red";
context.fillStyle = "blue";


 /******************************************
 * Use the property rgba to set a 
 * semitransparent stroke or fill color w/
 * a 50% opacity
 * ***************************************/
// var canvas = document.getElementById("myCanvas");     
// var context = canvas.getContext("2d");
// context.strokeStyle = "red";
context.fillStyle = "rgba(0, 0, 255, 0.5)";//the 0.5 is the 50%

 /******************************************
 * Use the fillRect and strokeRect methods
 * to add the stroke and fill 10 pixels from 
 * the top and 10 pixels from the left of the 
 * canvas’s top-left corner to create a
 * rectangle to the canvas
 * ***************************************/
// var canvas = document.getElementById("myCanvas"); 
// var context = canvas.getContext("2d"); 
// context.strokeStyle = "red";
// context.fillStyle = "rgba(0, 0, 255, 0.5)";
context.fillRect(10, 10, 100, 100);   
context.strokeRect(10, 10, 100, 100);

 /******************************************
 * create a pattern using our bicycle image
 * by creating a new function called 
 * drawPattern 
 * ***************************************/
function drawPattern() {
    var canvas = document.getElementById("demo2");//gets the canvas
    var context = canvas.getContext("2d");//gets the context
    context.strokeStyle = "red";//set the stroke
    var img = new Image();//create an image obj 
    img.src = "../images/bg-bike.png";//set its src property to the image
}


 /******************************************
 * Use the image’s onload property to create 
 * our pattern once the image has been fully 
 * loaded by the browser.
 * ***************************************/

function drawPattern() {
    var canvas = document.getElementById("demo2");
    var context = canvas.getContext("2d");
    context.strokeStyle = "red";
    
    var img = new Image();
    img.src = "../images/bg-bike.png";
    img.onload = function() { //an anonymous function w/o a name; gets bound to the event & runs when the load event is fired.
    };            
}
 /******************************************
 * Create an eventhandler called createPattern
 * that passes the img obj & string 'repeat'
 * for the image to repeat on both the X & Y
 * axes. Then store the results of 
 * createPattern in a var 'pattern' & set 
 * the fillStyle to that var.
 * ***************************************/

function drawPattern() {
    //…
    var img = new Image();
    img.src = "../images/bg-bike.png";
    img.onload = function() {
    var pattern = context.createPattern(img, "repeat"); //createPattern method w/ 2 param (img, "repeat")
    context.fillStyle = pattern;                        
    context.fillRect(10, 10, 100, 100);                  
    context.strokeRect(10, 10, 100, 100);             
    };
}

 /******************************************
 * create a gradient that begins at the top of 
 * the canvas and blends the color down to the 
 * bottom, w/ a starting point at(0,0) & 
 * ending at (0,200)
 * ***************************************/
function drawGradient() {
    var canvas = document.getElementById("demo3");
    var context = canvas.getContext("2d");
    context.strokeStyle = "red";
    var gradient = context.createLinearGradient(0, 0, 0, 200); 
}
  /******************************************
 * Specify the blue color stops with an 
 * addColorStop() method
 * ***************************************/
function drawGradient() {
    //…
    var gradient = context.createLinearGradient(0, 0, 0, 200);
    gradient.addColorStop(0, "blue");//start the gradient offset w/ a "color"string value
    gradient.addColorStop(1, "white"); //end the grandient offset w/ a "color" string value
    context.fillStyle = gradient; 
    context.fillRect(10, 10, 100, 100); 
    context.strokeRect(10, 10, 100, 100); 
}

  /******************************************
 * Create a method beginPath() , which resets
 *  the default path for you to begin drawing
 *  a new circle shape:
 * ***************************************/
function drawCircle(canvas) {
    var context = canvas.getContext("2d");
    context.beginPath();
}

  /******************************************
 * Now create an arc method for the circle
 * ***************************************/
function drawCircle(canvas) {
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");
    context.beginPath();
    context.arc(50, 50, 30, 0, Math.PI*2, true);
}
//The signature for the arc method
// arc(x & y = where on canvas the arc begins.
// radius = the distance from the cent to the edge
//  startAngle  & endAngle =the start & end angles along the circle's circumference
//  The units for the angles are the radians & a cirsle is 2pi radians. Use the 2p for the endAnge.
//  muliple this values by Math.PI by 2
//  anticlockwise =  Is optional for the arc to be drawn counterclockwise  you set it to true.
//  closePath == is a methos to finish the circle
 

  /******************************************
 * Close the path to complete the circle
 * using a closePath method()
 * ***************************************/
function drawCircle(canvas) {
    var context = canvas.getContext("2d");
    context.beginPath();
    context.arc(100, 100, 50, 0, Math.PI*2, true);
    context.closePath(); 
}

  /******************************************
 * Style the stroke & fill the patter with
 * blue, & set a border
 * ***************************************/
function drawCircle(canvas) {
    var context = canvas.getContext("2d");
    context.beginPath();
    context.arc(50, 50, 30, 0, Math.PI*2, true);
    context.closePath();
    context.strokeStyle = "red";
    context.fillStyle = "blue";
    context.lineWidth = 3; 
}

  /******************************************
 * Learn ab 3demesional (3D graphics at) 
 * http://www.khronos.org/webgl/
 * ***************************************/


  /******************************************
 * Learn ab 3demesional (3D graphics at) 
 * http://www.khronos.org/webgl/
 * ***************************************/


  /******************************************
 * Learn ab 3demesional (3D graphics at) 
 * http://www.khronos.org/webgl/
 * ***************************************/


  /******************************************
 * Learn ab 3demesional (3D graphics at) 
 * http://www.khronos.org/webgl/
 * ***************************************/


  /******************************************
 * Learn ab 3demesional (3D graphics at) 
 * http://www.khronos.org/webgl/
 * ***************************************/