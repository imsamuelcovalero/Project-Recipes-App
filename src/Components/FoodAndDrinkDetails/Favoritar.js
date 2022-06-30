import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getFavoriteRecipes } from '../../helpers/getLocalStorage';
import { saveFavoriteRecipe, updateFavoriteRecipes }
from '../../helpers/saveLocalStorage';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import blackHeartIcon from '../../images/blackHeartIcon.svg';

function Favoritar({ id, recipe }) {
  const [favoriteIcon, setFavoriteIcon] = useState(whiteHeartIcon);
  const { pathname } = useLocation();

  useEffect(() => {
    const favorites = getFavoriteRecipes() || [];
    if (favorites) {
      const checkFavorite = favorites.find((recipeItem) => recipeItem.id === id);
      if (checkFavorite) {
        setFavoriteIcon(blackHeartIcon);
        // console.log('favoriteIcon', favoriteIcon);
      } else {
        setFavoriteIcon(whiteHeartIcon);
        // console.log('favoriteIcon', favoriteIcon);
      }
    }
  }, [favoriteIcon, id]);

  const newFavoriteFood = {
    id,
    type: 'food',
    nationality: recipe.strArea,
    category: recipe.strCategory,
    alcoholicOrNot: '',
    name: recipe.strMeal,
    image: recipe.strMealThumb,
  };

  const newFavoriteDrink = {
    id,
    type: 'drink',
    nationality: '',
    category: '',
    alcoholicOrNot: recipe.strAlcoholic,
    name: recipe.strDrink,
    image: recipe.strDrinkThumb,
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    // console.log('entrou no HandleSubmit');
    const favorites = getFavoriteRecipes();
    // console.log('favorites', favorites);
    if (favorites) {
      const checkFavorite = favorites.find((recipeItem) => recipeItem.id === id);
      if (checkFavorite) {
        const newFavorites = favorites.filter((recipeItem) => recipeItem.id !== id);
        updateFavoriteRecipes(newFavorites);
        setFavoriteIcon(whiteHeartIcon);
        console.log(getFavoriteRecipes());
      } else if (pathname.includes('/foods')) {
        const updateFavorites = [...favorites, newFavoriteFood];
        updateFavoriteRecipes(updateFavorites);
        setFavoriteIcon(blackHeartIcon);
        console.log(getFavoriteRecipes());
      } else if (pathname.includes('/drinks')) {
        const updateFavorites = [...favorites, newFavoriteDrink];
        updateFavoriteRecipes(updateFavorites);
        setFavoriteIcon(blackHeartIcon);
        console.log(getFavoriteRecipes());
      }
    } else {
      if (pathname.includes('/foods')) {
        saveFavoriteRecipe(newFavoriteFood);
        setFavoriteIcon(blackHeartIcon);
        // console.log(getFavoriteRecipes());
      }
      if (pathname.includes('/drinks')) {
        saveFavoriteRecipe(newFavoriteDrink);
        setFavoriteIcon(blackHeartIcon);
        // console.log(getFavoriteRecipes());
      }
    }
  };

  return (
    <div>
      <button
        type="submit"
        data-testid="favorite-btn"
        onClick={ HandleSubmit }
        src={ favoriteIcon }
      >
        <img src={ favoriteIcon } alt="favorite" />
      </button>
    </div>
  );
}

Favoritar.propTypes = {
  id: PropTypes.string.isRequired,
  recipe: PropTypes.shape.isRequired,
};

export default Favoritar;
