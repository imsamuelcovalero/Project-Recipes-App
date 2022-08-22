import styled from 'styled-components';
import background from './fundo007Food.png';

export const DivGlobal = styled.div`
  background-image: url(${background});
  background-attachment: fixed;
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 640px;
  width: 100vw;
  align-items: center;
  background-color: #dbdad6;
`;

export const Div = styled.div`
  width: 100%;
  align-items: center;
  justify-content: center;
  justify-items: center;
  #buttons {
    button {
      width: 150px;
      margin: 0px 4px;
      padding: 12px 5px;
      border-radius: 20px;
      color: #B30E16;
      border: 1px solid #E7BD42;
      background-color: #ffffff;
      box-shadow: rgb(0 0 0 / 5%) 0 0 8px;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      font-size: 11px;
      transition: all .5s ease;
      text-align: center;
    }
    margin-top: 58px;
    margin-bottom: 8px;
    display: flex;
    justify-content: space-evenly;
  }
`;
