import React from 'react';
import HeaderNoSearch from '../../Components/Header/HeaderNoSearch';
import Footer from '../../Components/Footer/Footer';
import ExploreIngredients from '../../Components/ExploreIngredients/ExploreIngredients';
import { DivGlobal, Div } from './Style';

function DrinksIngredients() {
  return (
    <DivGlobal>
      <HeaderNoSearch title="Explore Ingredients" shouldRenderMagnifier />
      <Div>
        <ExploreIngredients />
      </Div>
      <Footer />
    </DivGlobal>
  );
}

export default DrinksIngredients;
