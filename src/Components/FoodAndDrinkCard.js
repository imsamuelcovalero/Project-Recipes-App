import React, { useContext, useState, useEffect } from 'react';
import AppContext from '../context/AppContext';
import getInitialRecipes from '../helpers/initialFetch';
// import PropTypes from 'prop-types';
// import { useHistory } from 'react-router-dom';

const MAX_RECIPES = 12;

function FoodAndDrinkCard() {
  const [nameToMap, setNameToMap] = useState('');
  // const [arrayResultsToMap, setArrayResultsToMap] = useState([]);
  const { apiResult, foodType, setApiResult } = useContext(AppContext);

  if (apiResult && apiResult.length > MAX_RECIPES) {
    const newArrayResultsToMap = apiResult.slice(0, MAX_RECIPES);
    console.log('newArrayResultsToMap', newArrayResultsToMap);
    setApiResult(newArrayResultsToMap);
  }

  useEffect(() => {
    const checkName = () => {
      if (window.location.href.includes('/foods')) {
        setNameToMap('strMeal');
      } else if (window.location.href.includes('/drinks')) {
        setNameToMap('strDrink');
      }
    };
    checkName();
  }, [foodType]);

  useEffect(() => {
    const teste = async () => {
      const initialRecipes = await getInitialRecipes();
      setApiResult(initialRecipes);
    };

    teste();
  }, []);

  return (
    <div>
      {
        apiResult
          && (
            <div>
              {
                apiResult.map((item, index) => (
                  <div data-testid={ `${index}-recipe-card` } key={ index }>
                    <img
                      data-testid={ `${index}-card-img` }
                      src={ item[`${nameToMap}Thumb`] }
                      alt="foodOrDrinkImage"
                    />
                    <p data-testid={ `${index}-card-name` }>
                      { item[nameToMap]}
                    </p>
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
