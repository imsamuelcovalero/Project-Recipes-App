import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [searchResult, setSearchResult] = useState({});
  const [recipeType, setRecipeType] = useState('');
  const [apiResult, setApiResult] = useState('');
  const [foodType, setFoodType] = useState('');
  const [cameFromIngredients, setCameFromIngredients] = useState(false);
  const [clickedIngredient, setClickedIngredient] = useState('');
  const [shareMessage, setShareMessage] = useState('');

  const history = useHistory();

  const handleId = () => {
    if (foodType === '') {
      return;
    }
    if (apiResult && Object.values(apiResult).length === 1) {
      // console.log(recipeType);
      // console.log(apiResult);
      if (recipeType === 'themealdb') {
        const currentMealId = apiResult[0].idMeal;
        history.push(`/foods/${currentMealId}`);
      }
      if (recipeType === 'thecocktaildb') {
        const currentDrinkId = apiResult[0].idDrink;
        history.push(`/drinks/${currentDrinkId}`);
      }
    }
    if (!apiResult) {
      // console.log(Object.values(apiResult));
      // console.log('xablau');
      global.alert('Sorry, we haven\'t found any recipes for these filters.');
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
          // console.log(results[foodType]);
          setApiResult(results[foodType]);
        } catch (errorRequest) {
          console.log(errorRequest);
        }
      }

      if (searchResult.radioResult === 'name') {
        try {
          const response = await fetch(`https://www.${recipeType}.com/api/json/v1/1/search.php?s=${searchResult.searchName}`);
          const results = await response.json();
          // console.log(results[foodType]);
          setApiResult(results[foodType]);
        } catch (errorRequest) {
          console.log(errorRequest);
        }
      }

      if (searchResult.radioResult === 'first-letter') {
        try {
          const response = await fetch(`https://www.${recipeType}.com/api/json/v1/1/search.php?f=${searchResult.searchName}`);
          const results = await response.json();
          // console.log(results[foodType]);
          setApiResult(results[foodType]);
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
    apiResult,
    foodType,
    setApiResult,
    recipeType,
    cameFromIngredients,
    setCameFromIngredients,
    clickedIngredient,
    setClickedIngredient,
    shareMessage,
    setShareMessage,
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
