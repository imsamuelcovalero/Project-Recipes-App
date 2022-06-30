import React from 'react';
// import AppContext from '../context/AppContext';
import Header from '../../Components/Header/Header';
import FoodAndDrinkCard from '../../Components/FoodAndDrinkCard/FoodAndDrinkCard';
import Footer from '../../Components/Footer/Footer';
import FilterButtons from '../../Components/FilterButons/FilterButtons';
import { DivGlobal, Div } from './Style';

function Foods() {
  return (
    <DivGlobal>
      <Div>
        <Header title="Foods" />
        <div id="buttons">
          <FilterButtons />
        </div>
        <FoodAndDrinkCard />
        <Footer />
      </Div>
    </DivGlobal>
  );
}

export default Foods;
