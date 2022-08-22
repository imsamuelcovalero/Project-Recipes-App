import React from 'react';
import HeaderNoSearch from '../../Components/Header/HeaderNoSearch';
import Footer from '../../Components/Footer/Footer';
import ExploreButtons from '../../Components/ExploreButtons/ExploreButtons';
import { DivGlobal, Div } from './Style';

function ExploreFoods() {
  return (
    <DivGlobal>
      <Div>
        <HeaderNoSearch title="Explore Foods" shouldRenderMagnifier />
        <div id="buttons">
          <ExploreButtons />
        </div>
        <Footer />
      </Div>
    </DivGlobal>
  );
}

export default ExploreFoods;
