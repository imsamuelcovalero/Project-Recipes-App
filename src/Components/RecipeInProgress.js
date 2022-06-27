import PropTypes from 'prop-types';
import React, { useContext, useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import AppContext from '../context/AppContext';
import { getIdDetails } from '../helpers/getApiResults';
import Compartilhar from './Compartilhar';
import Favoritar from './Favoritar';

function RecipeInProgress({ tipoReceita, tipoFood, NameToMap }) {
  const [ingredientList, setIngredientList] = useState([]);
  const [measuresList, setMeasuresList] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [recipe, setRecipe] = useState([]);
  const [checkedIngredients, setCheckedIngredients] = useState([]);
  const { foodType, recipeType } = useContext(AppContext);
  const patchId = useLocation().pathname.split('/')[2];
  const history = useHistory();
  const link = window.location.href;

  useEffect(() => {
    const getRecipes = async () => {
      const receita = await getIdDetails(patchId, tipoReceita, tipoFood);
      setRecipe(receita);
    };
    getRecipes();
  }, [patchId, recipeType, foodType]);

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

  const handleClick = () => {
    history.push('/done-recipes');
  };

  const handleCheck = ({ target }) => {
    if (target.checked === true) {
      setCheckedIngredients([...checkedIngredients, target.name]);
      console.log(checkedIngredients);
    }
    if (target.checked === false) {
      const newArr = checkedIngredients
        .filter((ingredient) => ingredient !== target.name);
      setCheckedIngredients(newArr);
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
                      onClick={ handleClick }
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
