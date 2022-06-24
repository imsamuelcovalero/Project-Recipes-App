export function getDoneRecipes() {
  return JSON.parse(localStorage.getItem('doneRecipes'));
}

export function getFavoriteRecipes() {
  return JSON.parse(localStorage.getItem('favoriteRecipes'));
}

export function getInProgressRecipes() {
  return JSON.parse(localStorage.getItem('inProgressRecipes'));
}
