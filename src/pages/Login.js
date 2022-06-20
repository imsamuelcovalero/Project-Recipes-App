import React, { useState } from 'react';

function Login() {
  const [user, setUser] = useState({ email: '', password: '' });

  const isPlayButtonDisabled = () => {
    const EMAIL_LENGH = 6;
    if (user.email.includes('@') && user.email.includes('.com')
    && user.password.length > EMAIL_LENGH) {
      return false;
    }
    return true;
  };

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <div>
      <form>
        <input
          data-testid="email-input"
          name="email"
          value={ user.email }
          type="text"
          placeholder="Email"
          onChange={ handleChange }
        />
        <input
          data-testid="password-input"
          name="password"
          value={ user.password }
          type="password"
          placeholder="Password"
          onChange={ handleChange }
        />
        <button
          data-testid="login-submit-btn"
          type="button"
          disabled={ isPlayButtonDisabled() }
          onClick={ handleSubmit }
        >
          Enter
        </button>
      </form>
    </div>
  );
}

export default Login;
