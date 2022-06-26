import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import copy from 'clipboard-copy';
import shareIcon from '../images/shareIcon.svg';

function DoneRecipesB({ index, recipe }) {
  // console.log(recipe, index);
  const [message, setMessage] = useState('');
  const link = `${window.location.origin}/${recipe.type}s/${recipe.id}`;
  const history = useHistory();

  const HandleSubmit = (e) => {
    e.preventDefault();
    copy(link);
    setMessage('Link copied!');
  };

  const handleNavigate = (recipeClicked) => {
    if (recipeClicked.type === 'food') {
      history.push(`/foods/${recipe.id}`);
    }

    if (recipeClicked.type === 'drink') {
      history.push(`/drinks/${recipe.id}`);
    }
  };

  return (
    <div>
      {
        recipe.type === 'food'
          ? (
            <div className="card">
              <img
                src={ recipe.image }
                alt="Done Recipe"
                data-testid={ `${index}-horizontal-image` }
                onClick={ () => handleNavigate(recipe) }
                aria-hidden="true"
              />
              <h3 data-testid={ `${index}-horizontal-top-text` }>{recipe.category}</h3>
              <h2
                data-testid={ `${index}-horizontal-name` }
                onClick={ () => handleNavigate(recipe) }
                aria-hidden="true"
              >
                {recipe.name}

              </h2>
              <p>{recipe.nationality}</p>
              <p data-testid={ `${index}-horizontal-done-date` }>{recipe.doneDate}</p>
              {
                recipe.tags !== ''
                  && (
                    <p
                      data-testid={ `${index}-horizontal-tag` }
                    >
                      { [recipe.tags.split(',').slice(0, 2)] }
                    </p>
                  )
              }
              <button
                type="submit"
                data-testid={ `${index}-horizontal-share-btn` }
                onClick={ HandleSubmit }
              >
                <img src={ shareIcon } alt="share" />
              </button>
              <p>{message}</p>
            </div>
          )
          : (
            <div className="card">
              <img
                src={ recipe.image }
                alt="Done Recipe"
                data-testid={ `${index}-horizontal-image` }
                onClick={ () => handleNavigate(recipe) }
                aria-hidden="true"
              />
              <h3>{recipe.alcoholicOrNot}</h3>
              <h2
                data-testid={ `${index}-horizontal-name` }
                onClick={ () => handleNavigate(recipe) }
                aria-hidden="true"
              >
                {recipe.name}

              </h2>
              <p data-testid={ `${index}-horizontal-done-date` }>{recipe.doneDate}</p>
              <button
                type="submit"
                data-testid={ `${index}-horizontal-share-btn` }
                onClick={ HandleSubmit }
              >
                <img src={ shareIcon } alt="share" />
              </button>
              <p>{message}</p>
            </div>
          )
      }
    </div>
  );
}

DoneRecipesB.propTypes = {
  index: PropTypes.number.isRequired,
  recipe: PropTypes.shape.isRequired,
};

export default DoneRecipesB;
