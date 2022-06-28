import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import profileIcon from '../../images/profileIcon.svg';
import { HeaderS } from './Style';

function Header({ title }) {
  const history = useHistory();
  return (
    <HeaderS>
      <button
        type="button"
        src={ profileIcon }
        data-testid="profile-top-btn"
        onClick={ () => history.push('/profile') }
      >
        <img src={ profileIcon } alt="profile" />
      </button>
      <h3 data-testid="page-title">{title}</h3>
    </HeaderS>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
