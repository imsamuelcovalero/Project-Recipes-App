import React, { useContext } from 'react';
import Header from '../../Components/Header/Header';
import FoodAndDrinkCard from '../../Components/FoodAndDrinkCard/FoodAndDrinkCard';
import Footer from '../../Components/Footer/Footer';
import FilterButtons from '../../Components/FilterButons/FilterButtons';
import HeaderSearchOnClick from '../../Components/Header/HeaderSearchOnClick';
import AppContext from '../../context/AppContext';
import { DivGlobal, Div } from './Style';

function Drinks() {
  const { search } = useContext(AppContext);
  return (
    <DivGlobal>
      <Div>
        <Header title="Drinks" />
        {search && <HeaderSearchOnClick />}
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
