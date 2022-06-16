import * as React from 'react'
import { render, screen } from '@testing-library/react'

import { PokemonItem } from './pokemon-item'

const selectors = {
  name: () => screen.getByText(/Bulbasaur/),
  grassType: () => screen.getByText(/grass/),
  poisonType: () => screen.getByText(/poison/),
  position: () => screen.getByText(/#1/),
}

const defaultProps = {
  name: 'Bulbasaur',
  image: 'BulbasaurImage',
  order: 1,
  types: ['grass', 'poison'],
}
const renderComponent = (props = defaultProps) =>
  render(<PokemonItem {...props} />)

test('sh', async () => {
  renderComponent()

  expect(selectors.name()).toBeInTheDocument()
  expect(selectors.grassType()).toBeInTheDocument()
  expect(selectors.poisonType()).toBeInTheDocument()
  expect(selectors.position()).toBeInTheDocument()
})
