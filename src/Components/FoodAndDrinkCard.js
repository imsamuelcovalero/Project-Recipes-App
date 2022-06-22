import React, { useContext, useState, useEffect } from 'react';
import AppContext from '../context/AppContext';
import oneMeal from './oneMeal';

const MAX_RECIPES = 12;

function FoodAndDrinkCard() {
  const [nameToMap, setNameToMap] = useState('');
  // const [arrayResultsToMap, setArrayResultsToMap] = useState([]);
  const { apiResult, foodType, setApiResult } = useContext(AppContext);
  console.log(oneMeal);
  // console.log(apiResult);

  if (apiResult && apiResult.length > MAX_RECIPES) {
    const newArrayResultsToMap = apiResult.slice(0, MAX_RECIPES);
    // console.log('newArrayResultsToMap', newArrayResultsToMap);
    setApiResult(newArrayResultsToMap);
  }

  useEffect(() => {
    const checkName = () => {
      if (foodType === 'meals') {
        setNameToMap('strMeal');
      } else if (foodType === 'drinks') {
        setNameToMap('strDrink');
      }
    };
    checkName();
  }, [foodType]);

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

export default FoodAndDrinkCard;
