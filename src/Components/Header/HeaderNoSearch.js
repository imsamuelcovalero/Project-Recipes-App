import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import profileIconPng from '../../images/profileIconPng.png';
import { HeaderS } from './Style';

function Header({ title }) {
  const history = useHistory();
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
      <h3 id="titleNoSearch" data-testid="page-title">{title}</h3>
    </HeaderS>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
