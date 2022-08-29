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
  margin-top: 26px;
  #header {
    font-size: 20px !important;
  }
`;
