import { getFavoriteRecipes, getDoneRecipes,
  getInProgressRecipes } from './getLocalStorage';

export function saveDoneRecipe(doneObj) {
  if (getDoneRecipes() === null) {
    localStorage.setItem('doneRecipes', JSON.stringify([doneObj]));
  } else {
    localStorage.setItem(
      'doneRecipes',
      JSON.stringify([
        ...getDoneRecipes(),
        doneObj,
      ]),
    );
  }
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
      }));
    } else if (type === 'drinks') {
      localStorage.setItem('inProgressRecipes', JSON.stringify({
        cocktails: inProgressObj,
      }));
    }
  } else if (type === 'meals') {
    localStorage.setItem('inProgressRecipes', JSON.stringify({
      meals: [...getInProgressRecipes().meals, inProgressObj],
    }));
  } else if (type === 'drinks') {
    localStorage.setItem('inProgressRecipes', JSON.stringify({
      cocktails: [...getInProgressRecipes().cocktails, inProgressObj],
    }));
  }
}

export function updateInProgressRecipe(updatedFavoriteArray) {
  localStorage.setItem('favoriteRecipes', JSON.stringify(updatedFavoriteArray));
}
