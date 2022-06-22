import React from 'react';
import Header from '../Components/Header';
import FoodAndDrinkCard from '../Components/FoodAndDrinkCard';
import Footer from '../Components/Footer';

function Drinks() {
  return (
    <div>
      <Header title="Drinks" />
      <p>Drinks</p>
      <FoodAndDrinkCard />
      <Footer />
    </div>
  );
}

export default Drinks;
