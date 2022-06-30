import React from 'react';
import PropTypes from 'prop-types';
import { useHistory, useLocation } from 'react-router-dom';
import { getDoneRecipes } from '../../helpers/getLocalStorage';
import { saveDoneRecipe } from '../../helpers/saveLocalStorage';
import { DivStart } from './Style';

function FinishRecipeButton({ id, recipe, isDisabled }) {
  const { pathname } = useLocation();
  const history = useHistory();

  const newDoneRecipeFood = {
    id,
    type: 'food',
    nationality: recipe.strArea,
    category: recipe.strCategory,
    alcoholicOrNot: '',
    name: recipe.strMeal,
    image: recipe.strMealThumb,
    doneDate: new Date().toLocaleDateString(),
    tags: recipe.strTags,
  };
  // setDoneMealRecipe(newDoneRecipeFood);
  const newDoneRecipeDrink = {
    id,
    type: 'drink',
    nationality: '',
    category: '',
    alcoholicOrNot: recipe.strAlcoholic,
    name: recipe.strDrink,
    image: recipe.strDrinkThumb,
    doneDate: new Date().toLocaleDateString(),
    tags: '',
  };
  // setDoneCocktailRecipe(newDoneRecipeDrink);

  const HandleSubmit = (event) => {
    // console.log('entrou no HandleSubmit');
    event.preventDefault();
    console.log('newDoneRecipeDrink', newDoneRecipeDrink);
    if (pathname.includes('/foods')) {
      saveDoneRecipe(newDoneRecipeFood);
      console.log(getDoneRecipes());
    } else if (pathname.includes('/drinks')) {
      saveDoneRecipe(newDoneRecipeDrink);
      console.log(getDoneRecipes());
    }
    history.push('/done-recipes');
  };

  return (
    <DivStart>
      <button
        id="startButton"
        data-testid="finish-recipe-btn"
        type="submit"
        disabled={ isDisabled }
        onClick={ (event) => HandleSubmit(event) }
      >
        Finish Recipe
      </button>
    </DivStart>
  );
}

FinishRecipeButton.propTypes = {
  id: PropTypes.string.isRequired,
  recipe: PropTypes.shape.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};

export default FinishRecipeButton;
