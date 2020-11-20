/* Week 10 Quakes Model*/
'use strict';
/* Models are responsible to handle all of the interactions with our data source. 
 * They often contain schema information describing the data as well
*/
/*******************************************************
* Add a Quake class for the model
*******************************************************/
import { getJSON } from "./utilities.js";

export default class Quake {
  constructor() {
    this.baseUrl =
    "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2020-01-01&endtime=2020-02-02";
    // store the last batch of the quakes in the model.  
    // retrieve a quake.
    this._quakes = [];
  }
  async getEarthQuakesByRadius(position, radius = 100) {
    // use the getJSON function and the position provided to build out the correct URL to get the data we need.  
    
    //Store the URL into this._quakes, then return it
    const latitude = `&latitude=${position.lat}`;
    const longitude = `&longitude=${position.lon}`; 
    const radiusP = `&maxradiuskm=${radius}`;
    const start = `&starttime=${startDate}`;
    const end = `&endtime=${endDate}`;
    const query = this.baseUrl + start + end + latitude + longitude + radiusP;
    
    //  OR
    // const query =
    //   this.baseUrl
    //   `&latitude=${position.lat}&longitude=${position.lon}&maxradiuskm=${radius}`;
          
    console.log(query);

    this._quakes = await getJSON(query);
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