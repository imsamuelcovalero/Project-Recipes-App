import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './RenderWithRouter';
import App from '../App';
import { validEmail, validPassword, invalidPassword } from './mocks';

describe('Testes da tela de Login:', () => {
  it('Testa se tem os data-testid dos inputs de email, senha e botão  "Enter":', () => {
    renderWithRouter(<App />);
    const dataTestId = 'data-testid';
    const emailInput = screen.getByRole('textbox');
    const passwordInput = screen.getByLabelText(/password/i);
    const buttonIput = screen.getByRole('button', { name: /enter/i });
    expect(emailInput).toHaveAttribute(dataTestId, 'email-input');
    expect(passwordInput).toHaveAttribute(dataTestId, 'password-input');
    expect(buttonIput).toHaveAttribute(dataTestId, 'login-submit-btn');
  });
  it('testa handleChange:', () => {
    renderWithRouter(<App />);
    const emailInput = screen.getByRole('textbox');
    userEvent.type(emailInput, 'test@teste.com');
    const passwordInput = screen.getByLabelText(/password/i);
    userEvent.type(passwordInput, '1234567');
    expect(emailInput).toHaveValue('test@teste.com');
    expect(passwordInput).toHaveValue('1234567');
  });
  it('testa email incorreto e passowrd correto:', () => {
    renderWithRouter(<App />);
    const emailInput = screen.getByRole('textbox');
    const passwordInput = screen.getByLabelText(/password/i);
    const buttonIput = screen.getByRole('button', { name: /enter/i });
    userEvent.type(emailInput, validEmail);
    userEvent.type(passwordInput, invalidPassword);
    expect(buttonIput).toHaveAttribute('disabled');
  });
  it('testa email corret e password correto:', () => {
    renderWithRouter(<App />);
    const emailInput = screen.getByRole('textbox');
    const passwordInput = screen.getByLabelText(/password/i);
    const buttonIput = screen.getByRole('button', { name: /enter/i });
    userEvent.type(emailInput, validEmail);
    userEvent.type(passwordInput, validPassword);
    expect(buttonIput).not.toHaveAttribute('disabled');
  });
  it('testa redicionamento da pagina:', () => {
    const { history } = renderWithRouter(<App />);
    const emailInput = screen.getByRole('textbox');
    const passwordInput = screen.getByLabelText(/password/i);
    const buttonIput = screen.getByRole('button', { name: /enter/i });
    userEvent.type(emailInput, validEmail);
    userEvent.type(passwordInput, validPassword);
    userEvent.click(buttonIput);
    expect(history.location.pathname).toBe('/foods');
  });
});
