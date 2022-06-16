import { ComponentStyleConfig } from '@chakra-ui/react'

export const PokemonItem: ComponentStyleConfig = {
  parts: ['wrapper'],
  baseStyle: {
    wrapper: {
      borderRadius: 7,
      paddingY: 4,
      paddingX: 5,
      gap: 4,
      position: 'relative',
    },
    image: {
      width: '100%',
      maxWidth: '150px',
    },
    pokemonInformations: {
      alignItems: 'flex-start',
      width: '100%',
      gap: 0,
    },
    name: {
      color: 'white',
      fontSize: '5xl',
      fontWeight: 'bold',
    },
    type: {
      borderWidth: 1,
      borderColor: 'white',
      borderRadius: 16,
      paddingY: 1,
      paddingX: 2,
    },
    order: {
      color: 'white',
      fontSize: '8xl',
      fontWeight: 'bold',
      position: 'absolute',
      right: 3,
      bottom: '-3',
      opacity: 0.5,
    },
  },
}
