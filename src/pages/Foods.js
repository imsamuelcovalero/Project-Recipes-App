import React from 'react';
// import AppContext from '../context/AppContext';
import Header from '../Components/Header';
import FoodAndDrinkCard from '../Components/FoodAndDrinkCard';
import Footer from '../Components/Footer';
import FilterButtons from '../Components/FilterButtons';

function Foods() {
  return (
    <div>
      <Header title="Foods" />
      <h3>Foods Page</h3>
      <FilterButtons />
      <FoodAndDrinkCard />
      <Footer />
    </div>
  );
}

export default Foods;
