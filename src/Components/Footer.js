import React from 'react';
import { useHistory } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import './Footer.css';

function Footer() {
  const history = useHistory();
  return (
    <div data-testid="footer" className="footer-container">
      <button
        type="button"
        src={ drinkIcon }
        data-testid="drinks-bottom-btn"
        onClick={ () => history.push('/drinks') }
      >
        <img src={ drinkIcon } alt="profile" />
      </button>

      <button
        type="button"
        src={ exploreIcon }
        data-testid="explore-bottom-btn"
        onClick={ () => history.push('/explore') }
      >
        <img src={ exploreIcon } alt="profile" />
      </button>

      <button
        type="button"
        src={ mealIcon }
        data-testid="food-bottom-btn"
        onClick={ () => history.push('/foods') }
      >
        <img src={ mealIcon } alt="profile" />
      </button>
    </div>
  );
}

export default Footer;
