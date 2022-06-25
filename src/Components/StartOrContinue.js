import React from 'react';
import PropTypes from 'prop-types';
import { useHistory, useLocation } from 'react-router-dom';
// import { getInProgressRecipes } from '../helpers/getLocalStorage';
// import { saveInProgressRecipe } from '../helpers/saveLocalStorage';
import './FoodAndDrinkDetails.css';

function StartOrContinue({ isRecipeInProgress, id, ingredients }) {
  const { pathname } = useLocation();
  const history = useHistory();
  console.log(ingredients);

  // console.log(id);

  // const newCocktails = {
  //   cocktails: {
  //     [id]: ingredients,
  //   }
  // };

  // const newMeals = {
  //   meals: {
  //     [id]: ingredients,
  //   }
  // };

  const HandleSubmit = (e) => {
    e.preventDefault();
    if (pathname.includes('/foods')) {
      history.push(`/foods/${id}/in-progress`);
    }
    if (pathname.includes('/drinks')) {
      history.push(`/drinks/${id}/in-progress`);
    }
  };

  return (
    <div>
      {
        isRecipeInProgress
          ? (
            <section>
              <button
                className="startButton"
                type="button"
                data-testid="start-recipe-btn"
                onClick={ HandleSubmit }
              >
                Continue Recipe
              </button>
            </section>
          )
          : (
            <section>
              <button
                className="startButton"
                type="submit"
                data-testid="start-recipe-btn"
                onClick={ HandleSubmit }
              >
                Start Recipe
              </button>
            </section>
          )
      }
    </div>
  );
}

StartOrContinue.propTypes = {
  isRecipeInProgress: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf.isRequired,
};

export default StartOrContinue;
