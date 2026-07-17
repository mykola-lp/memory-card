import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';

import { getPokemons } from './services/pokemonApi';

vi.mock('./services/pokemonApi'); // replace the real fetch with a fake one

test('loads pokemons and increases score on click', async () => {
  getPokemons.mockResolvedValue([
    { id: 1, name: 'pikachu', image: 'pikachu.png' },
    { id: 2, name: 'bulbasaur', image: 'bulbasaur.png' },
  ]);

  render(<App />);

  // Loading is shown first
  expect(screen.getByText(/Loading/i)).toBeInTheDocument();

  // wait until the data is loaded and Loading disappears
  await waitFor(() => {
    expect(screen.queryByText(/Loading/i)).not.toBeInTheDocument();
  });

  const card = screen.getByText(/pikachu/i);
  await userEvent.click(card);

  expect(screen.getByText('Score: 1')).toBeInTheDocument(); // text depends on Scoreboard
});
