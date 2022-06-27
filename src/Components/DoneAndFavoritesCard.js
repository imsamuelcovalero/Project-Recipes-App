import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import copy from 'clipboard-copy';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

function DoneAndFavoritesCard({ index, recipe, doneOrFavorite, HandleSubmitFavorite }) {
  // console.log(recipe, index);
  const [message, setMessage] = useState('');
  const link = `${window.location.origin}/${recipe.type}s/${recipe.id}`;
  const history = useHistory();

  const HandleSubmitShare = (e) => {
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
              <h4 data-testid={ `${index}-horizontal-top-text` }>
                {`${recipe.nationality} - ${recipe.category}`}
              </h4>
              <h2
                data-testid={ `${index}-horizontal-name` }
                onClick={ () => handleNavigate(recipe) }
                aria-hidden="true"
              >
                {recipe.name}

              </h2>
              {
                doneOrFavorite === 'done'
                  && (
                    <div>
                      <p data-testid={ `${index}-horizontal-done-date` }>
                        {recipe.doneDate}
                      </p>
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
                    </div>
                  )
              }
              <button
                type="submit"
                onClick={ HandleSubmitShare }
              >
                <img
                  data-testid={ `${index}-horizontal-share-btn` }
                  src={ shareIcon }
                  alt="share"
                />
              </button>
              <p>{message}</p>
              {
                doneOrFavorite === 'favorite'
                  && (
                    <button
                      type="button"
                      data-testid={ `${index}-horizontal-favorite-btn` }
                      onClick={ () => HandleSubmitFavorite(recipe) }
                      src={ blackHeartIcon }
                    >
                      <img src={ blackHeartIcon } alt="favorite" />
                    </button>
                  )
              }
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
              <h3 data-testid={ `${index}-horizontal-top-text` }>
                {recipe.alcoholicOrNot}
              </h3>
              <h2
                data-testid={ `${index}-horizontal-name` }
                onClick={ () => handleNavigate(recipe) }
                aria-hidden="true"
              >
                {recipe.name}

              </h2>
              {
                doneOrFavorite === 'done'
                  && (
                    <div>
                      <p data-testid={ `${index}-horizontal-done-date` }>
                        {recipe.doneDate}
                      </p>
                    </div>
                  )
              }
              <button
                type="submit"
                onClick={ HandleSubmitShare }
              >
                <img
                  data-testid={ `${index}-horizontal-share-btn` }
                  src={ shareIcon }
                  alt="share"
                />
              </button>
              <p>{message}</p>
              {
                doneOrFavorite === 'favorite'
                  && (
                    <button
                      type="button"
                      data-testid={ `${index}-horizontal-favorite-btn` }
                      onClick={ () => HandleSubmitFavorite(recipe) }
                      src={ blackHeartIcon }
                    >
                      <img src={ blackHeartIcon } alt="favorite" />
                    </button>
                  )
              }
            </div>
          )
      }
    </div>
  );
}

DoneAndFavoritesCard.propTypes = {
  index: PropTypes.number.isRequired,
  recipe: PropTypes.shape.isRequired,
  doneOrFavorite: PropTypes.string.isRequired,
  HandleSubmitFavorite: PropTypes.func.isRequired,
};

export default DoneAndFavoritesCard;
