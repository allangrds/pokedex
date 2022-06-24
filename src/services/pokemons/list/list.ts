import { gql, request } from 'graphql-request'

import { endpoint, sprites } from '../../config'
import { Pokemon } from './list.interfaces'

const PokemonInfo = gql`
  fragment PokemonInfo on pokemon_v2_pokemon {
    id
    name

    types: pokemon_v2_pokemontypes {
      slot
      type: pokemon_v2_type {
        name
      }
    }
  }
`

const queryByIds = gql`
  ${PokemonInfo}

  query findSpecies($offset: Int!, $limit: Int!, $name: String!, $ids: [Int!]) {
    species: pokemon_v2_pokemon(
      offset: $offset
      limit: $limit
      order_by: { id: asc }
      where: { name: { _iregex: $name }, id: { _in: $ids } }
    ) {
      ...PokemonInfo
    }
  }
`

const queryByName = gql`
  ${PokemonInfo}

  query findSpecies($offset: Int!, $limit: Int!, $name: String!) {
    species: pokemon_v2_pokemon(
      offset: $offset
      limit: $limit
      order_by: { id: asc }
      where: { name: { _iregex: $name } }
    ) {
      ...PokemonInfo
    }
  }
`

type Variables = {
  offset: number
  name: string
  limit: number
  ids: number[]
}

type Response = {
  species: Pokemon[]
}

const listByIds = (variables: Variables) =>
  request<Response, Variables>(endpoint, queryByIds, variables)

const listByNames = (variables: Variables) => {
  const { ids, ...queryVars } = variables

  return request<Response, Omit<Variables, 'ids'>>(
    endpoint,
    queryByName,
    queryVars
  )
}

const defaultVariables: Variables = {
  limit: 10,
  name: '',
  offset: 0,
  ids: [],
}

export const list = async (
  variables: Partial<Variables> = {}
): Promise<Pokemon[]> => {
  console.log(`list ->`)
  const queryVars = { ...defaultVariables, ...variables }

  const listRequest = queryVars.ids.length ? listByIds : listByNames

  const { species } = await listRequest(queryVars)

  const speciesWithSprites = species.map((specy) => ({
    ...specy,
    sprite: `${sprites}/sprites/pokemon/${specy.id}.png`,
  }))

  return speciesWithSprites
}
