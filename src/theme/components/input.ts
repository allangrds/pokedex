import { ComponentStyleConfig } from '@chakra-ui/react'

export const Input: ComponentStyleConfig = {
  parts: ['input'],
  baseStyle: {
    input: {
      borderRadius: 24,
      paddingRight: 4,
      paddingY: 7,
      backgroundColor: 'gray.500',

      '::placeholder': {
        color: 'gray.600',
      },
    },
  },
}
