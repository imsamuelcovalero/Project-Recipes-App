import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import copy from 'clipboard-copy';
import shareIcon from '../images/shareIcon.svg';

function Compartilhar({ link }) {
  // console.log(link);
  const { pathname } = useLocation();
  const [message, setMessage] = useState('');

  const HandleSubmit = (e) => {
    e.preventDefault();
    if (pathname.includes('/in-progress')) {
      copy(link.split('/in-progress')[0]);
      return setMessage('Link copied!');
    }
    copy(link);
    setMessage('Link copied!');
  };

  return (
    <div>
      <button
        type="submit"
        data-testid="share-btn"
        onClick={ HandleSubmit }
      >
        <img src={ shareIcon } alt="share" />
      </button>
      <p>{message}</p>
    </div>
  );
}

Compartilhar.propTypes = {
  link: PropTypes.string.isRequired,
};

export default Compartilhar;
