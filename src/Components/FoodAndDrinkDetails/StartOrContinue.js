import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { getInProgressRecipes } from '../../helpers/getLocalStorage';
import { saveInProgressRecipe } from '../../helpers/saveLocalStorage';
import { DivStart } from './Style';

const CONTINUE = 'Continue Recipe';

function StartOrContinue({ id, foodType }) {
  const [buttonText, setButtonText] = useState('Start Recipe');
  // const { pathname } = useLocation();
  const history = useHistory();
  // console.log(ingredients);

  useEffect(() => {
    const inProgress = getInProgressRecipes();
    // console.log('inProgress', inProgress);
    if (inProgress) {
      if (foodType === 'meals') {
        const foods = Object.entries(inProgress)
          .find(([key]) => key === 'meals');
        const checkInProgress = Object.keys(foods[1])
          .some((recipeId) => recipeId === id);
        // console.log('checkInProgressId', checkInProgress);
        if (checkInProgress) {
          setButtonText(CONTINUE);
        }
      } else if (foodType === 'drinks') {
        const drinks = Object.entries(inProgress)
          .find(([key]) => key === 'cocktails');
        const checkInProgress = Object.keys(drinks[1])
          .some((recipeId) => recipeId === id);
        // console.log('checkInProgressId', checkInProgress);
        if (checkInProgress) {
          setButtonText(CONTINUE);
        }
      }
    }
  }, [foodType, id]);

  const newMeal = {
    [id]: [],
  };

  const newCocktail = {
    [id]: [],
  };

  const HandleSubmit = (event) => {
    event.preventDefault();
    const inProgress = getInProgressRecipes();
    // console.log('inProgress', inProgress);
    if (inProgress && inProgress.length > 0) {
      if (foodType === 'food') {
        const checkInProgress = Object.entries(inProgress)[0].find(
          (recipe) => Object.keys(recipe)[0] === id,
        );
        // console.log('checkInProgress', checkInProgress);
        if (!checkInProgress) {
          saveInProgressRecipe(newMeal, foodType);
          history.push(`/foods/${id}/in-progress`);
        } else {
          history.push(`/foods/${id}/in-progress`);
        }
      } else if (foodType === 'drink') {
        // console.log('inProgress', inProgress);
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
      saveInProgressRecipe(newMeal, foodType);
      // console.log(getInProgressRecipes());
      setButtonText(CONTINUE);
      history.push(`/foods/${id}/in-progress`);
    } else if (foodType === 'drinks') {
      saveInProgressRecipe(newCocktail, foodType);
      // console.log(getInProgressRecipes());
      setButtonText(CONTINUE);
      history.push(`/drinks/${id}/in-progress`);
    }
  };

  return (
    <DivStart>
      <button
        id="startButton"
        type="button"
        data-testid="start-recipe-btn"
        onClick={ (event) => HandleSubmit(event) }
      >
        {buttonText}
      </button>
    </DivStart>
  );
}

StartOrContinue.propTypes = {
  id: PropTypes.string.isRequired,
  foodType: PropTypes.string.isRequired,
};

export default StartOrContinue;
