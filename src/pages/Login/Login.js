import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import saveMealsToken from '../../helpers/saveMealsToken';
import saveCocktailsToken from '../../helpers/saveCocktailsToken';
import { Div, DivGlobal } from './Style';

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
    <DivGlobal>
      <Div>
        <form>
          <label htmlFor="email">
            Email
            <input
              id="email"
              data-testid="email-input"
              name="email"
              value={ user.email }
              type="text"
              placeholder="Email"
              onChange={ HandleChange }
            />
          </label>
          <label htmlFor="passwordLabel">
            Password
            <input
              id="passwordLabel"
              data-testid="password-input"
              name="password"
              value={ user.password }
              type="password"
              placeholder="Password"
              onChange={ HandleChange }
            />
          </label>
          <button
            data-testid="login-submit-btn"
            type="submit"
            disabled={ isPlayButtonDisabled() }
            onClick={ HandleSubmit }
          >
            Enter
          </button>
        </form>
      </Div>
    </DivGlobal>
  );
}

export default Login;
