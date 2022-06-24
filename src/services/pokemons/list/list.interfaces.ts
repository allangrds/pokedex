export type Type = {
  slot: number
  type: {
    name: string
  }
}

export type Pokemon = {
  id: number
  name: string
  sprite: string
  types: Type[]
}
