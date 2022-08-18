import React from 'react';
import PropTypes from 'prop-types';
import { useHistory, useLocation } from 'react-router-dom';
// import { getDoneRecipes } from '../../helpers/getLocalStorage';
import { saveDoneRecipe } from '../../helpers/saveLocalStorage';
import { FinishS } from './Style';

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
    if (pathname.includes('/foods')) {
      saveDoneRecipe(newDoneRecipeFood);
    } else if (pathname.includes('/drinks')) {
      saveDoneRecipe(newDoneRecipeDrink);
    }
    history.push('/done-recipes');
  };

  return (
    <FinishS disabled={ isDisabled }>
      {console.log(isDisabled)}
      <button
        id="startButton"
        data-testid="finish-recipe-btn"
        type="submit"
        disabled={ isDisabled }
        onClick={ (event) => HandleSubmit(event) }
      >
        Finish Recipe
      </button>
    </FinishS>
  );
}

FinishRecipeButton.propTypes = {
  id: PropTypes.string.isRequired,
  recipe: PropTypes.shape.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};

export default FinishRecipeButton;
