import React from 'react';
import HeaderNoSearch from '../../Components/Header/HeaderNoSearch';
import Footer from '../../Components/Footer/Footer';
import ExploreButtons from '../../Components/ExploreButtons/ExploreButtons';
import { DivGlobal, Div } from './Style';

function ExploreDrinks() {
  return (
    <DivGlobal>
      <Div>
        <HeaderNoSearch title="Explore Drinks" shouldRenderMagnifier />
        <div id="buttons">
          <ExploreButtons />
        </div>
        <Footer />
      </Div>
    </DivGlobal>
  );
}

export default ExploreDrinks;
