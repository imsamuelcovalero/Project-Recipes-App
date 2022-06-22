import React from 'react';
import Footer from '../Components/Footer';
import HeaderNoSearch from '../Components/HeaderNoSearch';

function Explore() {
  return (
    <div>
      <HeaderNoSearch title="Explore" shouldRenderMagnifier />
      <Footer />
    </div>
  );
}

export default Explore;
