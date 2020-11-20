'use strict';
/* Week 10 Quakes API Ex*/

/*******************************************************
* Import the JSON & getLocations function from utilities
*******************************************************/
import QuakesController from './QuakesController.js';

/************************************************************
* Create an event listener for the events of chking the 
* validity of the form, prevents the default from loading 
* & propagating, so that a new search can be performed.
************************************************************/
//document.querySelector("#searchBtn").onsubmit  = newSearch;
document.getElementById("quakeForm").addEventListener("submit", function(event) {
    event.target.checkValidity();
    event.preventDefault(); // Prevent form submission and contact with server
    event.stopPropagation();
    newSearch();
  }, false);

function newSearch(){
// get the radius start & end dates of the quake list
const starDate = document.getElementById('startDate').value;
const endDate = document.getElementById('endDate').value;
const maxRadius = document.getElementById('maxRadius').value;
console.log(endDate);
console.log(starDate);
const controller = new QuakesController('#quakeList', starDate, endDate, maxRadius);

    controller.init();

}


/*******************************************************
* Add a variable to hold the Base Url for our app
*******************************************************/
const baseUrl ='https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02';

/*******************************************************
* create an instance of the class (new QuakeController()), 
* then call the init() method console.log something from
* the method until you create the methods it calls to know
* if it's working correctly.
*******************************************************/
// class QuakeController {
//     name;
//     constructor(name) {
//       this.name = name;
//     }
//     getQuakesController(){
//         return this.name
//     }
//   }
// const quakeController = new QuakeController ('');
// const obj = {};

// quakeController instanceof QuakeController; // => true
// obj instanceof QuakeController; // => false

// // call the init() method
// initPos.init();
// // OR
// init['initPos']()

// // OR
// var initPos = new  myInitPos();
// obj.setValue("location");
// alert(initPos.getValue());

/**************************************** 
 * console.log something from the method
 ***************************************/
console.log(quakeList);