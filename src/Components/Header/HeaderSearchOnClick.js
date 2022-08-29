import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import { SearchS } from './Style';

function HeaderSearchOnClick({ fromNationalities }) {
  const history = useHistory();
  const [searchName, setSearchName] = useState('');
  const [radioResult, setRadioResult] = useState('');

  const { setSearchResult, setRecipeType, setFoodType } = useContext(AppContext);

  const HandleClick = () => {
    const { location: { pathname } } = history;
    if (pathname === '/foods') {
      setRecipeType('themealdb');
      setFoodType('meals');
    }
    if (pathname === '/drinks') {
      setRecipeType('thecocktaildb');
      setFoodType('drinks');
    }
    setSearchResult({ searchName, radioResult });
  };

  return (
    <SearchS fromNationalities={ fromNationalities }>
      <input
        id="searchText"
        data-testid="search-input"
        type="text"
        placeholder="Search Recipe"
        value={ searchName }
        onChange={ ({ target }) => setSearchName(target.value) }
      />
      <div id="radios">
        <label htmlFor="ingredient">
          <input
            data-testid="ingredient-search-radio"
            type="radio"
            id="ingredient"
            name="option"
            value="ingredient"
            onChange={ ({ target }) => setRadioResult(target.value) }
          />
          Ingredient
        </label>
        <label htmlFor="name">
          <input
            data-testid="name-search-radio"
            type="radio"
            id="name"
            name="option"
            value="name"
            onChange={ ({ target }) => setRadioResult(target.value) }
          />
          Name
        </label>
        <label htmlFor="first-letter">
          <input
            data-testid="first-letter-search-radio"
            type="radio"
            id="first-letter"
            name="option"
            value="first-letter"
            onChange={ ({ target }) => setRadioResult(target.value) }
          />
          First Letter
        </label>
      </div>
      <button
        data-testid="exec-search-btn"
        type="button"
        onClick={ () => HandleClick() }
      >
        Search
      </button>
    </SearchS>
  );
}

HeaderSearchOnClick.propTypes = {
  fromNationalities: PropTypes.bool.isRequired,
};

export default HeaderSearchOnClick;
