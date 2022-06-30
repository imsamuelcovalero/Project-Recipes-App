import React, { useEffect, useState, useContext } from 'react';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import FoodAndDrinkCard from '../Components/FoodAndDrinkCard/FoodAndDrinkCard';
import AppContext from '../context/AppContext';

const INITIAL_FOODS_ENDPOINT = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

function Nationalities() {
  const { setApiResult } = useContext(AppContext);
  const [nationalities, setNationalities] = useState([]);
  const [options, setOptions] = useState('All');
  // const [state, setState] = useState([]);
  const NATIONALITIES_ENDPOINT = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${options}`;
  useEffect(() => {
    const getNationalities = async () => {
      try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
        const json = await response.json();
        console.log(json);
        const arrayOfNationalities = [];
        json.meals.forEach((element) => {
          arrayOfNationalities.push(element.strArea);
        });
        const uniqueArr = [...new Set(arrayOfNationalities)];
        console.log(arrayOfNationalities);
        console.log(uniqueArr);
        setNationalities(uniqueArr);
      } catch (error) {
        console.log(error);
      }
    };
    getNationalities();
    console.log(nationalities);
  }, []);

  useEffect(() => {
    const handleRecipes = async () => {
      const MAX_RECIPES = 12;
      if (options === 'All') {
        try {
          const response = await fetch(INITIAL_FOODS_ENDPOINT);
          const json = await response.json();
          const newArrayResultsToMap = json.meals.slice(0, MAX_RECIPES);
          setApiResult(newArrayResultsToMap);
        } catch (error) {
          console.log(error);
        }
      } else if (options !== 'All') {
        try {
          const response = await fetch(NATIONALITIES_ENDPOINT);
          const json = await response.json();
          const newArrayResultsToMap = json.meals.slice(0, MAX_RECIPES);
          setApiResult(newArrayResultsToMap);
        } catch (error) {
          console.log(error);
        }
      }
    };

    handleRecipes();
  }, [options]);

  const handleNationalityChange = ({ target }) => {
    setOptions(target.value);
    console.log(options);
  };

  return (
    <div>
      <Header title="Explore Nationalities" shouldRenderMagnifier />
      <select
        onChange={ handleNationalityChange }
        data-testid="explore-by-nationality-dropdown"
      >
        <option data-testid="All-option" value="All">All</option>
        { nationalities && (
          nationalities.map((nationality, index) => (
            <option
              data-testid={ `${nationality}-option` }
              key={ index }
              name="nationality"
              value={ nationality }
            >
              { nationality }
            </option>
          ))
        )}
      </select>
      <FoodAndDrinkCard />
      <Footer />
    </div>
  );
}

export default Nationalities;
