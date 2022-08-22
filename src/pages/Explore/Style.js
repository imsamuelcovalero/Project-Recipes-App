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
  justify-content: center;
`;

export const Div = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  color: #B30E16;
  #buttons {
    button {
      color: #B30E16;
      border: 1px solid #E7BD42 !important;
      background-color: #ffffff;
      width: 160px;
      margin: 0px 4px;
      padding: 12px 5px;
      border-radius: 20px;
      box-shadow: rgb(0 0 0 / 5%) 0 0 8px;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      font-size: 13px;
      transition: all .5s ease;
      text-align: center;
    }
    margin-top: 8px;
    margin-bottom: 8px;
    display: flex;
    gap: 20px;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;
  }
`;
