const saveFavorite = (favoriteObj) => {
  localStorage.setItem('favoriteRecipes', JSON.stringify([favoriteObj]));
};

if (typeof module !== 'undefined') {
  module.exports = saveFavorite;
}
