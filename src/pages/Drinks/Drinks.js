import React from 'react';
import Header from '../../Components/Header/Header';
import FoodAndDrinkCard from '../../Components/FoodAndDrinkCard/FoodAndDrinkCard';
import Footer from '../../Components/Footer/Footer';
import FilterButtons from '../../Components/FilterButons/FilterButtons';
import { DivGlobal, Div } from './Style';

function Drinks() {
  return (
    <DivGlobal>
      <Div>
        <Header title="Drinks" />
        <div id="buttons">
          <FilterButtons />
        </div>
        <FoodAndDrinkCard />
        <Footer />
      </Div>
    </DivGlobal>
  );
}

export default Drinks;
