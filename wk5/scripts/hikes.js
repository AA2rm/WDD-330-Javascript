'use strict';
//Create an array module of the hikes class

const hikeList = [
    {
      name: 'Bechler Falls',     
      distance: '3 Miles',
      difficulty: 'Easy',
      description:
        'Short hike near Bechler Falls in woody area with both inclining and declining paths. It includes a few small hills that overlooks the Bechler River, but most of the path is flat',
      img: ''     
    },
    {
      name: 'Teton Canyon',    
      distance: '3 Miles',
      difficulty: 'Moderate',
      description: ':Moderate hike through Teton Canyon, with  a few narrow rocky terrain, that includes some wide trais. There are incling, decling, and flat paths .',
      img: ''  
    },
    {
      name: 'Denanda Falls',    
      distance: '7 Miles',
      difficulty: 'Slightly Difficult for experience hikers only',
      description:
        'Silight difficult hike through the wood to Denanda Falls, with inclining and declining hills over rocky terrain. It includes some narrow inclining trails that overlook the Denada Falls'. ,
     im: ''
    }
  ];
  export default class Hikes {
    constructor(elementId) {
      this.parentElement = document.getElementById(elementId);
      // we need a back button to return back to the list. This will build it and hide it. When we need it we just need to remove the 'hidden' class
      this.backButton = this.buildBackButton();
    }
    // why is this function necessary?  hikeList is not exported, and so it cannot be seen outside of this module. I added this in case I ever need the list of hikes outside of the module. This also sets me up nicely if my data were to move. I can just change this method to the new source and everything will still work if I only access the data through this getter.
    getAllHikes() {
      return hikeList;
    }
  
  }
