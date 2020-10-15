'use strict';

// Import module from hike.js
import Hikes from './hikes.js';
//on load grab the array and insert it into the page
const myHikes = new Hikes('hikes');
window.addEventListener('load', () => {
  myHikes.showHikeList();
});


//create an instance of that class before you use it
const myHike = new Hikes('hikeListId');

// Create a hikes class
class name { 
    /* class stuff goes here */
}


class hike{
    constructor(name, path = true, duration, difficulty) {
      this.path = path;
      this.name = name;          
      this.difficulty = difficulty;
      this.distance = distance;
      this.duration = duration; 
    }
  }

 
// Use the instnace  to call the showHikeList method.
myHike.showHikeList()