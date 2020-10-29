// HIKES
'use strict';

/*Import files into the Hikes file*/
import Hikes from './hikes.js';
//on load grab the array and insert it into the page
const myHikes = new Hikes('hikes');
window.addEventListener('load', () => {
  myHikes.showHikeList();
});

import HikesController from './hikesController.js';
//on load grab the array and insert it into the page
const myHikesController = new HikesController('hikes');
window.addEventListener('load', () => {
  myHikesController.showHikeList();
});