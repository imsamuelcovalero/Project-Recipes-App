import styled from 'styled-components';

export const DivS = styled.div`
  width: 100%;
  input[type="checkbox"] {
    all: revert;
  }
  #imgDiv {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  #imagem {
    margin-top: 10px;
    width: 300px;
    border-radius: 20px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    margin-bottom: 10px;
  }
  #subDiv {
/*     margin: 1px solid red; */
    padding: 0 16px;
    #tituloEicones {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin-top: 8px;
    }
    #titulo {
      font-weight: bold;
      margin-bottom: 0;
    }
    #icones {
      /* margin-top: 13px; */
      display: flex;
      flex-direction: row;
      /* margin-right: 16px; */
      gap: 16px;
    }
    #categoria {
      font-size: 19px;
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
      align-items: center;
      margin-top: 8px;
    }
    #boldTitle {
      font-weight: bold;
    }
    #finishButtonDiv {

    }
  }
`;

export const DivStart = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  #startButton {
    background-color: #888;
    color: #E7BD42;
    font-weight: bold;
    border: 2px solid #E7BD42;
    padding: 1px;
    border-radius: 14px;
    padding: 4px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  }
`;
