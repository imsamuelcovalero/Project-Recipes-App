import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import AppContext from '../context/AppContext';

function ExploreIngredients() {
  const [ingredients, setIngredients] = useState([]);
  const { pathname } = useLocation();
  const history = useHistory();
  const { setClickedIngredient, setCameFromIngredients } = useContext(AppContext);

  const FOODS_INGREDIENTS_ENDPOINT = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';
  const DRINKS_INGREDIENTS_ENDPOINT = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';
  const MAX_INGREDIENTS = 12;

  useEffect(() => {
    const fetchIngredients = async () => {
      if (pathname.includes('/foods')) {
        try {
          const response = await fetch(FOODS_INGREDIENTS_ENDPOINT);
          const results = await response.json();
          const newArrayOfIngredients = results.meals.slice(0, MAX_INGREDIENTS);
          console.log(newArrayOfIngredients);
          setIngredients(newArrayOfIngredients);
        } catch (errorRequest) {
          console.log(errorRequest);
        }
      }

      if (pathname.includes('/drinks')) {
        try {
          const response = await fetch(DRINKS_INGREDIENTS_ENDPOINT);
          const results = await response.json();
          const newArrayOfIngredients = results.drinks.slice(0, MAX_INGREDIENTS);
          console.log(newArrayOfIngredients);
          setIngredients(newArrayOfIngredients);
        } catch (errorRequest) {
          console.log(errorRequest);
        }
      }
    };

    fetchIngredients();
  }, []);

  const handleClick = (ingredient) => {
    setCameFromIngredients(true);
    if (pathname.includes('/foods')) {
      setClickedIngredient(ingredient.strIngredient);
      history.push('/foods');
    }
    if (pathname.includes('/drinks')) {
      setClickedIngredient(ingredient.strIngredient1);
      history.push('/drinks');
    }
  };

  return (
    <div>
      {
        ingredients.map((ingredient, index) => (
          <div
            key={ index }
            data-testid={ `${index}-ingredient-card` }
            onClick={ () => handleClick(ingredient) }
            aria-hidden="true"
          >
            {
              pathname.includes('/foods')
                ? <p data-testid={ `${index}-card-name` }>{ingredient.strIngredient}</p>
                : <p data-testid={ `${index}-card-name` }>{ingredient.strIngredient1}</p>
            }
            {
              pathname.includes('/foods')
                ? (
                  <img
                    src={ `https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}-Small.png` }
                    alt={ `${ingredient.strIngredient}` }
                    data-testid={ `${index}-card-img` }
                  />
                )
                : (
                  <img
                    src={ `https://www.thecocktaildb.com/images/ingredients/${ingredient.strIngredient1}-Small.png` }
                    alt={ `${ingredient.strIngredient1}` }
                    data-testid={ `${index}-card-img` }
                  />
                )
            }
          </div>
        ))
      }
    </div>
  );
}

export default ExploreIngredients;
