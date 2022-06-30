import React from 'react';
import RecipeInProgress from '../../Components/RecipeInProgress/RecipeInProgress';
import { DivGlobal, Div } from './Style';

function FoodProgress() {
  return (
    <DivGlobal>
      <Div>
        <RecipeInProgress
          tipoReceita="themealdb"
          tipoFood="meals"
          NameToMap="strMeal"
        />
      </Div>
    </DivGlobal>
  );
}

export default FoodProgress;
