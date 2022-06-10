import * as React from 'react'
import { ChakraProvider as Provider, extendTheme } from '@chakra-ui/react'

import { theme as defaultTheme } from '../theme'

export const theme = extendTheme(defaultTheme)

type ChakraProviderProps = {
  children: React.ReactNode
}

const ChakraProvider = ({ children }: ChakraProviderProps) => (
  <Provider theme={theme} resetCSS>
    {children}
  </Provider>
)

export { ChakraProvider }
