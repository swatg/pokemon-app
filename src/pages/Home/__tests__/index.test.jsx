import React from 'react';
import { render, cleanup, act, fireEvent, waitFor, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import Home from 'pages/Home';
import pokemonDataMock from 'mocks/pokemonMock.json';
import GET_POKEMON from 'queries/getPokemon';
import { GraphQLError } from 'graphql';

afterEach(cleanup);

const pokemonMockData = [
  {
    request: {
      query: GET_POKEMON,
      variables: {
        fetchLimit: 3,
      },
    },
    result: {
      data: pokemonDataMock,
    },
  },
];

const errorMockData = [
  {
    request: {
      query: GET_POKEMON,
      variables: {
        fetchLimit: 3,
      },
    },
    result: {
      errors: [new GraphQLError()],
    },
  },
];

test('Renders Loading while waiting for response', async () => {
  const { getByText } = render(
    <MockedProvider addTypename={false}>
      <Home limit={3} />
    </MockedProvider>,
  );
  expect(getByText('Loading content...')).toBeDefined();
});

test('Renders Error for invalid response', async () => {
  const { getByText } = render(
    <MockedProvider mocks={errorMockData} addTypename={false}>
      <Home limit={3} />
    </MockedProvider>,
  );
  await act(() => new Promise(resolve => setTimeout(resolve, 0)));
  expect(getByText('Some error occured...')).toBeDefined();
});

test('Renders Home page with valid response', async () => {
  const { getByTestId } = render(
    <MockedProvider mocks={pokemonMockData} addTypename={false}>
      <Home limit={3} />
    </MockedProvider>,
  );
  
  await act(() => new Promise(resolve => setTimeout(resolve, 0)));
  expect(getByTestId('index')).toBeDefined();
});

test('Navigation works correctly', async () => {
  render(
    <MockedProvider mocks={pokemonMockData} addTypename={false}>
      <Home limit={3} />
    </MockedProvider>,
  );
  
  await act(() => new Promise(resolve => setTimeout(resolve, 0)));
  expect('Bulbasaur').toBeDefined();
  fireEvent.click(screen.getByLabelText('next'));
  expect('Ivysaur').toBeDefined();
  fireEvent.click(screen.getByLabelText('back'));
  expect('Bulbasaur').toBeDefined();
});

test('Next button disable and enable correctly', async () => {
  render(
    <MockedProvider mocks={pokemonMockData} addTypename={false}>
      <Home limit={3} />
    </MockedProvider>,
  );

  await act(() => new Promise(resolve => setTimeout(resolve, 0)));
  expect(screen.getByLabelText('next')).toBeEnabled();
  // increase index, index = 1
  fireEvent.click(screen.getByLabelText('next'));
  // increase index, index = 2
  fireEvent.click(screen.getByLabelText('next'));
  // increase index, index = 3
  fireEvent.click(screen.getByLabelText('next'));
  expect(screen.getByLabelText('next')).toBeDisabled();
});

test('Back button disable and enable correctly', async () => {
  render(
    <MockedProvider mocks={pokemonMockData} addTypename={false}>
      <Home limit={3} />
    </MockedProvider>,
  );

  await act(() => new Promise(resolve => setTimeout(resolve, 0)));
  expect(screen.getByLabelText('back')).toBeDisabled();
  fireEvent.click(screen.getByLabelText('next'));
  expect(screen.getByLabelText('back')).toBeEnabled();
});
