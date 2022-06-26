import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { getInProgressRecipes } from '../helpers/getLocalStorage';
import { saveInProgressRecipe } from '../helpers/saveLocalStorage';

const CONTINUE = 'Continue Recipe';

function StartOrContinue({ id, ingredients, foodType }) {
  const [buttonText, setButtonText] = useState('Start Recipe');
  // const { pathname } = useLocation();
  const history = useHistory();
  // console.log(ingredients);

  useEffect(() => {
    const inProgress = getInProgressRecipes();
    console.log('inProgress', inProgress);
    if (inProgress) {
      if (foodType === 'meals') {
        const checkInProgress = Object.keys(Object.entries(inProgress)[0][1])
          .some((recipeId) => recipeId === id);
        // console.log('checkInProgressId', checkInProgress);
        if (checkInProgress) {
          setButtonText(CONTINUE);
        }
      } else if (foodType === 'drinks') {
        const checkInProgress = Object.keys(Object.entries(inProgress)[1][1])
          .some((recipeId) => recipeId === id);
        // console.log('checkInProgressId', checkInProgress);
        if (checkInProgress) {
          setButtonText(CONTINUE);
        }
      }
    }
  }, [foodType, id]);

  const newCocktail = {
    [id]: ingredients,
  };

  const newMeal = {
    [id]: ingredients,
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    const inProgress = getInProgressRecipes();
    console.log('inProgress', inProgress);
    if (inProgress && inProgress.length > 0) {
      console.log('entrou em inProgress');
      if (foodType === 'food') {
        const checkInProgress = Object.entries(inProgress)[0].find(
          (recipe) => Object.keys(recipe)[0] === id,
        );
        console.log('checkInProgress', checkInProgress);
        if (!checkInProgress) {
          saveInProgressRecipe(newMeal, foodType);
          history.push(`/foods/${id}/in-progress`);
        } else {
          history.push(`/foods/${id}/in-progress`);
        }
      } else if (foodType === 'drink') {
        const checkInProgress = Object.entries(inProgress)[1].find(
          (recipe) => Object.keys(recipe)[0] === id,
        );
        if (!checkInProgress) {
          saveInProgressRecipe(newCocktail, foodType);
          history.push(`/drinks/${id}/in-progress`);
        } else {
          history.push(`/drinks/${id}/in-progress`);
        }
      }
    } else if (foodType === 'meals') {
      console.log('entrou no else if');
      saveInProgressRecipe(newMeal, foodType);
      console.log(getInProgressRecipes());
      setButtonText(CONTINUE);
      history.push(`/foods/${id}/in-progress`);
    } else if (foodType === 'drinks') {
      saveInProgressRecipe(newCocktail, foodType);
      console.log(getInProgressRecipes());
      setButtonText(CONTINUE);
      history.push(`/drinks/${id}/in-progress`);
    }
  };

  return (
    <div>
      <section>
        <button
          className="startButton"
          type="button"
          data-testid="start-recipe-btn"
          onClick={ HandleSubmit }
        >
          {buttonText}
        </button>
      </section>
    </div>
  );
}

StartOrContinue.propTypes = {
  id: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf.isRequired,
  foodType: PropTypes.string.isRequired,
};

export default StartOrContinue;
