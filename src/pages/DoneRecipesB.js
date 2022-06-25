import React, { useState } from 'react';
import PropTypes from 'prop-types';
import copy from 'clipboard-copy';
import shareIcon from '../images/shareIcon.svg';

function DoneRecipesB({ index, recipe }) {
  console.log(recipe, index);
  const [message, setMessage] = useState('');
  // const urlType = `${recipe.type}s`;
  // const urlId = `${recipe.id}`;
  const link = `${window.location.origin}/${recipe.type}s/${recipe.id}`;

  const HandleSubmit = (e) => {
    e.preventDefault();
    copy(link);
    setMessage('Link copied!');
  };

  return (
    <div>
      {
        recipe.type === 'food'
          ? (
            <div>
              <img src="" alt="Done Recipe" data-testid={ `${index}-horizontal-image` } />
              <h3 data-testid={ `${index}-horizontal-top-text` }>categoria</h3>
              <h2 data-testid={ `${index}-horizontal-name` }>{recipe.name}</h2>
              <p data-testid={ `${index}-horizontal-done-date` }>data</p>
              <p data-testid={ `${index}-xablau-horizontal-tag` }>tag</p>
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
            <div>
              <img src="" alt="Done Recipe" data-testid={ `${index}-horizontal-image` } />
              <h3 data-testid={ `${index}-horizontal-top-text` }>categoria</h3>
              <h2 data-testid={ `${index}-horizontal-name` }>{recipe.name}</h2>
              <p data-testid={ `${index}-horizontal-done-date` }>data</p>
              <p data-testid={ `${index}-xablau-horizontal-tag` }>tag</p>
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
