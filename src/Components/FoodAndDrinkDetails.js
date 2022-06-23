import React, { useContext, useState, useEffect } from 'react';
import AppContext from '../context/AppContext';
import oneMeal from './oneMeal';

function FoodAndDrinkDetails() {
  const [nameToMap, setNameToMap] = useState('');
  const { apiResult, foodType } = useContext(AppContext);
  const oneMealObject = oneMeal.meals[0];

  console.log(oneMealObject);

  useEffect(() => {
    const getIngredients = () => {
      const ingredients = [];
      const VINTE = 20;
      for (let i = 1; i <= VINTE; i += 1) {
        if (oneMealObject[`strIngredient${i}`] !== ''
          && oneMealObject[`strIngredient${i}`] !== null) {
          ingredients.push(oneMealObject[`strIngredient${i}`]);
        }
      }
      console.log('ingredients', ingredients);
      return ingredients;
    };
    getIngredients();
  }, [oneMealObject]);

  useEffect(() => {
    const getMeasures = () => {
      const measures = [];
      const VINTE = 20;
      for (let i = 1; i <= VINTE; i += 1) {
        if (oneMealObject[`strMeasure${i}`] !== ''
        && oneMealObject[`strMeasure${i}`] !== null) {
          measures.push(oneMealObject[`strMeasure${i}`]);
        }
      }
      console.log('measures', measures);
      return measures;
    };
    getMeasures();
  }, [oneMealObject]);

  // const xablauFunc1 = () => {
  //   const ingredients = [];
  //   const VINTE = 20;
  //   for (let i = 1; i <= VINTE; i += 1) {
  //     if (oneMealArray[`strIngredient${i}`] !== ''
  //       && oneMealArray[`strIngredient${i}`] !== null) {
  //       ingredients.push(oneMealArray[`strIngredient${i}`]);
  //     }
  //   }
  //   console.log('ingredients', ingredients);
  //   return ingredients;
  // };

  // const xablauFunc2 = () => {
  //   const measures = [];
  //   const VINTE = 20;
  //   for (let i = 1; i <= VINTE; i += 1) {
  //     if (oneMealArray[`strMeasure${i}`] !== ''
  //       && oneMealArray[`strMeasure${i}`] !== null) {
  //       measures.push(oneMealArray[`strMeasure${i}`]);
  //     }
  //   }
  //   return measures;
  // };

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
