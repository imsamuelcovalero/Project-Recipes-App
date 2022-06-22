import React from 'react';
import HeaderNoSearch from '../Components/HeaderNoSearch';
import Footer from '../Components/Footer';

function ExploreFoods() {
  return (
    <div>
      <HeaderNoSearch title="Explore Foods" shouldRenderMagnifier />
      <Footer />
    </div>
  );
}

export default ExploreFoods;
