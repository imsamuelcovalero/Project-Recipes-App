import React from 'react';
import HeaderNoSearch from '../Components/HeaderNoSearch';
import Footer from '../Components/Footer';
import ExploreIngredients from '../Components/ExploreIngredients';

function DrinksIngredients() {
  return (
    <div>
      <HeaderNoSearch title="Explore Ingredients" shouldRenderMagnifier />
      <ExploreIngredients />
      <Footer />
    </div>
  );
}

export default DrinksIngredients;
