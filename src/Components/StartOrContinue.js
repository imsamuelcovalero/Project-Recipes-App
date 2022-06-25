import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import AppContext from '../context/AppContext';
import './FoodAndDrinkDetails.css';

function StartOrContinue({ isRecipeInProgress, id }) {
  const { foodType } = useContext(AppContext);
  const history = useHistory();

  // console.log(id);

  const HandleSubmit = (e) => {
    e.preventDefault();
    if (foodType === 'meals') {
      history.push(`/foods/${id}/in-progress`);
    }
    if (foodType === 'drinks') {
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
                data-testid=""
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
};

export default StartOrContinue;
