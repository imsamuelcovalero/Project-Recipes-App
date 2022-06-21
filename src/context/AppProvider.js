import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

const INGREDIENT_API = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=';
const NAME_API = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const FIRST_LETTER_API = 'https://www.themealdb.com/api/json/v1/1/search.php?f=';

function AppProvider({ children }) {
  const [searchResult, setSearchResult] = useState({});
  // const [searchName, setSearchName] = useState('');
  // const [radioResult, setRadioResult] = useState('');
  const [apiResult, setApiResult] = useState('');

  useEffect(() => {
    const getRecipes = async () => {
      if (searchResult.radioResult === 'ingredient') {
        try {
          const response = await fetch(`${INGREDIENT_API}${searchResult.searchName}`);
          const results = await response.json();
          console.log(results);
          setApiResult(results);
        } catch (errorRequest) {
          console.log(errorRequest);
        }
      }

      if (searchResult.radioResult === 'name') {
        try {
          const response = await fetch(`${NAME_API}${searchResult.searchName}`);
          const results = await response.json();
          console.log(results);
          setApiResult(results);
        } catch (errorRequest) {
          console.log(errorRequest);
        }
      }

      if (searchResult.radioResult === 'first-letter') {
        try {
          const response = await fetch(`${FIRST_LETTER_API}${searchResult.searchName}`);
          const results = await response.json();
          console.log(results);
          setApiResult(results);
        } catch (errorRequest) {
          global.alert('Your search must have only 1 (one) character');
        }
      }
    };
    getRecipes();
  }, [searchResult]);

  console.log(apiResult);

  const contextValue = {
    setSearchResult,
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
