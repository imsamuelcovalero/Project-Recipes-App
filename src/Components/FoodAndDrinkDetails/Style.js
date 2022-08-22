import styled from 'styled-components';
import background from './fundo007Food.png';

export const DivS = styled.div`
  background-image: url(${background});
  background-attachment: fixed;
  position: relative;
  height: auto;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  align-items: center;
  justify-content: center;
  color: #B30E16;
  font-size: 18px;
  #video {
    width: 100%;
    display: flex;
    justify-content: center
  }
  #imagem {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  #recipeImg {
    margin-top: 10px;
    width: 300px;
    border-radius: 20px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    margin-bottom: 10px;
    /* border: 1px solid red; */
  }
  #recomendations {
    margin-top: 15px;
    display: flex;
    flex-flow: row nowrap;
    overflow-x: auto;
    /* justify-content: center; */
    #recomendationsPosition {
      width: 100%;
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      justify-content: center
    }
  }
  #recomendedImg {
    border-radius: 8px;
    height: 230px;
    max-width: 180px;
  }
  #startButtonDiv {
    /* border: 1px solid red; */
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 0;
    /* margin-bottom: 0; */
    position: fixed;
  }
  #tituloEicones {
    /* border: 1px solid red; */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 8px;
    #receitaNome {
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
  }
  #categoria {
    font-size: 19px;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    margin-top: 8px;
  }
  #instructions {
    text-align: justify;
  }
  #boldTitle {
    font-weight: bold;
  }
  #subDiv {
    background-color: rgb(219, 218, 214, 0.97);
    /* border: 2px solid red; */
    padding: 0 16px;
    border-radius: 20px;
  }
  #carrousselDiv {
    background-color: #f5f5f5;
    border: 1px solid #888;
    border-radius: 10px;
    margin-bottom: 35px;
  }
`;

export const StartOrContinueS = styled.div`
  #startButton {
    background-color: #B30E16;
    color: #E7BD42;
    font-weight: bold;
    padding: 1px;
    border-radius: 14px;
    border: 2px solid #E7BD42;
    padding: 3px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  }
`;
