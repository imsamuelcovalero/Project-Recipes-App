import React from 'react';
import HeaderNoSearch from '../Components/HeaderNoSearch';
import DoneRecipesB from './DoneRecipesB';
// import { getDoneRecipes } from '../helpers/getLocalStorage';

function DoneRecipes() {
  // const [doneRecipes, setDoneRecipes] = useState([]);

  // useEffect(() => {
  //   const recipesCompleted = getDoneRecipes();
  //   setDoneRecipes(recipesCompleted);
  // }, []);

  const mockDone = [
    {
      id: 52977,
      type: 'food',
      nationality: 'Turkish',
      category: 'Side',
      alcoholicOrNot: '',
      name: 'Corba',
      image: 'https://www.themealdb.com/images/media/meals/58oia61564916529.jpg',
      doneDate: '25/06/2022',
      tags: 'Soup',
    },
    {
      id: 178319,
      type: 'drink',
      nationality: '',
      category: 'Cocktail',
      alcoholicOrNot: 'Alcoholic',
      name: 'Aquamarine',
      image: 'https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg',
      doneDate: '25/06/2022',
      tags: 'null',
    },
  ];

  return (
    <div>
      <HeaderNoSearch title="Done Recipes" shouldRenderMagnifier />
      <button
        data-testid="filter-by-all-btn"
        type="submit"
        onClick={ () => console.log('xablau') }
      >
        All
      </button>
      <button
        data-testid="filter-by-food-btn"
        type="submit"
        onClick={ () => console.log('xablau') }
      >
        Food
      </button>
      <button
        data-testid="filter-by-drink-btn"
        type="submit"
        onClick={ () => console.log('xablau') }
      >
        REMOVER FILTROS
      </button>
      {
        mockDone && mockDone.length > 0
          && (
            mockDone.map((recipe, index) => (
              <DoneRecipesB key={ index } index={ index } recipe={ recipe } />
            ))
          )
      }
      <DoneRecipesB />
    </div>
  );
}

export default DoneRecipes;
