import React from 'react';
import HeaderNoSearch from '../Components/Header/HeaderNoSearch';
import Footer from '../Components/Footer/Footer';
import ExploreButtons from '../Components/ExploreButtons';

function ExploreDrinks() {
  return (
    <div>
      <HeaderNoSearch title="Explore Drinks" shouldRenderMagnifier />
      <ExploreButtons />
      <Footer />
    </div>
  );
}

export default ExploreDrinks;
