import React, { useEffect, useState } from 'react';
import HeaderNoSearch from '../../Components/Header/HeaderNoSearch';
import DoneAndFavoritesCard from
'../../Components/DoneAndFavoritesCard/DoneAndFavoritesCard';
import { getDoneRecipes } from '../../helpers/getLocalStorage';
import { DivGlobal, Div } from './Style';

function DoneRecipes() {
  const [doneRecipes, setDoneRecipes] = useState([]);
  const [filterType, setFilterType] = useState('all');

  useEffect(() => {
    const recipesCompleted = getDoneRecipes() || [];
    if (filterType === 'food') {
      const recipesFiltered = recipesCompleted.filter((recipe) => recipe.type === 'food');
      setDoneRecipes(recipesFiltered);
    } if (filterType === 'drink') {
      const recipesFiltered = recipesCompleted
        .filter((recipe) => recipe.type === 'drink');
      setDoneRecipes(recipesFiltered);
    } if (filterType === 'all') {
      setDoneRecipes(recipesCompleted);
    }
  }, [filterType]);

  return (
    <DivGlobal>
      <Div>
        <HeaderNoSearch title="Done Recipes" shouldRenderMagnifier />
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
          doneRecipes && doneRecipes.length > 0
          && (
            doneRecipes.map((recipe, index) => (
              <DoneAndFavoritesCard
                key={ index }
                index={ index }
                recipe={ recipe }
                doneOrFavorite="done"
              />
            ))
          )
        }
      </Div>
    </DivGlobal>
  );
}

export default DoneRecipes;
