import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import AppContext from '../context/AppContext';
import getInitialRecipes from '../helpers/initialFetch';
import './FoodAndDrinkCard.css';

const MAX_RECIPES = 12;

function FoodAndDrinkCard() {
  const [nameToMap, setNameToMap] = useState('');
  const [mealOrDrink, setMealOrDrink] = useState('');
  const { apiResult, foodType, setApiResult } = useContext(AppContext);
  const history = useHistory();

  if (apiResult && apiResult.length > MAX_RECIPES) {
    const newArrayResultsToMap = apiResult.slice(0, MAX_RECIPES);
    console.log('newArrayResultsToMap', newArrayResultsToMap);
    setApiResult(newArrayResultsToMap);
  }

  useEffect(() => {
    const checkName = () => {
      if (window.location.href.includes('/foods')) {
        setNameToMap('strMeal');
        setMealOrDrink('idMeal');
      } else if (window.location.href.includes('/drinks')) {
        setNameToMap('strDrink');
        setMealOrDrink('idDrink');
      }
    };
    checkName();
  }, [foodType]);

  useEffect(() => {
    const fetchInitialRecipes = async () => {
      const initialRecipes = await getInitialRecipes();
      setApiResult(initialRecipes);
    };

    fetchInitialRecipes();
  }, []);

  const handleNavigate = (item) => {
    console.log(item);
    if (window.location.href.includes('/foods')) {
      history.push(`/foods/${item[mealOrDrink]}`);
    }

    if (window.location.href.includes('/drinks')) {
      history.push(`/drinks/${item[mealOrDrink]}`);
    }
  };
  console.log(mealOrDrink, history);

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
