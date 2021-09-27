import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Card from 'components/Card';

afterEach(cleanup);

const array = 
  {
    'name': 'Bulbasaur',
    'number': '001',
    'image': 'https://img.pokemondb.net/artwork/bulbasaur.jpg',
    'resistant': [
      'Water',
      'Electric',
      'Grass',
      'Fighting',
      'Fairy',
    ],
    'weaknesses': [
      'Fire',
      'Ice',
      'Flying',
      'Psychic',
    ],
    'attacks': {
      'fast': [
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
      ],
      'special': [
        {
          'name': 'Power Whip',
          'type': 'Grass',
          'damage': 70,
        },
        {
          'name': 'Seed Bomb',
          'type': 'Grass',
          'damage': 40,
        },
        {
          'name': 'Sludge Bomb',
          'type': 'Poison',
          'damage': 55,
        },
      ],
    },
  };

test('Card rendered', async () => {
  const { getByTestId } = render(<Card data={array} />);
  const cardContent = getByTestId('index').textContent;
  expect(cardContent).toBe('Bulbasaur');
});
