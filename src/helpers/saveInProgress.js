const saveInProgress = (inProgressObj) => {
  localStorage.setItem('doneRecipes', JSON.stringify([inProgressObj]));
};

if (typeof module !== 'undefined') {
  module.exports = saveInProgress;
}
