import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import HeaderNoSearch from '../../Components/Header/HeaderNoSearch';
import { DivGlobal, Div } from './Style';

function Explore() {
  return (
    <DivGlobal>
      <Div>
        <HeaderNoSearch title="Explore" id="header" shouldRenderMagnifier />
        <div id="buttons">
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
        </div>
        <Footer />
      </Div>
    </DivGlobal>
  );
}

export default Explore;
