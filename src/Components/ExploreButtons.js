import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

function ExploreButtons() {
  const history = useHistory();
  const [randomFoodOrDrink, setRandomFoodOrDrink] = useState([]);

  const RANDOM_FOOD_ENDPOINT = 'https://www.themealdb.com/api/json/v1/1/random.php';
  const RANDOM_DRINK_ENDPOINT = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
  const SURPRISE_ME = 'Surprise me!';
  const BY_INGREDIENT = 'By Ingredient';
  const BY_NATIONALITY = 'By Nationality';

  const fetchSurpriseDrink = async () => {
    if (window.location.href.includes('/foods')) {
      try {
        const response = await fetch(RANDOM_FOOD_ENDPOINT);
        const results = await response.json();
        const { meals } = results;
        setRandomFoodOrDrink(meals);
        console.log(meals);
      } catch (error) {
        console.log(error);
      }
    }
    if (window.location.href.includes('/drinks')) {
      try {
        const response = await fetch(RANDOM_DRINK_ENDPOINT);
        const results = await response.json();
        const { drinks } = results;
        setRandomFoodOrDrink(drinks);
        console.log(drinks);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleClick = ({ target }) => {
    if (window.location.href.includes('/foods')) {
      if (target.innerText === SURPRISE_ME) {
        fetchSurpriseDrink();
      }
      if (target.innerText === BY_INGREDIENT) {
        history.push('/explore/foods/ingredients');
      }
      if (target.innerText === BY_NATIONALITY) {
        history.push('/explore/foods/nationalities');
      }
    }

    if (window.location.href.includes('/drinks')) {
      if (target.innerText === SURPRISE_ME) {
        fetchSurpriseDrink();
      }
      if (target.innerText === BY_INGREDIENT) {
        history.push('/explore/drinks/ingredients');
      }
    }
  };

  useEffect(() => {
    if (window.location.href.includes('/foods') && randomFoodOrDrink.length !== 0) {
      history.push(`/foods/${randomFoodOrDrink[0].idMeal}`);
    }
    if (window.location.href.includes('/drinks') && randomFoodOrDrink.length !== 0) {
      history.push(`/drinks/${randomFoodOrDrink[0].idDrink}`);
    }
  }, [randomFoodOrDrink]);

  return (
    <div>
      <button
        data-testid="explore-by-ingredient"
        type="button"
        onClick={ handleClick }
      >
        By Ingredient
      </button>

      {
        window.location.href.includes('/foods') && (
          <button
            data-testid="explore-by-nationality"
            type="button"
            onClick={ handleClick }
          >
            By Nationality
          </button>
        )
      }

      <button
        data-testid="explore-surprise"
        type="button"
        onClick={ handleClick }
      >
        Surprise me!
      </button>
    </div>
  );
}

export default ExploreButtons;
