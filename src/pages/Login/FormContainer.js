import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import saveMealsToken from '../../helpers/saveMealsToken';
import saveCocktailsToken from '../../helpers/saveCocktailsToken';
import { Div } from './Style';

function FormContainer() {
  const history = useHistory();
  const [user, setUser] = useState({ email: '', password: '' });
  const [isDisabled, setIsDisabled] = useState(true);
  const isPlayButtonDisabled = () => {
    const EMAIL_LENGH = 6;
    if (user.email.includes('@') && user.email.includes('.com')
    && user.password.length > EMAIL_LENGH) {
      setIsDisabled(false);
      return false;
    }
    setIsDisabled(true);
    return true;
  };

  const HandleChange = (event) => {
    console.log('isDisabled', isDisabled);
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    isPlayButtonDisabled();
  }, [user]);

  const HandleSubmit = (e) => {
    e.preventDefault();
    saveMealsToken();
    saveCocktailsToken();
    localStorage.setItem('user', JSON.stringify({ email: user.email }));
    history.push('/foods');
  };

  return (
    <Div disabled={ isDisabled }>
      <label htmlFor="email">
        <input
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
          id="passwordLabel"
          data-testid="password-input"
          name="password"
          value={ user.password }
          type="password"
          placeholder="Insira sua senha"
          onChange={ HandleChange }
        />
      </label>
      <button
        id="buttonSubmit"
        data-testid="login-submit-btn"
        type="submit"
        disabled={ isDisabled }
        onClick={ HandleSubmit }
      >
        Enter
      </button>
    </Div>
  );
}
export default FormContainer;
