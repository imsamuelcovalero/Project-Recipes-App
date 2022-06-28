import styled from 'styled-components';

export const DivGlobal = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
  background-color: #FFF3F0;
`;

export const Div = styled.div`
  width: 400px;
  height: 240px;
  border: 1px solid #e1e5eb;
  background: ${(props) => (props.corFundo ? props.corFundo : '#4D7C8A')};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #EFA00B;
  border-radius: 10px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  form {
    input {
      border: 1px solid #e1e5eb;
      outline: none;
      width: 100%;
      height: 35%;
      margin-bottom: 10px;
    }
    width: 80%;
    height: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  button {
    :disabled {
      background-color: #7F9C96;
    }
    :enabled {
      background-color: #4D7C8A;
    }
    border: 1px solid #EFA00B;
    border-radius: 5px;
    margin-top: 15px;
    width: 50%;
    height: 35px; 
    align-self: center;
    color: #EFA00B;
    font-weight: bold;
    cursor: pointer;
  }
  @media (max-width: 360px) {
    display: flex;
    // background-color: red;
    // width: 200px;
    // height: 100px;
    border: 1px solid red;
    max-width: 90%;
    padding-left: 24px;
    padding-right: 24px;
    form {
    }
  }
`;
