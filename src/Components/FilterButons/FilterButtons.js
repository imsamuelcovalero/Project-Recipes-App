import React, { useEffect, useState, useContext } from 'react';
import AppContext from '../../context/AppContext';
import getInitialRecipes from '../../helpers/initialFetch';
import { DivS } from './Style';

function FilterButtons() {
  const [filterOptions, setFilterOptions] = useState([]);
  const [lastClicked, setLastClicked] = useState('');
  const { setApiResult } = useContext(AppContext);

  const FOODS_CATEGORIES_ENDPOINT = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
  const DRINKS_CATEGORIES_ENDPOINT = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
  const SEARCH_FOODS_BY_CATEGORIES = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=';
  const SEARCH_DRINKS_BY_CATEGORIES = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=';
  const MAX_BTNS = 5;
  const MAX_RECIPES = 12;

  useEffect(() => {
    const fetchCategories = async () => {
      if (window.location.href.includes('/foods')) {
        try {
          const response = await fetch(FOODS_CATEGORIES_ENDPOINT);
          const results = await response.json();
          const newArrayOfCategories = results.meals.slice(0, MAX_BTNS);
          setFilterOptions(newArrayOfCategories);
        } catch (errorRequest) {
          console.log(errorRequest);
        }
      }

      if (window.location.href.includes('/drinks')) {
        try {
          const response = await fetch(DRINKS_CATEGORIES_ENDPOINT);
          const results = await response.json();
          const newArrayOfCategories = results.drinks.slice(0, MAX_BTNS);
          setFilterOptions(newArrayOfCategories);
        } catch (errorRequest) {
          console.log(errorRequest);
        }
      }
    };

    fetchCategories();
  }, []);

  const handleClick = async (category) => {
    const finalEndpoint = category.strCategory;

    setLastClicked(category.strCategory);

    if (window.location.href.includes('/foods')) {
      try {
        const response = await fetch(`${SEARCH_FOODS_BY_CATEGORIES}${finalEndpoint}`);
        const results = await response.json();
        const newArrayOfCategories = results.meals.slice(0, MAX_RECIPES);
        setApiResult(newArrayOfCategories);
      } catch (errorRequest) {
        console.log(errorRequest);
      }
    }

    if (window.location.href.includes('/drinks')) {
      try {
        const response = await fetch(`${SEARCH_DRINKS_BY_CATEGORIES}${finalEndpoint}`);
        const results = await response.json();
        const newArrayOfCategories = results.drinks.slice(0, MAX_RECIPES);
        setApiResult(newArrayOfCategories);
      } catch (errorRequest) {
        console.log(errorRequest);
      }
    }

    if (category.strCategory === lastClicked) {
      const initialRecipes = await getInitialRecipes();
      setApiResult(initialRecipes);
    }
  };

  const handleResetFilters = async () => {
    const initialRecipes = await getInitialRecipes();
    setApiResult(initialRecipes);
  };

  return (
    <DivS>
      <button
        id="filterButton"
        type="button"
        data-testid="All-category-filter"
        onClick={ handleResetFilters }
      >
        All
      </button>
      {
        filterOptions && filterOptions.map((category) => (
          <div key={ category.strCategory }>
            <button
              id="filterButton"
              type="button"
              data-testid={ `${category.strCategory}-category-filter` }
              onClick={ () => handleClick(category) }
            >
              {category.strCategory}
            </button>
          </div>
        ))
      }
    </DivS>
  );
}

export default FilterButtons;
