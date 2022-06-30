import React from 'react';
import { useHistory } from 'react-router-dom';
import drinkIcon from '../../images/drinkIcon.png';
import exploreIcon from '../../images/exploreIcon.png';
import mealIcon from '../../images/mealIcon.png';
import FooterS from './Style';
// import './Footer.css';

function Footer() {
  const history = useHistory();
  return (
    <FooterS data-testid="footer" className="footer-container">
      <button
        id="drink"
        type="button"
        src={ drinkIcon }
        data-testid="drinks-bottom-btn"
        onClick={ () => history.push('/drinks') }
      >
        <img src={ drinkIcon } alt="profile" />
      </button>
      <button
        id="explore"
        type="button"
        src={ exploreIcon }
        data-testid="explore-bottom-btn"
        onClick={ () => history.push('/explore') }
      >
        <img src={ exploreIcon } alt="profile" />
      </button>
      <button
        id="meal"
        type="button"
        src={ mealIcon }
        data-testid="food-bottom-btn"
        onClick={ () => history.push('/foods') }
      >
        <img src={ mealIcon } alt="profile" />
      </button>
    </FooterS>
  );
}

export default Footer;
