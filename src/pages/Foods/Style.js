import styled from 'styled-components';
import background from './fundo007Food.png';

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
`;

export default DivGlobal;
