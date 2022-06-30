import React from 'react';
import RecipeInProgress from '../../Components/RecipeInProgress/RecipeInProgress';
import { DivGlobal, Div } from './Style';

function DrinkProgress() {
  return (
    <DivGlobal>
      <Div>
        <RecipeInProgress
          tipoReceita="thecocktaildb"
          tipoFood="drinks"
          NameToMap="strDrink"
        />
      </Div>
    </DivGlobal>
  );
}

export default DrinkProgress;
