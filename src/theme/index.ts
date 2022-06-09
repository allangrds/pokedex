import { extendTheme } from '@chakra-ui/react'

import { colors } from './colors'

const theme = extendTheme({
  styles: {
    global: {
      body: {
        padding: '0 !important',
        minHeight: '-webkit-fill-available',
      },
      html: {
        height: '-webkit-fill-available',
      },
    },
  },

  colors,
})

export { theme }
