import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [searchResult, setSearchResult] = useState({});
  const [recipeType, setRecipeType] = useState('');
  const [apiResult, setApiResult] = useState('');
  const [foodType, setFoodType] = useState('');
  const history = useHistory();

  const handleId = () => {
    if (foodType === '') {
      return;
    }
    if (Object.values(apiResult[foodType]).length === 1) {
      console.log(recipeType);
      if (recipeType === 'themealdb') {
        const currentMealId = apiResult.meals[0].idMeal;
        history.push(`/foods/${currentMealId}`);
      }
      if (recipeType === 'thecocktaildb') {
        const currentDrinkId = apiResult.drinks[0].idDrink;
        history.push(`/drinks/${currentDrinkId}`);
      }
    } else if ((Object.values(apiResult[foodType]).length > 1)) {
      console.log('xablau');
    }
  };

  useEffect(() => {
    handleId();
  }, [apiResult]);

  useEffect(() => {
    const getRecipes = async () => {
      if (searchResult.radioResult === 'ingredient') {
        try {
          const response = await fetch(`https://www.${recipeType}.com/api/json/v1/1/filter.php?i=${searchResult.searchName}`);
          const results = await response.json();
          console.log(results);
          setApiResult(results);
        } catch (errorRequest) {
          console.log(errorRequest);
        }
      }

      if (searchResult.radioResult === 'name') {
        try {
          const response = await fetch(`https://www.${recipeType}.com/api/json/v1/1/search.php?s=${searchResult.searchName}`);
          const results = await response.json();
          console.log(results);
          setApiResult(results);
        } catch (errorRequest) {
          console.log(errorRequest);
        }
      }

      if (searchResult.radioResult === 'first-letter') {
        try {
          const response = await fetch(`https://www.${recipeType}.com/api/json/v1/1/search.php?f=${searchResult.searchName}`);
          const results = await response.json();
          console.log(results);
          setApiResult(results);
        } catch (errorRequest) {
          global.alert('Your search must have only 1 (one) character');
        }
      }
    };
    getRecipes();
  }, [searchResult, recipeType]);

  // console.log(apiResult);

  const contextValue = {
    setSearchResult,
    setRecipeType,
    setFoodType,
  };

  return (
    <AppContext.Provider value={ contextValue }>
      {children}
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;
