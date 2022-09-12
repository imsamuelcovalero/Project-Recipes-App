import React from 'react';
import FormContainer from './FormContainer';
import FoodLogo from '../../images/FoodLogo.png';
import { DivGlobal } from './Style';
// import './Login.css';

function Login() {
  return (
    <DivGlobal>
      <div id="logoProfile">
        <img src={ FoodLogo } alt="Food Logo" />
      </div>
      <div id="form">
        <FormContainer />
      </div>
    </DivGlobal>
  );
}
export default Login;
