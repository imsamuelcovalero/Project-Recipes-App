import React, { useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AppContext from '../context/AppContext';
import { getIdDetails, getIdRecomendations } from '../helpers/getApiResults';

const MAX_RECIPES_SUGESTION = 6;

function FoodAndDrinkDetails() {
  const [nameToMap, setNameToMap] = useState('');
  const [ingredientList, setIngredientList] = useState([]);
  const [measuresList, setMeasuresList] = useState('');
  const [recipe, setRecipe] = useState([]);
  const [apiResultRecomendations, setApiResultRecomendations] = useState([]);
  const [foodOrDrink, setFoodOrDrink] = useState('');
  const { foodType, recipeType } = useContext(AppContext);
  const patchId = useLocation().pathname.split('/')[2];
  // console.log(patchId);

  useEffect(() => {
    const getRecipes = async () => {
      const receita = await getIdDetails(patchId, recipeType, foodType);
      console.log(receita);
      setRecipe(receita);
    };
    getRecipes();
  }, [patchId, recipeType, foodType]);

  // console.log(recipe);

  useEffect(() => {
    if (foodType === 'meals') {
      const getRecipes = async () => {
        const recipes = await getIdRecomendations('thecocktaildb', 'drinks');
        if (recipes && recipes.length > MAX_RECIPES_SUGESTION) {
          const newListRecipes = recipes.slice(0, MAX_RECIPES_SUGESTION);
          setApiResultRecomendations(newListRecipes);
          setFoodOrDrink('strDrink');
          console.log('newListRecipes', newListRecipes);
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
          setFoodOrDrink('strMeal');
          // console.log('newListRecipes', newListRecipes);
          // setApiResult(newArrayResultsToMap);
        }
        // console.log(recipes);
      };
      getRecipes();
    }
  }, [foodType]);

  console.log(apiResultRecomendations);

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
      const capitalize = (str) => {
        if (typeof str !== 'string') {
          return '';
        }
        return str.charAt(0).toUpperCase() + str.substr(1);
      };
      if (recipe.length > 0) {
        for (let i = 1; i <= VINTE; i += 1) {
          if (recipe[0][`strIngredient${i}`] !== ''
            && recipe[0][`strIngredient${i}`] !== null
            && recipe[0][`strIngredient${i}`] !== undefined) {
            // ingredients.push(recipe[0][`strIngredient${i}`]);
            ingredients.push(capitalize(recipe[0][`strIngredient${i}`]));
          }
        }
      }
      // console.log('ingredients', ingredients);
      setIngredientList(ingredients);
      return ingredients;
    };
    getIngredients();
  }, [recipe]);

  useEffect(() => {
    const getMeasures = () => {
      const measures = [];
      const VINTE = 20;
      if (recipe.length > 0) {
        for (let i = 1; i <= VINTE; i += 1) {
          if (recipe[0][`strMeasure${i}`] !== ''
          && recipe[0][`strMeasure${i}`] !== null) {
            measures.push(recipe[0][`strMeasure${i}`]);
          }
        }
      }
      // console.log('measures', measures);
      setMeasuresList(measures);
      return measures;
    };
    getMeasures();
  }, [recipe]);

  useEffect(() => {
    const checkName = () => {
      if (foodType === 'meals') {
        setNameToMap('strMeal');
      } else if (foodType === 'drinks') {
        setNameToMap('strDrink');
      }
    };
    checkName();
    // console.log(recipe);
  }, [foodType]);

  const splitLink = () => {
    if (window.location.href.includes('/foods')) {
      const FOUR = 4;
      const foodLink = recipe[0].strYoutube;
      const splited = foodLink.split('/', FOUR);
      const splitInterrogation = splited[3].split('?v=');
      const newLink = `${splited[0]}${splited[2]}/embed/${splitInterrogation[1]}`;
      return (newLink);
    }
    return true;
  };

  const renderVideo = (
    recipe.map((index) => (
      <div key={ index }>
        <section>
          <h4>Video</h4>
          <iframe
            title="video"
            src={ splitLink() }
            width="400" // largura para deletar
            height="250" // altura para deletar
          >
            <track kind="captions" />
          </iframe>
        </section>
      </div>
    ))
  );

  const renderRecomendations = (
    apiResultRecomendations.map((recomendation, index) => (
      <section data-testid={ `${index}-recomendation-card` } key={ index }>
        <img
          src={ recomendation[`${foodOrDrink}Thumb`] }
          alt="foodOrDrinkImage"
          width="300" // largura para deletar
          height="300" // altura para deletar
        />
        {foodOrDrink === 'strDrink'
          ? <p>{recomendation.strAlcoholic}</p>
          : <p>{recomendation.strCategory}</p>}
        <p>{recomendation[`${foodOrDrink}`]}</p>
      </section>
    ))
  );

  // console.log(ingredientList);
  return (
    <div>
      {
        recipe
          && (
            <div>
              {
                recipe.map((item, index) => (
                  <div key={ index }>
                    <img
                      data-testid="recipe-photo"
                      src={ item[`${nameToMap}Thumb`] }
                      alt="foodOrDrinkImage"
                      width="300" // largura para deletar
                      height="300" // altura para deletar
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
                    {nameToMap === 'strMeal'
                      ? <p data-testid="recipe-category">{item.strCategory}</p>
                      : <p data-testid="recipe-category">{item.strAlcoholic}</p>}
                    <section>
                      <h4>Ingredients</h4>
                      {ingredientList.map((ingredientItem, index2) => (
                        <p key={ index2 }>
                          {`- ${ingredientItem}
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
                    {window.location.href.includes('/foods') && renderVideo}
                    <section>
                      <h4>Recommended</h4>
                      {renderRecomendations}
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
