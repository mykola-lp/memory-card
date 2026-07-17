import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import CardGrid from './CardGrid';

const pokemons = [
  { id: 1, name: 'pikachu', image: 'pikachu.png' },
  { id: 2, name: 'bulbasaur', image: 'bulbasaur.png' },
];

test('renders a card for each pokemon', () => {
  render(<CardGrid pokemons={pokemons} onCardClick={vi.fn()} />);

  expect(screen.getByText('pikachu')).toBeInTheDocument();
  expect(screen.getByText('bulbasaur')).toBeInTheDocument();
});

test('calls onCardClick with correct id when a card is clicked', async () => {
  const handleClick = vi.fn();

  render(<CardGrid pokemons={pokemons} onCardClick={handleClick} />);

  await userEvent.click(screen.getByText('bulbasaur'));

  expect(handleClick).toHaveBeenCalledWith(2);
});