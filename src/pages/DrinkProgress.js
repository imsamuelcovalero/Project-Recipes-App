import React from 'react';
import RecipeInProgress from '../Components/RecipeInProgress';

function DrinkProgress() {
  return (
    <div>
      <h3>Drink Progress</h3>
      <RecipeInProgress
        tipoReceita="thecocktaildb"
        tipoFood="drinks"
        NameToMap="strDrink"
      />
    </div>
  );
}

export default DrinkProgress;
