import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import saveMealsToken from '../../helpers/saveMealsToken';
import saveCocktailsToken from '../../helpers/saveCocktailsToken';
import FoodLogo from '../../images/FoodLogo.png';
import './Login.css';

function Login() {
  const history = useHistory();
  const [user, setUser] = useState({ email: '', password: '' });
  const isPlayButtonDisabled = () => {
    const EMAIL_LENGH = 6;
    if (user.email.includes('@') && user.email.includes('.com')
    && user.password.length > EMAIL_LENGH) {
      return false;
    }
    return true;
  };
  const HandleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };
  const HandleSubmit = (e) => {
    e.preventDefault();
    saveMealsToken();
    saveCocktailsToken();
    localStorage.setItem('user', JSON.stringify({ email: user.email }));
    history.push('/foods');
  };
  return (
    <div className="backGroundLogin">
      <div id="logoProfile">
        <img src={ FoodLogo } alt="profile" />
      </div>
      <form className="formStyle">
        <div className="inputContainer">
          <label htmlFor="email">
            <input
              className="input"
              id="email"
              data-testid="email-input"
              name="email"
              value={ user.email }
              type="text"
              placeholder="Insira seu e-mail"
              onChange={ HandleChange }
            />
          </label>
          <label htmlFor="passwordLabel">
            <input
              className="input"
              id="passwordLabel"
              data-testid="password-input"
              name="password"
              value={ user.password }
              type="password"
              placeholder="Insira sua senha"
              onChange={ HandleChange }
            />
          </label>
        </div>
        <button
          className="btn btn-dark px-4 mb-2"
          id="buttonSubmit"
          data-testid="login-submit-btn"
          type="submit"
          disabled={ isPlayButtonDisabled() }
          onClick={ HandleSubmit }
        >
          Enter
        </button>
      </form>
    </div>
  );
}
export default Login;
