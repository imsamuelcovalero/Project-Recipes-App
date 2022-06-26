import React from 'react';
import RecipeInProgress from '../Components/RecipeInProgress';

function FoodProgress() {
  return (
    <div>
      <h3>Food Progress</h3>
      <RecipeInProgress tipoReceita="themealdb" tipoFood="meals" NameToMap="strMeal" />
    </div>
  );
}

export default FoodProgress;
