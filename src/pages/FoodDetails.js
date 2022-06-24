import React from 'react';
import FoodAndDrinkDetails from '../Components/FoodAndDrinkDetails';

function FoodDetails() {
  return (
    <div>
      <h3>Food Details</h3>
      <FoodAndDrinkDetails
        NameToMap="strMeal"
        tipoReceita="themealdb"
        tipoFood="meals"
        foodOrDrink="strDrink"
      />
    </div>
  );
}

export default FoodDetails;
