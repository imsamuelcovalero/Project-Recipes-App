import styled from 'styled-components';

export const DivGlobal = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 640px;
  width: 100vw;
  align-items: center;
  justify-content: center;
`;

export const Div = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  color: #B30E16;
  margin-top: 8px;
  margin-bottom: 8px;
  display: flex;
  gap: 20px;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  #ingredient{
    margin-bottom: 25px;
  }
`;
