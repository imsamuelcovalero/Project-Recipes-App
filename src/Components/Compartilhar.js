import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import clipboardCopy from 'clipboard-copy';
import shareIcon from '../images/shareIcon.svg';

function Compartilhar({ link }) {
  // console.log(link);
  const [message, setMessage] = useState('');

  const copy = require('clipboard-copy');

  const HandleSubmit = (e) => {
    e.preventDefault();
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
