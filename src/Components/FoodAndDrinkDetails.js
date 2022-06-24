import React, { useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AppContext from '../context/AppContext';
// import oneMeal from './oneMeal';
import { getIdDetails, getIdRecomendations } from '../helpers/getApiResults';

const MAX_RECIPES_SUGESTION = 6;

function FoodAndDrinkDetails() {
  const [nameToMap, setNameToMap] = useState('');
  const [ingredientList, setIngredientList] = useState([]);
  const [measuresList, setMeasuresList] = useState('');
  const { apiResult, foodType, recipeType } = useContext(AppContext);
  const apiResultObject = apiResult[0];
  const [apiResultRecomendations, setApiResultRecomendations] = useState([]);
  // const oneMealObject = oneMeal.meals[0];

  const patchId = useLocation().pathname.split('/')[2];

  useEffect(() => {
    const getRecipes = async () => {
      const recipe = await getIdDetails(patchId, recipeType, foodType);
      console.log(recipe);
    };
    getRecipes();
  }, [patchId, recipeType, foodType]);

  useEffect(() => {
    if (foodType === 'meals') {
      const getRecipes = async () => {
        const recipes = await getIdRecomendations('thecocktaildb', 'drinks');
        if (recipes && recipes.length > MAX_RECIPES_SUGESTION) {
          const newListRecipes = recipes.slice(0, MAX_RECIPES_SUGESTION);
          setApiResultRecomendations(newListRecipes);
          console.log('newListRecipes', newListRecipes);
          // setApiResult(newArrayResultsToMap);
        }
        // console.log(recipes);
      };
      getRecipes();
    }
    if (foodType === 'drinks') {
      const getRecipes = async () => {
        const recipes = await getIdRecomendations('themealdb', 'meals');
        if (recipes && recipes.length > MAX_RECIPES_SUGESTION) {
          const newListRecipes = recipes.slice(0, MAX_RECIPES_SUGESTION);
          setApiResultRecomendations(newListRecipes);
          // console.log('newListRecipes', newListRecipes);
          // setApiResult(newArrayResultsToMap);
        }
        // console.log(recipes);
      };
      getRecipes();
    }
  }, [foodType]);

  useEffect(() => {
    const getIngredients = () => {
      const ingredients = [];
      const VINTE = 20;
      for (let i = 1; i <= VINTE; i += 1) {
        if (apiResultObject[`strIngredient${i}`] !== ''
          && apiResultObject[`strIngredient${i}`] !== null) {
          ingredients.push(apiResultObject[`strIngredient${i}`]);
        }
      }
      // console.log('ingredients', ingredients);
      setIngredientList(ingredients);
      return ingredients;
    };
    getIngredients();
  }, [apiResultObject]);

  useEffect(() => {
    const getMeasures = () => {
      const measures = [];
      const VINTE = 20;
      for (let i = 1; i <= VINTE; i += 1) {
        if (apiResultObject[`strMeasure${i}`] !== ''
        && apiResultObject[`strMeasure${i}`] !== null) {
          measures.push(apiResultObject[`strMeasure${i}`]);
        }
      }
      // console.log('measures', measures);
      setMeasuresList(measures);
      return measures;
    };
    getMeasures();
  }, [apiResultObject]);

  useEffect(() => {
    const checkName = () => {
      if (foodType === 'meals') {
        setNameToMap('strMeal');
      } else if (foodType === 'drinks') {
        setNameToMap('strDrink');
      }
    };
    checkName();
    // console.log(apiResultObject);
  }, [foodType]);

  const splitLink = () => {
    const FOUR = 4;
    const foodLink = apiResultObject.strYoutube;
    const splited = foodLink.split('/', FOUR);
    const splitInterrogation = splited[3].split('?v=');
    const newLink = `${splited[0]}${splited[2]}/embed/${splitInterrogation[1]}`;
    return (newLink);
  };

  const renderVideo = (
    apiResult.map((index) => (
      <div key={ index }>
        <section>
          <h4>Video</h4>
          <iframe
            title="video"
            src={ splitLink() }
          >
            <track kind="captions" />
          </iframe>
        </section>
      </div>
    ))
  );
  // console.log(ingredientList);
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
                    <section>
                      <h4>Ingredients</h4>
                      {ingredientList.map((ingredientItem, index2) => (
                        <p key={ index2 }>
                          {`${ingredientItem}
                         - ${measuresList[index2]}`}
                        </p>
                      ))}
                    </section>
                    <section>
                      <h4>Instructions</h4>
                      <p data-testid="instructions">
                        {item.strInstructions}
                      </p>
                    </section>
                    {foodType === 'meals' && renderVideo}
                    <section>
                      <p data-testid={ `${index}-recomendation-card` }>recomendação 1</p>
                      <p data-testid={ `${index}-recomendation-card` }>recomendação 2</p>
                    </section>
                    <section>
                      <button
                        type="button"
                        data-testid="start-recipe-btn"
                      >
                        Start Recipe
                      </button>
                    </section>
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
