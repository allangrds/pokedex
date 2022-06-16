import {
  HStack,
  VStack,
  Image,
  useMultiStyleConfig,
  Text,
} from '@chakra-ui/react'

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
        <HStack>
          {types.map((type) => (
            <Text
              key={type}
              sx={styles.type}
              backgroundColor={`pokemon.${type}`}
            >
              {type}
            </Text>
          ))}
        </HStack>
      </VStack>
      <Text sx={styles.order}>#{order}</Text>
    </HStack>
  )
}

export { PokemonItem }
