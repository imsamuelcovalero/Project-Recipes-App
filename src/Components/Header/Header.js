import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import profileIconPng from '../../images/profileIconPng.png';
import searchIcon from '../../images/searchIcon.png';
import AppContext from '../../context/AppContext';
import { HeaderS } from './Style';

function Header({ title, fromNationalities }) {
  const history = useHistory();

  const { search, setSearch } = useContext(AppContext);
  console.log('search', search);

  useEffect(() => {
    setSearch(false);
  }, []);

  return (
    <HeaderS fromNationalities={ fromNationalities }>
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
    </HeaderS>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  fromNationalities: PropTypes.bool.isRequired,
};

export default Header;
