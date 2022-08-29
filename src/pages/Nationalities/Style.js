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
  justify-content: center;
  justify-items: center;
  background-color: #dbdad6;
  justify-content: center;
`;

export const Div = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  justify-items: center;
  select {
    margin-top: 3px;
    text-align: center;
    font-weight: bold;
    color: #E7BD42;
    border: 2px solid #E7BD42 !important;
    background-color: #ffffff;
  }
  color: #B30E16;
  margin-top: ${({ search }) => (search ? '5px' : '45px')};
`;
