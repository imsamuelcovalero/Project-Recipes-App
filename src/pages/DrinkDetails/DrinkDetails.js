import React from 'react';
import FoodAndDrinkDetails from
'../../Components/FoodAndDrinkDetails/FoodAndDrinkDetails';
import { DivGlobal, Div } from './Style';

function DrinkDetails() {
  return (
    <DivGlobal>
      <Div>
        <FoodAndDrinkDetails
          NameToMap="strDrink"
          tipoReceita="thecocktaildb"
          tipoFood="drinks"
          foodOrDrink="strMeal"
        />
      </Div>
    </DivGlobal>
  );
}

export default DrinkDetails;
