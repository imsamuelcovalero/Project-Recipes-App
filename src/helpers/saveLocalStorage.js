export function saveDone(doneObj) {
  localStorage.setItem('doneRecipes', JSON.stringify([doneObj]));
}

export function saveFavorite(favoriteObj) {
  localStorage.setItem('favoriteRecipes', JSON.stringify([favoriteObj]));
}

export function saveInProgress(inProgressObj) {
  localStorage.setItem('inProgressRecipes', JSON.stringify([inProgressObj]));
}
