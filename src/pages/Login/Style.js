import styled from 'styled-components';
import background from './planoFundoLogin.jpg';

export const DivGlobal = styled.div`
  background-image: url(${background});
  /* background-attachment: fixed; */
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  min-height: 640px;
  min-width: 360px;
  align-items: center;
  background-color: #dbdad6;
  justify-content: center;
  #logoProfile {
    top: 50px;
    position: absolute;
    max-width: 360px;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  textarea:-webkit-autofill:active,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus,
  select:-webkit-autofill:active {
    -webkit-animation-name: autofill;
    -webkit-animation-fill-mode: both;
    -webkit-transition-delay: 9999s;
    -webkit-transition-property: background-color, color;
  }
`;

export const Div = styled.div`
  padding-right: 25px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  align-content: space-between;
  input { 
    background-color: #2D2D2D;
    border: 2px solid #E8E8E8;
    border-radius: 10px;
    color: #E7BD42;
    font-size: medium;
    font-weight: 700;
    padding: 7px;
    text-align: center;
    :focus{
      background-color: #212121;
      box-shadow: 4px 4px #888;
      color: #E7BD42;
      outline-color: #2D2D2D;
    }
  }
  button {
    text-align: center;
    font-weight: bold;
    color: #E7BD42;
    border: 2px solid #E7BD42 !important;
    background: ${({ disabled }) => (disabled ? '#696969' : '#B30E16')};
    width: 160px;
    height: 30px;
    margin-bottom: 5px;
  }
`;
