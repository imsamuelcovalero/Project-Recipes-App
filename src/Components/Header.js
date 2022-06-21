import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header({ title }) {
  const history = useHistory();
  const [search, setSearch] = useState(false);

  return (
    <div>
      <button
        type="button"
        src={ profileIcon }
        data-testid="profile-top-btn"
        onClick={ () => history.push('/profile') }
      >
        <img src={ profileIcon } alt="profile" />
      </button>
      <h3 data-testid="page-title">{title}</h3>
      <button
        type="button"
        src={ searchIcon }
        data-testid="search-top-btn"
        onClick={ () => setSearch(!search) }
      >
        <img src={ searchIcon } alt="search" />
      </button>
      {search && (
        <input data-testid="search-input" type="text" placeholder="Search" />
      )}
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
