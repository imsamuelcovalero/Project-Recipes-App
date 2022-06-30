import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import copy from 'clipboard-copy';
import AppContext from '../../context/AppContext';
import shareIcon from '../../images/shareIcon.svg';
import blackHeartIcon from '../../images/blackHeartIcon.svg';
import { DivS } from './Style';

function DoneAndFavoritesCard({ index, recipe, doneOrFavorite, HandleSubmitFavorite }) {
  console.log(recipe, index);
  const link = `${window.location.origin}/${recipe.type}s/${recipe.id}`;
  const history = useHistory();
  const { shareMessage, setShareMessage } = useContext(AppContext);

  useEffect(() => {
    setShareMessage('');
  }, []);

  const HandleSubmitShare = (e) => {
    e.preventDefault();
    copy(link);
    setShareMessage('Link copied!');
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
    <DivS>
      {
        recipe.type === 'food'
          ? (
            <div>
              <div id="imgDiv">
                <img
                  id="imagem"
                  src={ recipe.image }
                  alt="Done Recipe"
                  data-testid={ `${index}-horizontal-image` }
                  onClick={ () => handleNavigate(recipe) }
                  aria-hidden="true"
                />
              </div>
              <div id="textDiv">
                <h4 data-testid={ `${index}-horizontal-top-text` }>
                  {`${recipe.nationality} - ${recipe.category}`}
                </h4>
                <h2
                  id="boldTitle"
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
                {
                  doneOrFavorite === 'done'
                  && (
                    <div>
                      {
                        recipe.tags !== ''
                        && (
                          <span>
                            <p
                              data-testid={ `${index}-${recipe.tags[0]}-horizontal-tag` }
                            >
                              { recipe.tags[0]}
                            </p>
                            <p
                              data-testid={ `${index}-${recipe.tags[1]}-horizontal-tag` }
                            >
                              { recipe.tags[1]}
                            </p>
                          </span>
                        )
                      }
                    </div>
                  )
                }
                {
                  doneOrFavorite === 'favorite'
                  && (
                    <button
                      id="favoriteBtn"
                      type="button"
                      data-testid={ `${index}-horizontal-favorite-btn` }
                      onClick={ () => HandleSubmitFavorite(recipe) }
                      src={ blackHeartIcon }
                    >
                      <img src={ blackHeartIcon } alt="favorite" />
                    </button>
                  )
                }
                <p>{shareMessage}</p>
              </div>
            </div>
          )
          : (
            <div>
              <div id="imgDiv">
                <img
                  id="imagem"
                  src={ recipe.image }
                  alt="Done Recipe"
                  data-testid={ `${index}-horizontal-image` }
                  onClick={ () => handleNavigate(recipe) }
                  aria-hidden="true"
                />
              </div>
              <div id="textDiv">
                <h4 data-testid={ `${index}-horizontal-top-text` }>
                  {recipe.alcoholicOrNot}
                </h4>
                <h2
                  id="boldTitle"
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
                {
                  doneOrFavorite === 'favorite'
                  && (
                    <button
                      id="favoriteBtn"
                      type="button"
                      data-testid={ `${index}-horizontal-favorite-btn` }
                      onClick={ () => HandleSubmitFavorite(recipe) }
                      src={ blackHeartIcon }
                    >
                      <img src={ blackHeartIcon } alt="favorite" />
                    </button>
                  )
                }
                <p>{shareMessage}</p>
              </div>
            </div>
          )
      }
    </DivS>
  );
}

DoneAndFavoritesCard.propTypes = {
  index: PropTypes.number.isRequired,
  recipe: PropTypes.shape.isRequired,
  doneOrFavorite: PropTypes.string.isRequired,
  HandleSubmitFavorite: PropTypes.func.isRequired,
};

export default DoneAndFavoritesCard;
