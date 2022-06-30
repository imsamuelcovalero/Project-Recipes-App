import React from 'react';
import HeaderNoSearch from '../Components/Header/HeaderNoSearch';
import Footer from '../Components/Footer/Footer';
import ExploreButtons from '../Components/ExploreButtons';

function ExploreFoods() {
  return (
    <div>
      <HeaderNoSearch title="Explore Foods" shouldRenderMagnifier />
      <ExploreButtons />
      <Footer />
    </div>
  );
}

export default ExploreFoods;
