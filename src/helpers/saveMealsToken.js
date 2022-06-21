const saveMealsToken = (token = 1) => {
  localStorage.setItem('mealsToken', token);
};

if (typeof module !== 'undefined') {
  module.exports = saveMealsToken;
}
