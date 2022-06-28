import React from 'react';
// import AppContext from '../context/AppContext';
import Header from '../Components/Header/Header';
import FoodAndDrinkCard from '../Components/FoodAndDrinkCard';
import Footer from '../Components/Footer/Footer';
import FilterButtons from '../Components/FilterButtons';

function Foods() {
  return (
    <div>
      <Header title="Foods" />
      <FilterButtons />
      <FoodAndDrinkCard />
      <Footer />
    </div>
  );
}

export default Foods;
