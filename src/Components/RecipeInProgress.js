import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { getIdDetails } from '../helpers/getApiResults';
import { saveInProgressRecipe } from
'../helpers/saveLocalStorage';
import { getInProgressRecipes } from '../helpers/getLocalStorage';
import Compartilhar from './Compartilhar';
import Favoritar from './Favoritar';

function RecipeInProgress({ tipoReceita, tipoFood, NameToMap }) {
  const [ingredientList, setIngredientList] = useState([]);
  const [measuresList, setMeasuresList] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [recipe, setRecipe] = useState([]);
  const [checkedIngredients, setCheckedIngredients] = useState([]);
  const [mealsOrCocktails, setMealsOrCocktails] = useState('');
  const patchId = useLocation().pathname.split('/')[2];
  const history = useHistory();
  const link = window.location.href;

  const newMeal = {
    [patchId]: [],
  };

  const newCocktail = {
    [patchId]: [],
  };

  useEffect(() => {
    const inProgress = getInProgressRecipes();
    // console.log('inProgress', inProgress);
    if (inProgress) {
      // console.log('tipoFood', tipoFood);
      if (tipoFood === 'meals') {
        setMealsOrCocktails('meals');
        const checkInProgress = Object.entries(inProgress)[0].find(
          (inProgressRecipe) => Object.keys(inProgressRecipe)[0] === patchId,
        );
        // console.log('checkInProgress', checkInProgress);
        if (!checkInProgress) {
          saveInProgressRecipe(newMeal, tipoFood);
          setMealsOrCocktails('meals');
        }
      } else if (tipoFood === 'drinks') {
        // console.log('inProgress', inProgress);
        setMealsOrCocktails('cocktails');
        const checkInProgress = Object.entries(inProgress)[1].find(
          (inProgressRecipe) => Object.keys(inProgressRecipe)[0] === patchId,
        );
        if (!checkInProgress) {
          saveInProgressRecipe(newCocktail, tipoFood);
          setMealsOrCocktails('cocktails');
        }
      }
    } else if (tipoFood === 'meals') {
      saveInProgressRecipe(newMeal, tipoFood);
      // console.log(getInProgressRecipes());
      setMealsOrCocktails('meals');
    } else if (tipoFood === 'drinks') {
      saveInProgressRecipe(newCocktail, tipoFood);
      // console.log(getInProgressRecipes());
      setMealsOrCocktails('cocktails');
    }
  });

  useEffect(() => {
    const getRecipes = async () => {
      const receita = await getIdDetails(patchId, tipoReceita, tipoFood);
      setRecipe(receita);
    };
    getRecipes();
  }, [patchId, tipoReceita, tipoFood]);

  useEffect(() => {
    const getIngredients = () => {
      const ingredients = [];
      const VINTE = 20;
      if (recipe && recipe.length > 0) {
        for (let i = 1; i <= VINTE; i += 1) {
          if (recipe[0][`strIngredient${i}`] !== ''
            && recipe[0][`strIngredient${i}`] !== null
            && recipe[0][`strIngredient${i}`] !== undefined) {
            ingredients.push(recipe[0][`strIngredient${i}`]);
          }
        }
      }
      setIngredientList(ingredients);
      return ingredients;
    };
    getIngredients();
  }, [recipe]);

  useEffect(() => {
    const getMeasures = () => {
      const measures = [];
      const VINTE = 20;
      if (recipe && recipe.length > 0) {
        for (let i = 1; i <= VINTE; i += 1) {
          if (recipe[0][`strMeasure${i}`] !== ''
          && recipe[0][`strMeasure${i}`] !== null) {
            measures.push(recipe[0][`strMeasure${i}`]);
          }
        }
      }
      setMeasuresList(measures);
      return measures;
    };
    getMeasures();
  }, [recipe]);

  const handleCheck = ({ target }) => {
    const inProgressRecipes = getInProgressRecipes();
    // console.log('inProgressRecipes', inProgressRecipes);
    if (target.checked === true) {
      const newData = [...inProgressRecipes[`${mealsOrCocktails}`][patchId], target.name];
      // console.log('newData', newData);
      setCheckedIngredients(newData);
      if (tipoFood === 'meals') {
        const newFood = {
          [patchId]: newData,
        };
        saveInProgressRecipe(newFood, tipoFood);
        // console.log(getInProgressRecipes());
      } else if (tipoFood === 'drinks') {
        const newDrink = {
          [patchId]: newData,
        };
        // console.log('newDrink', newDrink);
        saveInProgressRecipe(newDrink, tipoFood);
        // console.log(getInProgressRecipes());
      }
    }
    if (target.checked === false) {
      // console.log('inProgressRecipes', inProgressRecipes);
      const newArr = inProgressRecipes[`${mealsOrCocktails}`][patchId]
        .filter((ingredient) => ingredient !== target.name);
      // console.log('newArr', newArr);
      setCheckedIngredients(newArr);
      if (tipoFood === 'meals') {
        const newFood = {
          [patchId]: newArr,
        };
        saveInProgressRecipe(newFood, tipoFood);
        // console.log(getInProgressRecipes());
      } else if (tipoFood === 'drinks') {
        const newDrink = {
          [patchId]: newArr,
        };
        saveInProgressRecipe(newDrink, tipoFood);
        // console.log(getInProgressRecipes());
      }
    }
  };

  useEffect(() => {
    if (ingredientList.length > 0
        && ingredientList.length === checkedIngredients.length) {
      return setIsDisabled(false);
    }
    setIsDisabled(true);
  }, [checkedIngredients]);

  return (
    <div>
      {
        recipe && recipe.length > 0
          && (
            <div>
              {
                recipe.map((item, index) => (
                  <div key={ index }>
                    <img
                      data-testid="recipe-photo"
                      src={ item[`${NameToMap}Thumb`] }
                      alt="foodOrDrinkImage"
                      width="300" // largura para deletar
                      height="300" // altura para deletar
                    />
                    <p data-testid="recipe-title">
                      { item[NameToMap] }
                    </p>
                    <Compartilhar link={ link } />
                    <Favoritar id={ patchId } recipe={ item } />
                    {NameToMap === 'strMeal'
                      ? <p data-testid="recipe-category">{item.strCategory}</p>
                      : <p data-testid="recipe-category">{item.strAlcoholic}</p>}
                    <section>
                      <h4>Ingredients</h4>
                      {ingredientList.map((ingredientItem, index2) => (
                        <div key={ index2 } data-testid={ `${index2}-ingredient-step` }>
                          <input
                            type="checkbox"
                            checked={
                              getInProgressRecipes()[`${mealsOrCocktails}`][patchId]
                                .includes(ingredientItem)
                            }
                            id={ ingredientItem }
                            name={ ingredientItem }
                            onChange={ (event) => handleCheck(event) }
                          />
                          <label
                            htmlFor={ ingredientItem }
                          >
                            {`${ingredientItem} - ${measuresList[index2]}`}
                          </label>
                        </div>
                      ))}
                    </section>
                    <section>
                      <h4>Instructions</h4>
                      <p data-testid="instructions">
                        {item.strInstructions}
                      </p>
                    </section>
                    <button
                      data-testid="finish-recipe-btn"
                      type="button"
                      disabled={ isDisabled }
                      onClick={ () => history.push('/done-recipes') }
                    >
                      Finish Recipe
                    </button>
                  </div>
                ))
              }
            </div>
          )
      }
    </div>
  );
}

RecipeInProgress.propTypes = {
  tipoReceita: PropTypes.string.isRequired,
  tipoFood: PropTypes.string.isRequired,
  NameToMap: PropTypes.string.isRequired,
};

export default RecipeInProgress;
