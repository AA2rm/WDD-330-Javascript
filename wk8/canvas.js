'use strict';
/*Canvas API*/
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
var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

/******************************************
 * Learn ab 3demesional (3D graphics at) 
 * http://www.khronos.org/webgl/
 * ***************************************/

/******************************************
 * Use a color string to style the stroke
 * by deining the stroke color
 * ***************************************/
var canvas = document.getElementById("myCanvas");     
var context = canvas.getContext("2d");
context.strokeStyle = "red";

 /******************************************
 *Use a color string to define  the fill 
 * color for a blue filled rectangle
 * ***************************************/
var canvas = document.getElementById("myCanvas");     
var context = canvas.getContext("2d");
context.strokeStyle = "red";
context.fillStyle = "blue";


 /******************************************
 * U use the property rgba to set a 
 * semitransparent stroke or fill color w/
 * a 50% opacity
 * ***************************************/
var canvas = document.getElementById("myCanvas");     
var context = canvas.getContext("2d");
context.strokeStyle = "red";
context.fillStyle = "rgba(0, 0, 255, 0.5)";//the 0.5 is the 50%

 /******************************************
 * Use the fillRect and strokeRect methods
 * to add the stroke and fill 10 pixels from 
 * the top and 10 pixels from the left of the 
 * canvas’s top-left corner to create a
 * rectangle to the canvas
 * ***************************************/
var canvas = document.getElementById("myCanvas"); 
var context = canvas.getContext("2d"); 
context.strokeStyle = "red";
context.fillStyle = "rgba(0, 0, 255, 0.5)";
context.fillRect(10, 10, 100, 100);   
context.strokeRect(10, 10, 100, 100);


 /******************************************
 * create a CanvasPattern by calling the 
 * createPattern method. createPattern takes 
 * two parameters: the image to create the 
 * pattern with, and how that image should be 
 * repeated. The repeat value is a string, and 
 * the valid values are the same as those in 
 * CSS: repeat , repeat-x , repeat-y , and no-repeat 
 * ***************************************/



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
 * create a CanvasPattern by calling the 
 * createPattern method. createPattern takes 
 * two parameters: the image to create the 
 * pattern with, and how that image should be 
 * repeated. The repeat value is a string, and 
 * the valid values are the same as those in 
 * CSS: repeat , repeat-x , repeat-y , and no-repeat 
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


  /******************************************
 * Learn ab 3demesional (3D graphics at) 
 * http://www.khronos.org/webgl/
 * ***************************************/