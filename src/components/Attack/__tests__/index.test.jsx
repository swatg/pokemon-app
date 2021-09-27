import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Attack from 'components/Attack';

afterEach(cleanup);

const array =  [
  {
    'name': 'Tackle',
    'type': 'Normal',
    'damage': 12,
  },
  {
    'name': 'Vine Whip',
    'type': 'Grass',
    'damage': 7,
  },
];

test('Card rendered', async () => {
  const { getByTestId } = render(<Attack data={array} label="fast" />);

  const attacks = getByTestId('attackId');
  const attack = attacks.querySelectorAll('tr');

  expect(attack[1].querySelectorAll('td')[0].textContent).toBe('Tackle');
});
