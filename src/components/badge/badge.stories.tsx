import * as React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Badge } from './badge'
import type { BadgeProps } from './badge'

export default {
  title: 'Components/Badge',
  component: Badge,
} as ComponentMeta<typeof Badge>

const Template: ComponentStory<typeof Badge> = (args: BadgeProps) => (
  <Badge {...args} />
)

export const Grass = Template.bind({})
Grass.args = {
  color: 'grass',
  text: 'Grass',
}

export const Poison = Template.bind({})
Poison.args = {
  color: 'poison',
  text: 'Poison',
}
