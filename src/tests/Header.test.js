import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './RenderWithRouter';
import Header from '../Components/Header';

const dataTestId = 'data-testid';

describe('Testes do componente Header:', () => {
  it('Testa se existe um botão profile que direciona para a página de login ao '
  + 'clicado:', () => {
    const { history } = renderWithRouter(<Header />);

    expect(screen.getByRole('img', { name: /profile/i })).toBeInTheDocument();
    const profileButton = screen.getByRole('button', { name: /profile/i });
    expect(profileButton).toHaveAttribute(dataTestId, 'profile-top-btn');
    userEvent.click(profileButton);
    expect(history.location.pathname).toBe('/profile');
  });

  it('Testa se existe um H3 que contém o título da página:', () => {
    renderWithRouter(<Header />);

    expect(screen.getByTestId('page-title')).toBeInTheDocument();
  });

  it('Testa se existe um botão de busca e que o campo de busca é ativado ou'
    + 'desativado com o clique', () => {
    renderWithRouter(<Header />);

    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument();
    const searchButton = screen.getByRole('button', { name: /search/i });
    expect(searchButton).toHaveAttribute(dataTestId, 'search-top-btn');
    userEvent.click(searchButton);
    expect(screen.getByTestId('search-input')).toBeInTheDocument();
    userEvent.click(searchButton);
    expect(screen.queryByTestId('search-input')).not.toBeInTheDocument();
  });
});
