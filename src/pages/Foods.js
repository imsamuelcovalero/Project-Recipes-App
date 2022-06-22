import React from 'react';
import Header from '../Components/Header';
import FoodAndDrinkCard from '../Components/FoodAndDrinkCard';
import Footer from '../Components/Footer';

function Foods() {
  return (
    <div>
      <Header title="Foods" />
      <h3>Foods Page</h3>
      <FoodAndDrinkCard />
      <Footer />
    </div>
  );
}

export default Foods;
