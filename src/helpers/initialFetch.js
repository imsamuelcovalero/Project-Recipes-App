const INITIAL_FOODS_ENDPOINT = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const INITIAL_DRINKS_ENDPOINT = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const getInitialRecipes = async () => {
  if (window.location.href.includes('/foods')) {
    try {
      const response = await fetch(INITIAL_FOODS_ENDPOINT);
      const results = await response.json();
      // console.log(results.meals);
      return results.meals;
    } catch (errorRequest) {
      console.log(errorRequest);
    }
  }

  if (window.location.href.includes('/drinks')) {
    try {
      const response = await fetch(INITIAL_DRINKS_ENDPOINT);
      const results = await response.json();
      // console.log(results.drinks);
      return results.drinks;
    } catch (errorRequest) {
      console.log(errorRequest);
    }
  }
};

export default getInitialRecipes;
