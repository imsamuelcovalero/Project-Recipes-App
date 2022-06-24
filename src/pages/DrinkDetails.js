import React from 'react';
import FoodAndDrinkDetails from '../Components/FoodAndDrinkDetails';

function DrinkDetails() {
  return (
    <div>
      <h3>Drink Details</h3>
      <FoodAndDrinkDetails
        NameToMap="strDrink"
        tipoReceita="thecocktaildb"
        tipoFood="drinks"
        foodOrDrink="strMeal"
      />
    </div>
  );
}

export default DrinkDetails;
