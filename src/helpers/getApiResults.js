export async function getIdDetails(id, tipoReceita, tipoFood) {
  // console.log(id, recipeType, foodType);
  try {
    const response = await fetch(`https://www.${tipoReceita}.com/api/json/v1/1/lookup.php?i=${id}`);
    const results = await response.json();
    // console.log(results);
    return (results[tipoFood]);
  } catch (errorRequest) {
    console.log(errorRequest);
  }
}
export async function getIdRecomendations(recipeType, foodType) {
  // console.log(recipeType, foodType);
  try {
    const response = await fetch(`https://www.${recipeType}.com/api/json/v1/1/search.php?s=`);
    const results = await response.json();
    // console.log(results);
    return (results[foodType]);
  } catch (errorRequest) {
    console.log(errorRequest);
  }
}
