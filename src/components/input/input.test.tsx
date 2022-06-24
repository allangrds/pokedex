import * as React from 'react'
import { render, screen } from '@testing-library/react'
import { SearchIcon } from '@chakra-ui/icons'

import { Input } from './input'
import type { InputProps } from './input'

const selectors = {
  placeholder: () => screen.getByPlaceholderText(/Type your name/),
  icon: () => screen.getByTestId('input-icon'),
}

const defaultProps = {
  placeholder: 'Type your name',
}
const renderComponent = (props: InputProps = defaultProps) =>
  render(<Input {...props} />)

test('should render the component without icon', async () => {
  renderComponent()

  expect(selectors.placeholder()).toBeInTheDocument()
})

test('should render the component with icon', async () => {
  const { debug } = renderComponent({
    icon: <SearchIcon />,
    placeholder: 'Type your name',
  })

  debug()
})
