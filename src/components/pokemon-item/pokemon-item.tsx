import {
  HStack,
  VStack,
  Image,
  useMultiStyleConfig,
  Stack,
  Text,
} from '@chakra-ui/react'

import { Badge } from '../badge'
import { colors } from '../../theme/colors'

export type PokemonItemProps = {
  image: string
  name: string
  order: number
  types: string[]
}

const PokemonItem = ({ image, name, order, types }: PokemonItemProps) => {
  const styles = useMultiStyleConfig('PokemonItem', {})

  return (
    <HStack sx={styles.wrapper} backgroundColor={`pokemon.${types[0]}`}>
      <Image sx={styles.image} src={image} alt={name} />
      <VStack sx={styles.pokemonInformations}>
        <Text sx={styles.name}>{name}</Text>
        <Stack direction="row">
          {types.map((type) => (
            <Badge
              key={type}
              color={type as keyof typeof colors.pokemon}
              text={type}
            />
          ))}
        </Stack>
      </VStack>
      <Text sx={styles.order}>#{order}</Text>
    </HStack>
  )
}

export { PokemonItem }
