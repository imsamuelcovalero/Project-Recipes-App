const getIdDetails = async (id, recipeType, foodType) => {
  console.log(id, recipeType, foodType);
  try {
    const response = await fetch(`https://www.${recipeType}.com/api/json/v1/1/lookup.php?i=${id}`);
    const results = await response.json();
    console.log(results);
    return (results[foodType]);
  } catch (errorRequest) {
    console.log(errorRequest);
  }
};

export default getIdDetails;
