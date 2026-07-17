import { render } from '@testing-library/react';

import Header from './Header';

test('matches snapshot', () => {
  const { container } = render(<Header />);
  expect(container).toMatchSnapshot();
});