// JS RECIPE 
'use strict';

import React from  'react';  3.4


const Recipe = ({ title, calories, img, ingredients }) => {
    return (
      <div>
          <h1>{Title}</h1>
          <ol>
            {ingredients}
          </ol>
          <p>{Calories}</p>
          <img src= {image} alt= "" />
         
      </div>  
    );
}

export default Recipe;