import styled from 'styled-components';
import background from './fundo007Food.png';

export const DivGlobal = styled.div`
  /* background-image: url(${background}); */
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
  h2 {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
  }
  #buttons {
    button {
      color: #E7BD42;
      /* border: 1px solid red; */
      width: 160px;
      margin: 0px 4px;
      border: 1px solid #B30E16 !important;
      /* padding: 1px; */
      padding: 12px 5px;
      border-radius: 20px;
      border: 0;
      background-color: #ffffff;
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
    #header {
      border: 1px solid red;
      position: relative;
      top: 0;
    }
  }
  #logoProfile {
    padding-bottom: 40px;
  }
`;
