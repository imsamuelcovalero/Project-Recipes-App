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
  }
`;
