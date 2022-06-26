import React, { useEffect, useState } from 'react';
import HeaderNoSearch from '../Components/HeaderNoSearch';
import DoneRecipesB from './DoneRecipesB';
import { getDoneRecipes } from '../helpers/getLocalStorage';

function DoneRecipes() {
  const [doneRecipes, setDoneRecipes] = useState([]);
  const [filterType, setFilterType] = useState('all');

  // const mockDone = [
  //   {
  //     id: 52977,
  //     type: 'food',
  //     nationality: 'Turkish',
  //     category: 'Side',
  //     alcoholicOrNot: '',
  //     name: 'Corba',
  //     image: 'https://www.themealdb.com/images/media/meals/58oia61564916529.jpg',
  //     doneDate: '25/06/2022',
  //     tags: 'Soup, Turkish, Side',
  //   },
  //   {
  //     id: 178319,
  //     type: 'drink',
  //     nationality: '',
  //     category: 'Cocktail',
  //     alcoholicOrNot: 'Alcoholic',
  //     name: 'Aquamarine',
  //     image: 'https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg',
  //     doneDate: '25/06/2022',
  //     tags: 'null',
  //   },
  // ];

  useEffect(() => {
    console.log('filterType', filterType);
    const recipesCompleted = getDoneRecipes() || [];
    if (filterType === 'food') {
      const recipesFiltered = recipesCompleted.filter((recipe) => recipe.type === 'food');
      console.log('recipesFiltered', recipesFiltered);
      setDoneRecipes(recipesFiltered);
    } if (filterType === 'drink') {
      const recipesFiltered = recipesCompleted
        .filter((recipe) => recipe.type === 'drink');
      console.log('recipesFiltered', recipesFiltered);
      setDoneRecipes(recipesFiltered);
    } if (filterType === 'all') {
      setDoneRecipes(recipesCompleted);
    }
  }, [filterType]);

  return (
    <div>
      <HeaderNoSearch title="Done Recipes" shouldRenderMagnifier />
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
        doneRecipes && doneRecipes.length > 0
          && (
            doneRecipes.map((recipe, index) => (
              <DoneRecipesB key={ index } index={ index } recipe={ recipe } />
            ))
          )
      }
    </div>
  );
}

export default DoneRecipes;
