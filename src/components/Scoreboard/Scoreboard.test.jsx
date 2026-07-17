import { render, screen } from '@testing-library/react';

import Scoreboard from './Scoreboard';

test('displays score and best score', () => {
  render(<Scoreboard score={5} bestScore={10} />);

  expect(screen.getByText(/5/)).toBeInTheDocument();
  expect(screen.getByText(/10/)).toBeInTheDocument();
});