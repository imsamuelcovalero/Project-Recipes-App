import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './RenderWithRouter';
import HeaderNoSearch from '../Components/HeaderNoSearch';

const dataTestId = 'data-testid';

describe.only('Testes do componente Header:', () => {
  it('Testa se existe um botão profile que direciona para a página de login ao '
  + 'clicado:', () => {
    const { history } = renderWithRouter(<HeaderNoSearch />);

    expect(screen.getByRole('img', { name: /profile/i })).toBeInTheDocument();
    const profileButton = screen.getByRole('button', { name: /profile/i });
    expect(profileButton).toHaveAttribute(dataTestId, 'profile-top-btn');
    userEvent.click(profileButton);
    expect(history.location.pathname).toBe('/profile');
  });

  it('Testa se existe um H3 que contém o título da página:', () => {
    renderWithRouter(<HeaderNoSearch />);

    expect(screen.getByTestId('page-title')).toBeInTheDocument();
  });
});
