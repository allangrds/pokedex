import * as React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { PokemonItem } from '../pokemon-item'
import type { PokemonItemProps } from '../pokemon-item'
import BulbasaurImage from './bulbasaur.png'

export default {
  title: 'Components/PokemonItem',
  component: PokemonItem,
} as ComponentMeta<typeof PokemonItem>

const Template: ComponentStory<typeof PokemonItem> = (
  args: PokemonItemProps
) => <PokemonItem {...args} />

export const Default = Template.bind({})
Default.args = {
  name: 'Bulbasaur',
  image: BulbasaurImage,
  order: 1,
  types: ['grass', 'poison'],
}
