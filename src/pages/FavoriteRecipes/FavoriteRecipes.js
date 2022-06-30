import React, { useEffect, useState, useContext } from 'react';
import HeaderNoSearch from '../../Components/Header/HeaderNoSearch';
import { getFavoriteRecipes } from '../../helpers/getLocalStorage';
import { updateFavoriteRecipes } from '../../helpers/saveLocalStorage';
import DoneAndFavoritesCard from
'../../Components/DoneAndFavoritesCard/DoneAndFavoritesCard';
import { DivGlobal, Div } from './Style';
import AppContext from '../../context/AppContext';

function FavoritesRecipes() {
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  const [filterType, setFilterType] = useState('all');
  const { setShareMessage } = useContext(AppContext);

  useEffect(() => {
    setShareMessage('');
  }, []);

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
    <DivGlobal>
      <Div>
        <HeaderNoSearch title="Favorite Recipes" shouldRenderMagnifier />
        <div id="buttons">
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
        </div>
        {
          favoriteRecipes && favoriteRecipes.length > 0
          && (
            favoriteRecipes.map((recipe, index) => (
              <div key={ index }>
                <DoneAndFavoritesCard
                  index={ index }
                  recipe={ recipe }
                  doneOrFavorite="favorite"
                  HandleSubmitFavorite={ HandleSubmitFavorite }
                />
              </div>
            ))
          )
        }
      </Div>
    </DivGlobal>
  );
}

export default FavoritesRecipes;
