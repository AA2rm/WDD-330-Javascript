/* Week 10 Quakes API Ex*/
'use strict';

/*******************************************************
* Import the JSON & getLocations function from utilities
*******************************************************/
import { getJSON, getLocation } from 'utilities.js';
import { getQuakeController } from 'QuakesController.js';

/*******************************************************
* Add a variable to hold the Base Url for our app
*******************************************************/
const baseUrl ='https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02';



/*******************************************************
* Construct this URL with the current location from your 
helper function.
*******************************************************/
https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-03-02&latitude=43.814540699999995&longitude=-111.78491029999999&maxradiuskm=100



/*******************************************************
* create an instance of the class (new QuakeController()), 
* then call the init() method console.log something from
* the method until you create the methos it calls to know
* if it's working correctly.
*******************************************************/
class QuakeController {
    name;
    constructor(name) {
      this.name = name;
    }
    getQuakesController(){
        return this.name
    }
  }
const quakeController = new QuakeController ('');
const obj = {};

quakeController instanceof QuakeController; // => true
obj instanceof QuakeController; // => false

// call the init() method
initPos.init();
// OR
init['initPos']()

// OR
var initPos = new  myInitPos();
obj.setValue("location");
alert(initPos.getValue());



// console.log something form the method