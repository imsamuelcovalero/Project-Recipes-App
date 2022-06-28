import React from 'react';
import HeaderNoSearch from '../Components/Header/HeaderNoSearch';
import Footer from '../Components/Footer/Footer';
import ExploreIngredients from '../Components/ExploreIngredients';

function FoodsIngredients() {
  return (
    <div>
      <HeaderNoSearch title="Explore Ingredients" shouldRenderMagnifier />
      <ExploreIngredients />
      <Footer />
    </div>
  );
}

export default FoodsIngredients;
