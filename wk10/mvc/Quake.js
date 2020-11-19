/* Week 10 Quakes Model*/
'use strict';
/* Models are responsible to handle all of the interactions with our data source. 
 * They often contain schema information describing the data as well
*/
/*******************************************************
* Add a Quake class for the model
*******************************************************/


import { getJSON } from '../utilities.js';
// Quake Model
export default class Quake {
  constructor() {
    this.baseUrl =
      'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-03-02';
    // this is where we will store the last batch of retrieved quakes in the model.  I don't always do this...in this case the api doesn't have an endpoint to request one quake.
    this._quakes = [];
  }
  async getEarthQuakesByRadius(position, radius = 100) {
    // use the getJSON function and the position provided to build out the correct URL to get the data we need.  Store it into this._quakes, then return it
    return this._quakes;
  }
  getQuakeById(id) {
    // filter this._quakes for the record identified by id and return it
    return this._quakes.features.filter(item => item.id === id)[0];
  }
}

/*******************************************************
* Add a getEarthQuakesByRadius method from the model
*******************************************************/
document.write("getEarthQuakeByRadius")


var getEarthQuakeByRadius = (format, time, location, circle, other, extensions) => {
  this.format = format;
  this.time = time;
  this.location = location;
  this.circle = circle;
  this.other = other;
  this.extension = extension;
}

/*******************************************************
* Add an export keyword before each of our functions to
* export the functions in utitlies doc
*******************************************************/