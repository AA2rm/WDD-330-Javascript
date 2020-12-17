// JS RECIPE 
'use strict';

import React from  'react';  3.4
import styles from './recipe.module.css';


const Recipe = ({ title, calories, img, ingredients }) => {
    return (
      <div  className={styles.recipe}>
          <h1>{Title}</h1>
          <ol>
            {ingredients.map(ingredient =>(
              <li>{ingredient.text}</li>
            ))}
          </ol>
          <p>{Calories}</p>
          
          <img src= {image} alt= "" />         
      </div>  
    );
}

export default Recipe;