import React, { useEffect, useState } from 'react';
import HeaderNoSearch from '../Components/HeaderNoSearch';
import { getFavoriteRecipes } from '../helpers/getLocalStorage';
import { updateFavoriteRecipes } from '../helpers/saveLocalStorage';
import DoneAndFavoritesCard from '../Components/DoneAndFavoritesCard';
import blackHeartIcon from '../images/blackHeartIcon.svg';

function FavoritesRecipes() {
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  const [filterType, setFilterType] = useState('all');

  // const mockFavorite = [
  //   {
  //     id: 52977,
  //     type: 'food',
  //     nationality: 'Turkish',
  //     category: 'Side',
  //     alcoholicOrNot: '',
  //     name: 'Corba',
  //     image: 'https://www.themealdb.com/images/media/meals/58oia61564916529.jpg',
  //   },
  //   {
  //     id: 178319,
  //     type: 'drink',
  //     nationality: '',
  //     category: 'Cocktail',
  //     alcoholicOrNot: 'Alcoholic',
  //     name: 'Aquamarine',
  //     image: 'https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg',
  //   },
  // ];

  useEffect(() => {
    console.log('filterType', filterType);
    const favorites = getFavoriteRecipes();
    if (filterType === 'food') {
      const recipesFiltered = favorites.filter((recipe) => recipe.type === 'food');
      console.log('recipesFiltered', recipesFiltered);
      setFavoriteRecipes(recipesFiltered);
    } if (filterType === 'drink') {
      const recipesFiltered = favorites
        .filter((recipe) => recipe.type === 'drink');
      console.log('recipesFiltered', recipesFiltered);
      setFavoriteRecipes(recipesFiltered);
    } if (filterType === 'all') {
      setFavoriteRecipes(favorites);
    }
  }, [filterType]);

  const HandleSubmitFavorite = (recipe) => {
    // console.log('entrou no HandleSubmit');
    const favorites = getFavoriteRecipes();
    // console.log('favorites', favorites);
    const newFavorites = favorites.filter((recipeItem) => recipeItem.id !== recipe.id);
    updateFavoriteRecipes(newFavorites);
    console.log(getFavoriteRecipes());
    setFavoriteRecipes(newFavorites);
  };

  return (
    <div>
      <HeaderNoSearch title="Favorite Recipes" shouldRenderMagnifier />
      <button
        data-testid="filter-by-all-btn"
        type="submit"
        onClick={ () => setFilterType('all') }
      >
        All
      </button>
      <button
        data-testid="filter-by-food-btn"
        type="submit"
        onClick={ () => setFilterType('food') }
      >
        Food
      </button>
      <button
        data-testid="filter-by-drink-btn"
        type="submit"
        onClick={ () => setFilterType('drink') }
      >
        Drinks
      </button>
      {
        favoriteRecipes && favoriteRecipes.length > 0
          && (
            favoriteRecipes.map((recipe, index) => (
              <div key={ index }>
                <DoneAndFavoritesCard
                  index={ index }
                  recipe={ recipe }
                  doneOrFavorite="favorite"
                />
                <button
                  type="button"
                  onClick={ () => HandleSubmitFavorite(recipe) }
                  src={ blackHeartIcon }
                >
                  <img src={ blackHeartIcon } alt="favorite" />
                </button>
              </div>
            ))
          )
      }
    </div>
  );
}

export default FavoritesRecipes;
