export function getDone() { JSON.parse(localStorage.getItem('doneRecipes')); }

export function getFavorite() { JSON.parse(localStorage.getItem('favoriteRecipes')); }

export function getInProgress() { JSON.parse(localStorage.getItem('inProgressRecipes')); }
