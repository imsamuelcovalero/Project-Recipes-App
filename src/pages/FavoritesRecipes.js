import React from 'react';
import HeaderNoSearch from '../Components/HeaderNoSearch';
// import { getFavoriteRecipes } from '../helpers/getLocalStorage';
import { updateFavoriteRecipes } from '../helpers/saveLocalStorage';
import DoneRecipesB from './DoneRecipesB';
import blackHeartIcon from '../images/blackHeartIcon.svg';

function FavoritesRecipes() {
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  const [filterType, setFilterType] = useState('all');

  const mockFavorite = [
    {
      id: 52977,
      type: 'food',
      nationality: 'Turkish',
      category: 'Side',
      alcoholicOrNot: '',
      name: 'Corba',
      image: 'https://www.themealdb.com/images/media/meals/58oia61564916529.jpg',
    },
    {
      id: 178319,
      type: 'drink',
      nationality: '',
      category: 'Cocktail',
      alcoholicOrNot: 'Alcoholic',
      name: 'Aquamarine',
      image: 'https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg',
    },
  ];

  useEffect(() => {
    console.log('filterType', filterType);
    const recipesFavorite = mockFavorite;
    if (filterType === 'food') {
      const recipesFiltered = recipesFavorite.filter((recipe) => recipe.type === 'food');
      console.log('recipesFiltered', recipesFiltered);
      setFavoriteRecipes(recipesFiltered);
    } if (filterType === 'drink') {
      const recipesFiltered = recipesFavorite
        .filter((recipe) => recipe.type === 'drink');
      console.log('recipesFiltered', recipesFiltered);
      setFavoriteRecipes(recipesFiltered);
    } if (filterType === 'all') {
      setFavoriteRecipes(recipesFavorite);
    }
  }, [filterType]);

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
              <DoneRecipesB
                key={ index }
                index={ index }
                recipe={ recipe }
                doneOrFavorite="favorite"
              />
            ))
          )
      }
      <div>
        <button
          type="button"
          onClick={ HandleSubmitFavorite }
          src={ blackHeartIcon }
        >
          <img src={ blackHeartIcon } alt="favorite" />
        </button>
      </div>
    </div>
  );
}

export default FavoritesRecipes;
