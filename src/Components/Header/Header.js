import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import profileIconPng from '../../images/profileIconPng.png';
import searchIcon from '../../images/searchIcon.png';
import AppContext from '../../context/AppContext';
import { HeaderS } from './Style';

function Header({ title }) {
  const history = useHistory();
  const [search, setSearch] = useState(false);
  const [searchName, setSearchName] = useState('');
  const [radioResult, setRadioResult] = useState('');

  const { setSearchResult, setRecipeType, setFoodType } = useContext(AppContext);
  // console.log(searchName, radioResult);

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
    <HeaderS>
      <button
        id="profile"
        type="button"
        src={ profileIconPng }
        data-testid="profile-top-btn"
        onClick={ () => history.push('/profile') }
      >
        <img src={ profileIconPng } alt="profile" />
      </button>
      <h3 id="titulo" data-testid="page-title">{title}</h3>
      <button
        id="search"
        type="button"
        src={ searchIcon }
        data-testid="search-top-btn"
        onClick={ () => setSearch(!search) }
      >
        <img src={ searchIcon } alt="search" />
      </button>
      {search && (
        <div id="searchInput">
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
          <input
            data-testid="search-input"
            type="text"
            placeholder="Search"
            value={ searchName }
            onChange={ ({ target }) => setSearchName(target.value) }
          />
          <button
            className="btn btn-dark px-4 mb-2"
            data-testid="exec-search-btn"
            type="button"
            onClick={ () => HandleClick() }
          >
            Search
          </button>
        </div>
      )}
    </HeaderS>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
