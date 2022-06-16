import { render, screen } from '@testing-library/react'

import { Badge } from './badge'
import { colors } from '../../theme/colors'

const selectors = {
  text: () => screen.getByText(/Grass/),
}

const defaultProps = {
  color: colors.pokemon.grass as keyof typeof colors.pokemon,
  text: 'Grass',
}

const renderComponent = (props = defaultProps) => render(<Badge {...props} />)

test('should render the component', async () => {
  renderComponent()

  expect(selectors.text()).toBeInTheDocument()
})
