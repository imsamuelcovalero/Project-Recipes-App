const fetchIngredients = async (ingredient) => {
  if (window.location.href.includes('/foods')) {
    const INGREDIENT_ENDPOINT = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
    console.log(INGREDIENT_ENDPOINT);
    try {
      const response = await fetch(INGREDIENT_ENDPOINT);
      const { meals } = await response.json();
      return meals;
    } catch (errorRequest) {
      console.log(errorRequest);
    }
  }
  if (window.location.href.includes('/drinks')) {
    const INGREDIENT_ENDPOINT = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`;
    console.log(INGREDIENT_ENDPOINT);
    try {
      const response = await fetch(INGREDIENT_ENDPOINT);
      const { drinks } = await response.json();
      return drinks;
    } catch (errorRequest) {
      console.log(errorRequest);
    }
  }
};

export default fetchIngredients;
