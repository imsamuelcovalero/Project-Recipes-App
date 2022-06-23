import React from 'react';
import HeaderNoSearch from '../Components/HeaderNoSearch';
import Footer from '../Components/Footer';
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
