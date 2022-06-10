import * as React from 'react'
import { render, screen } from '@testing-library/react'
import { I18nextProvider } from 'react-i18next'

import { Pokemon } from './pokemon'
import { i18next } from '../../lib/i18n'

const selectors = {
  title: () => screen.getByText(/hello-world/),
}

const renderComponent = (props?: any) =>
  render(
    <I18nextProvider i18n={i18next}>
      <Pokemon {...props} />
    </I18nextProvider>
  )

test('loads and displays greeting', async () => {
  const { debug } = renderComponent()

  debug()

  expect(selectors.title()).toBeInTheDocument()
})
