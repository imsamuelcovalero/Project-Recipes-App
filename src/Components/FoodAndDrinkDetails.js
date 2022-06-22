import React, { useContext, useState, useEffect } from 'react';
import AppContext from '../context/AppContext';

function FoodAndDrinkDetails() {
  const [nameToMap, setNameToMap] = useState('');
  const { apiResult, foodType } = useContext(AppContext);
  console.log(foodType);
  // teste

  useEffect(() => {
    const checkName = () => {
      if (foodType === 'meals') {
        setNameToMap('strMeal');
      } else if (foodType === 'drinks') {
        setNameToMap('strDrink');
      }
    };
    checkName();
    console.log(apiResult);
  }, [foodType]);

  return (
    <div>
      {
        apiResult
          && (
            <div>
              {
                apiResult.map((item, index) => (
                  <div key={ index }>
                    <img
                      data-testid="recipe-photo"
                      src={ item[`${nameToMap}Thumb`] }
                      alt="foodOrDrinkImage"
                    />
                    <p data-testid="recipe-title">
                      { item[nameToMap] }
                    </p>
                    <button
                      type="button"
                      data-testid="share-btn"
                    >
                      compartilhar
                    </button>
                    <button
                      type="button"
                      data-testid="favorite-btn"
                    >
                      favoritar
                    </button>
                    <p data-testid="recipe-category">
                      { item.strCategory }
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

export default FoodAndDrinkDetails;
