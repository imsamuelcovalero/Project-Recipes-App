export function getDoneRecipes() { JSON.parse(localStorage.getItem('doneRecipes')); }

export function getFavoriteRecipes() {
  JSON.parse(localStorage.getItem('favoriteRecipes'));
}

export function getInProgressRecipes() {
  JSON.parse(localStorage.getItem('inProgressRecipes'));
}
