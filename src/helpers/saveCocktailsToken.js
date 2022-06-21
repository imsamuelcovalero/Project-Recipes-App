const saveCocktailsToken = (token = 1) => {
  localStorage.setItem('cocktailsToken', token);
};

if (typeof module !== 'undefined') {
  module.exports = saveCocktailsToken;
}
