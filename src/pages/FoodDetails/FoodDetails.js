import React from 'react';
import FoodAndDrinkDetails from
'../../Components/FoodAndDrinkDetails/FoodAndDrinkDetails';
import { DivGlobal, Div } from './Style';

function FoodDetails() {
  return (
    <DivGlobal>
      <Div>
        <FoodAndDrinkDetails
          NameToMap="strMeal"
          tipoReceita="themealdb"
          tipoFood="meals"
          foodOrDrink="strDrink"
        />
      </Div>
    </DivGlobal>
  );
}

export default FoodDetails;
