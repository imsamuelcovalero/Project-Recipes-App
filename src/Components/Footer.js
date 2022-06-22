import React from 'react';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

function Footer() {
  return (
    <div data-testid="footer">
      <button
        type="button"
        src={ drinkIcon }
        data-testid="drinks-bottom-btn"
        // onClick={ () => history.push('/profile') }
      >
        <img src={ drinkIcon } alt="profile" />
      </button>

      <button
        type="button"
        src={ exploreIcon }
        data-testid="explore-bottom-btn"
        // onClick={ () => history.push('/profile') }
      >
        <img src={ exploreIcon } alt="profile" />
      </button>

      <button
        type="button"
        src={ mealIcon }
        data-testid="food-bottom-btn"
        // onClick={ () => history.push('/profile') }
      >
        <img src={ mealIcon } alt="profile" />
      </button>
    </div>
  );
}

export default Footer;
