import * as React from 'react'
import { ChakraProvider as Provider, extendTheme } from '@chakra-ui/react'

import { theme as defaultTheme } from '../theme'

export const theme = extendTheme(defaultTheme)

type ThemeProviderProps = {
  children: React.ReactNode
}

const ThemeProvider = ({ children }: ThemeProviderProps) => (
  <Provider theme={theme} resetCSS>
    {children}
  </Provider>
)

export { ThemeProvider }
