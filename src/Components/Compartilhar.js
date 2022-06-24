import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import { useHistory } from 'react-router-dom';
// import AppContext from '../context/AppContext';

function Compartilhar({ link }) {
  console.log(link);
  // const [copySuccess, setCopySuccess] = useState('');
  // const textAreaRef = useRef(null);

  const HandleSubmit = (e) => {
    e.preventDefault();
    global.alert('Link copied!');
    textAreaRef.current.select();
    document.execCommand('copy');
    // This is just personal preference.
    // I prefer to not show the whole text area selected.
    e.target.focus();
    // setCopySuccess('Copied!');
    // navigator.clipboard.writeText(link);
  };

  return (
    <div>
      <button
        type="submit"
        data-testid="share-btn"
        onClick={ HandleSubmit }
      >
        compartilhar
      </button>
    </div>
  );
}

Compartilhar.propTypes = {
  link: PropTypes.string.isRequired,
};

export default Compartilhar;
