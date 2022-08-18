import styled from 'styled-components';
import background from './fundo2.jpg';

export const DivGlobal = styled.div`
  background-image: url(${background});
  background-attachment: fixed;
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
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
    padding: 1px;
    padding: 12px 5px;
    border-radius: 20px;
    border: 0;
    background-color: #dbdad6;
    box-shadow: rgb(0 0 0 / 5%) 0 0 8px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 12px;
    transition: all .5s ease;
    text-align: center;
    /* gap: 20px; */
  }
    margin-top: 53px;
    display: flex;
    justify-content: space-evenly;
  }
`;

export default DivGlobal;
