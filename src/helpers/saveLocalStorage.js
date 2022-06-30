import { getFavoriteRecipes, getDoneRecipes,
  getInProgressRecipes } from './getLocalStorage';

export function saveDoneRecipe(doneObj) {
  if (getDoneRecipes() === null) {
    localStorage.setItem('doneRecipes', JSON.stringify([doneObj]));
  } else {
    const checkDoneRecipesDuplicity = getDoneRecipes()
      .some((recipe) => recipe.id === doneObj.id);
    if (!checkDoneRecipesDuplicity) {
      localStorage.setItem(
        'doneRecipes',
        JSON.stringify([
          ...getDoneRecipes(),
          doneObj,
        ]),
      );
    } else {
      console.log('Recipe already exists');
    }
  }
}

export function updateDoneRecipes(updatedFavoriteArray) {
  localStorage.setItem('doneRecipes', JSON.stringify(updatedFavoriteArray));
}

export function saveFavoriteRecipe(favoriteObj) {
  if (getFavoriteRecipes() === null) {
    localStorage.setItem('favoriteRecipes', JSON.stringify([favoriteObj]));
  } else {
    localStorage.setItem(
      'favoriteRecipes',
      JSON.stringify([
        ...getFavoriteRecipes(),
        favoriteObj,
      ]),
    );
  }
}

export function updateFavoriteRecipes(updatedFavoriteArray) {
  localStorage.setItem('favoriteRecipes', JSON.stringify(updatedFavoriteArray));
}

export function saveInProgressRecipe(inProgressObj, type) {
  if (getInProgressRecipes() === null) {
    if (type === 'meals') {
      localStorage.setItem('inProgressRecipes', JSON.stringify({
        meals: inProgressObj,
        cocktails: {},
      }));
    } else if (type === 'drinks') {
      localStorage.setItem('inProgressRecipes', JSON.stringify({
        meals: {},
        cocktails: inProgressObj,
      }));
    }
  } else if (type === 'meals') {
    const inProgressRecipes = getInProgressRecipes();
    const newInProgressRecipe = Object.entries(inProgressObj);
    localStorage.setItem('inProgressRecipes', JSON.stringify({
      meals: {
        ...inProgressRecipes.meals,
        [newInProgressRecipe[0][0]]: newInProgressRecipe[0][1],
      },
      cocktails: { ...getInProgressRecipes().cocktails || {} },
    }));
  } else if (type === 'drinks') {
    const inProgressRecipes = getInProgressRecipes();
    const newInProgressRecipe = Object.entries(inProgressObj);
    localStorage.setItem('inProgressRecipes', JSON.stringify({
      meals: { ...getInProgressRecipes().meals || {} },
      cocktails: {
        ...inProgressRecipes.cocktails,
        [newInProgressRecipe[0][0]]: newInProgressRecipe[0][1],
      },
    }));
  }
}

export function updateInProgressRecipe(updatedFavoriteArray) {
  localStorage.setItem('inProgressRecipes', JSON.stringify(updatedFavoriteArray));
}
