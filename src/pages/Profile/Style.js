import styled from 'styled-components';

export const DivGlobal = styled.div`
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
  h2 {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
  }
  #buttons {
    button {
      color: #E7BD42;
      width: 160px;
      margin: 0px 4px;
      /* border: 1px solid red; */
      /* padding: 1px; */
      padding: 12px 5px;
      border-radius: 20px;
      border: 0;
      background-color: white;
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
