import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Card from './Card';

test('calls onClick with pokemon id when clicked', async () => {
  const handleClick = vi.fn();
  const pokemon = { id: 1, name: 'pikachu', image: 'pikachu.png' };

  render(<Card pokemon={pokemon} onClick={handleClick} />);

  const card = screen.getByText(/pikachu/i);
  await userEvent.click(card);

  expect(handleClick).toHaveBeenCalledWith(1);
});
