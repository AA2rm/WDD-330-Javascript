/*RECIPE JS*/
/**********************************************
* Import  the following: React, useEffect &
* useState, logo, and CSS styling
***********************************************/
'use strict';
import React, {useEffect, useState } from "react";
import logo from "./logo.png";
// import "./App.CSS";
import "./WDD-330/styles/main.css";

const App = () => {  
    const APP_ID = "hgibetilsltjl ";
    const APP_KEY = "lksjlfjsepijpsije";    
    const exampleReq = `htps:api.edmamam.com/search?1=vegan&vegetarian&app=${YOUR_APP_ID}&app_key=${YOUR_APP_ID}`

/**********************************************
* Add a useEffect & useState function
**********************************************/
    const[counter, setCounter] = useState(0);
      useEffect(() =>{
        console.log("Effect is running"); 
      }, [counter]);
    // }, []); use empty brackets to run only once
     
   
    return(    
    <div class="App">
        <h1>Savor The Flavor: Vegan and Vegitarian Recipes</h1>
        <h2 onClick={() => setCounter(counter + 1)}>{counter}</h2>
        <form class="search-form">
            <input class="search-bar" type="text"/>
            <button class="search-button" type="submit">Search</button>
       
        </form>
       
    </div>
    );
};
export default App;