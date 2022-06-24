import React, { useContext, useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import AppContext from '../context/AppContext';
import getInitialRecipes from '../helpers/initialFetch';
import fetchIngredients from '../helpers/fetchIngredients';
import './FoodAndDrinkCard.css';

function FoodAndDrinkCard() {
  const [nameToMap, setNameToMap] = useState('');
  const [mealOrDrink, setMealOrDrink] = useState('');
  const { apiResult, foodType, setApiResult, clickedIngredient,
    cameFromIngredients, setCameFromIngredients } = useContext(AppContext);
  const history = useHistory();
  const { pathname } = useLocation();

  const MAX_RECIPES = 12;

  if (apiResult && apiResult.length > MAX_RECIPES) {
    const newArrayResultsToMap = apiResult.slice(0, MAX_RECIPES);
    console.log('newArrayResultsToMap', newArrayResultsToMap);
    setApiResult(newArrayResultsToMap);
  }

  useEffect(() => {
    const checkName = () => {
      if (pathname.includes('/foods')) {
        setNameToMap('strMeal');
        setMealOrDrink('idMeal');
      } else if (pathname.includes('/drinks')) {
        setNameToMap('strDrink');
        setMealOrDrink('idDrink');
      }
    };
    checkName();
  }, [foodType]);

  useEffect(() => {
    if (cameFromIngredients) {
      console.log('aqui');
      // fazer o fetch usando a api que busca por ingrediente
      const getIngredients = async () => {
        console.log(clickedIngredient);
        const ingredientRecipes = await fetchIngredients(clickedIngredient);
        console.log(ingredientRecipes);
        setApiResult(ingredientRecipes);
        setCameFromIngredients(false);
      };
      getIngredients();
    }

    if (!cameFromIngredients) {
      const fetchInitialRecipes = async () => {
        const initialRecipes = await getInitialRecipes();
        setApiResult(initialRecipes);
        setCameFromIngredients(false);
      };
      fetchInitialRecipes();
    }
  }, []);

  const handleNavigate = (item) => {
    if (pathname.includes('/foods')) {
      history.push(`/foods/${item[mealOrDrink]}`);
    }

    if (pathname.includes('/drinks')) {
      history.push(`/drinks/${item[mealOrDrink]}`);
    }
  };

  return (
    <div>
      {
        apiResult
          && (
            <div className="card-container">
              {
                apiResult.map((item, index) => (
                  <div
                    data-testid={ `${index}-recipe-card` }
                    key={ index }
                    onClick={ () => handleNavigate(item) }
                    className="card"
                    aria-hidden="true"
                  >
                    <div>
                      <img
                        data-testid={ `${index}-card-img` }
                        src={ item[`${nameToMap}Thumb`] }
                        alt="foodOrDrinkImage"
                      />
                      <p data-testid={ `${index}-card-name` }>
                        { item[nameToMap]}
                      </p>
                    </div>
                  </div>
                ))
              }
            </div>
          )
      }
    </div>
  );
}

// Header.propTypes = {
//   title: PropTypes.string.isRequired,
// };

export default FoodAndDrinkCard;
