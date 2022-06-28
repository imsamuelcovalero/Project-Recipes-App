import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import HeaderNoSearch from '../Components/Header/HeaderNoSearch';

function Explore() {
  return (
    <div>
      <HeaderNoSearch title="Explore" shouldRenderMagnifier />
      <Link to="/explore/foods">
        <button
          type="button"
          data-testid="explore-foods"
        >
          Explore Foods

        </button>
      </Link>
      <Link to="/explore/drinks">
        <button
          type="button"
          data-testid="explore-drinks"
        >
          Explore Drinks

        </button>
      </Link>
      <Footer />
    </div>
  );
}

export default Explore;
