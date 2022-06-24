const saveDone = (doneObj) => {
  localStorage.setItem('doneRecipes', JSON.stringify([doneObj]));
};

if (typeof module !== 'undefined') {
  module.exports = saveDone;
}
