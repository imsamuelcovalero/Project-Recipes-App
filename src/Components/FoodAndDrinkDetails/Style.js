import styled from 'styled-components';

export const DivS = styled.div`
align-items: center;
justify-content: center;
#recipeImg {
  width: 300px;
}
#recomendations {
  display: flex;
  flex-flow: row nowrap;
  overflow-x: auto;
}

#recomendedImg {
  height: 230px;
  max-width: 180px;
}

#startButton {
  bottom: 0;
  margin-bottom: 0;
  position: fixed;
}

#xablau {
  border: 1px solid red;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  #icones {
    margin-top: 5px;
    display: flex;
    flex-direction: row;
    margin-right: 8px;
  }
}
`;

export const SpanS = styled.span`
  border: 1px solid red;
  background-color: red;
`;
