import { extendTheme } from '@chakra-ui/react'

import { colors } from './colors'
import { components } from './components'

const theme = extendTheme({
  styles: {
    global: {},
  },

  colors,
  components,
})

export { theme }
