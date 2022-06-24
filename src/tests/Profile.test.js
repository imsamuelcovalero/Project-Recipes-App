import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './RenderWithRouter';
import App from '../App';
import { validEmail, validPassword } from './mocks';
import Profile from '../pages/Profile';

describe('Testa tela de profile', () => {
  it('testa se o email é visivel e testa os data test id', () => {
    const dataTestId = 'data-testid';

    const { history } = renderWithRouter(<App />);
    const emailInput = screen.getByRole('textbox');
    const passwordInput = screen.getByLabelText(/password/i);
    const buttonIput = screen.getByRole('button', { name: /enter/i });
    userEvent.type(emailInput, validEmail);
    userEvent.type(passwordInput, validPassword);
    userEvent.click(buttonIput);
    expect(history.location.pathname).toBe('/foods');

    const buttonElement = screen.getAllByRole('button', { name: /profile/i });
    expect(buttonElement[0]).toHaveAttribute(dataTestId, 'profile-top-btn');
    userEvent.click(buttonElement[0]);
    expect(history.location.pathname).toBe('/profile');

    const emailElement = screen.getAllByRole('heading');
    const btnElement = screen.getAllByRole('button');
    expect(emailElement[1]).toBeInTheDocument();
    expect(emailElement[1]).toHaveAttribute(dataTestId, 'profile-email');
    expect(btnElement[0]).not.toHaveAttribute(dataTestId, 'profile-done-btn');
    expect(btnElement[1]).not.toHaveAttribute(dataTestId, 'profile-favorite-btn');
    expect(btnElement[2]).not.toHaveAttribute(dataTestId, 'rofile-logout-btn');
  });
  it('Botão Done Recipes redireciona para a rota correta:', () => {
    const { history } = renderWithRouter(<Profile />);
    const btnElement = screen.getByRole('button', { name: /done recipes/i });
    userEvent.click(btnElement);
    expect(history.location.pathname).toBe('/done-recipes');
  });
  it('Botão Favorites redireciona para a rota correta:', () => {
    const { history } = renderWithRouter(<Profile />);
    const btnElement = screen.getByRole('button', { name: /favorite recipes/i });
    userEvent.click(btnElement);
    expect(history.location.pathname).toBe('/favorite-recipes');
  });
  it('Botão Logout redireciona para a rota correta:', () => {
    const { history } = renderWithRouter(<Profile />);
    const btnElement = screen.getByRole('button', { name: /logout/i });
    userEvent.click(btnElement);
    expect(history.location.pathname).toBe('/');
  });
});
