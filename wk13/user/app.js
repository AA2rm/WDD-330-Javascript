'use strict';
// APP JS*/
/**********************************************
* Import  the following: React, useEffect &
* useState, logo, and CSS styling
***********************************************/

import React,{useEffect, useState} from "react";  3.5
import Recipe from './Recipe';
import "./App.CSS";


const App = () => {  
    const APP_ID = "07b638c6";
    const APP_KEY = "6145b29a34f931b45fd2af53ab867b4b"; 
    // set recipies to use state
    const [recipes, setRecipes] = useState([]);
    const [search, setRecipes] = useState('');
    const [query, setQuery] = useState('vegetables');

/**********************************************
* Add a useEffect & useState function
**********************************************/
    // const[counter, setCounter] = useState(0);

      useEffect(() => {
        getRecipes();
      // console.log("Processing fetched data"); 
      // }, [counter]);
      }, [query]);
      //  use empty brackets to run only once
   
      
    // Fetch recipes & format it into JSON
    const getRecipes = async () => {
      const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
      
      const data = await response.json();
      console.log(data.hits);     
      setRecipes(data.hits);
    };

    // Retrieve data from this event
    const updateSearch = e => {
     setSearch(e.target.value)
     console.log(search); 
    }
   
    const getSearch = e => {
      e.preventDefault(); // stop page refresh
      setQuery(search);
      setSearch('');

    }
  // add an input & button to the form

    return (  
    <div className="App"> 
      <form onSubmit={getSearch} className="search-form">
          <input className="search-bar" type="text" value={search} onChange={} />
          <button className="search-button" type="submit">
            Search
          </button> 
      </form> 
      /
      {recipes.map(recipe => (
        <Recipe 
        key={recipe.recipe.label}
        title={recipe.recipe.label} 
        calories={recipe.recipe.calories} 
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}
        />
      ))}
    </div>
  );
};

export default App;