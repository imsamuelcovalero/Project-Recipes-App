export function saveDoneRecipe(doneObj) {
  localStorage.setItem('doneRecipes', JSON.stringify([doneObj]));
}

export function saveFavoriteRecipe(favoriteObj) {
  localStorage.setItem('favoriteRecipes', JSON.stringify([favoriteObj]));
}

export function saveInProgressRecipe(inProgressObj) {
  localStorage.setItem('inProgressRecipes', JSON.stringify([inProgressObj]));
}
