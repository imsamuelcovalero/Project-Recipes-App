import PropTypes from 'prop-types';
import React, { useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import { getIdDetails, getIdRecomendations } from '../../helpers/getApiResults';
import { getDoneRecipes } from '../../helpers/getLocalStorage';
import StartOrContinue from '../StartOrContinue';
import Compartilhar from '../Compartilhar';
import Favoritar from '../Favoritar';
import './FoodAndDrinkDetails.css';
import { DivS } from './Style';

const MAX_RECIPES_SUGESTION = 6;

function FoodAndDrinkDetails({ tipoReceita, tipoFood, NameToMap, foodOrDrink }) {
  const [ingredientList, setIngredientList] = useState([]);
  const [measuresList, setMeasuresList] = useState('');
  const [recipeDetails, setRecipeDetails] = useState([]);
  const [apiResultRecomendations, setApiResultRecomendations] = useState([]);
  const [isRecipeDone, setIsRecipeDone] = useState(false);
  const { foodType, recipeType } = useContext(AppContext);
  const patchId = useLocation().pathname.split('/')[2];
  const link = window.location.href;

  useEffect(() => {
    const done = getDoneRecipes();
    if (done) {
      const checkDone = done.find((recipeItem) => recipeItem.id === patchId);
      setIsRecipeDone(checkDone);
    }
  }, [isRecipeDone, patchId, tipoFood]);

  useEffect(() => {
    const getRecipes = async () => {
      const detalhesReceita = await getIdDetails(patchId, tipoReceita, tipoFood);
      setRecipeDetails(detalhesReceita);
    };
    getRecipes();
  }, [patchId, recipeType, foodType]);

  useEffect(() => {
    if (tipoFood === 'meals') {
      const getRecipes = async () => {
        const recipes = await getIdRecomendations('thecocktaildb', 'drinks');
        if (recipes && recipes.length > MAX_RECIPES_SUGESTION) {
          const newListRecipes = recipes.slice(0, MAX_RECIPES_SUGESTION);
          setApiResultRecomendations(newListRecipes);
          // setFoodOrDrink('strDrink');
        }
      };
      getRecipes();
    }
    if (tipoFood === 'drinks') {
      const getRecipes = async () => {
        const recipes = await getIdRecomendations('themealdb', 'meals');
        if (recipes && recipes.length > MAX_RECIPES_SUGESTION) {
          const newListRecipes = recipes.slice(0, MAX_RECIPES_SUGESTION);
          setApiResultRecomendations(newListRecipes);
        }
      };
      getRecipes();
    }
  }, [foodType]);

  useEffect(() => {
    const getIngredients = () => {
      const ingredients = [];
      const VINTE = 20;
      if (recipeDetails && recipeDetails.length > 0) {
        for (let i = 1; i <= VINTE; i += 1) {
          if (recipeDetails[0][`strIngredient${i}`] !== ''
            && recipeDetails[0][`strIngredient${i}`] !== null
            && recipeDetails[0][`strIngredient${i}`] !== undefined) {
            ingredients.push(recipeDetails[0][`strIngredient${i}`]);
          }
        }
      }
      setIngredientList(ingredients);
      return ingredients;
    };
    getIngredients();
  }, [recipeDetails]);

  useEffect(() => {
    const getMeasures = () => {
      const measures = [];
      const VINTE = 20;
      if (recipeDetails && recipeDetails.length > 0) {
        for (let i = 1; i <= VINTE; i += 1) {
          if (recipeDetails[0][`strMeasure${i}`] !== ''
          && recipeDetails[0][`strMeasure${i}`] !== null) {
            measures.push(recipeDetails[0][`strMeasure${i}`]);
          }
        }
      }
      setMeasuresList(measures);
      return measures;
    };
    getMeasures();
  }, [recipeDetails]);

  const splitLink = () => {
    if (window.location.href.includes('/foods')) {
      const FOUR = 4;
      const foodLink = recipeDetails[0].strYoutube;
      const splited = foodLink.split('/', FOUR);
      const splitInterrogation = splited[3].split('?v=');
      const newLink = `${splited[0]}${splited[2]}/embed/${splitInterrogation[1]}`;
      return (newLink);
    }
    return true;
  };

  const renderVideo = (
    (recipeDetails)
    && recipeDetails.map((index) => (
      <div key={ index } data-testid="video">
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

  const renderRecomendations = (
    apiResultRecomendations.map((recomendation, index) => (
      <section
        data-testid={ `${index}-recomendation-card` }
        key={ index }
      >
        <img
          id="recomendedImg"
          src={ recomendation[`${foodOrDrink}Thumb`] }
          alt="foodOrDrinkImage"
          width="300" // largura para deletar
          height="300" // altura para deletar
        />
        {foodOrDrink === 'strDrink'
          ? <p>{recomendation.strAlcoholic}</p>
          : <p>{recomendation.strCategory}</p>}
        <p
          data-testid={ `${index}-recomendation-title` }
        >
          {recomendation[`${foodOrDrink}`]}

        </p>
      </section>
    ))
  );

  return (
    <DivS>
      {
        recipeDetails && recipeDetails.length > 0
          && (
            <div>
              {
                recipeDetails.map((item, index) => (
                  <div key={ index }>
                    <img
                      id="recipeImg"
                      data-testid="recipe-photo"
                      src={ item[`${NameToMap}Thumb`] }
                      alt="foodOrDrinkImage"
                      // width="300" // largura para deletar
                      // height="300" // altura para deletar
                    />
                    <div id="xablau">
                      <h3 data-testid="recipe-title">
                        { item[NameToMap] }
                      </h3>
                      <div id="icones">
                        <Compartilhar id="compartilhar" link={ link } />
                        <Favoritar id={ patchId } recipe={ item } />
                      </div>
                    </div>
                    {NameToMap === 'strMeal'
                      ? <p data-testid="recipe-category">{item.strCategory}</p>
                      : <p data-testid="recipe-category">{item.strAlcoholic}</p>}
                    <section>
                      <h4>Ingredients</h4>
                      {ingredientList.map((ingredientItem, index2) => (
                        <p
                          key={ index2 }
                          data-testid={ `${index2}-ingredient-name-and-measure` }
                        >
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
                      <div id="recomendations">
                        {renderRecomendations}
                      </div>
                    </section>
                    <section>
                      {
                        !isRecipeDone
                          && (
                            <StartOrContinue
                              // isRecipeInProgress={ isRecipeInProgress }
                              id={ patchId }
                              ingredients={ ingredientList }
                              foodType={ tipoFood }
                            />
                          )
                      }
                    </section>
                  </div>
                ))
              }
            </div>
          )
      }
    </DivS>
  );
}

FoodAndDrinkDetails.propTypes = {
  tipoReceita: PropTypes.string.isRequired,
  tipoFood: PropTypes.string.isRequired,
  NameToMap: PropTypes.string.isRequired,
  foodOrDrink: PropTypes.string.isRequired,
};

export default FoodAndDrinkDetails;
