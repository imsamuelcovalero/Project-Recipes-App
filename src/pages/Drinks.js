import React from 'react';
import Header from '../Components/Header/Header';
import FoodAndDrinkCard from '../Components/FoodAndDrinkCard';
import Footer from '../Components/Footer/Footer';
import FilterButtons from '../Components/FilterButtons';

function Drinks() {
  return (
    <div>
      <Header title="Drinks" />
      <p>Drinks</p>
      <FilterButtons />
      <FoodAndDrinkCard />
      <Footer />
    </div>
  );
}

export default Drinks;
