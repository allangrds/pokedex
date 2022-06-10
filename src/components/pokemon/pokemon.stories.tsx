import * as React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Pokemon } from './pokemon'

export default {
  title: 'Components/Pokemon',
  component: Pokemon,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Pokemon>

const Template: ComponentStory<typeof Pokemon> = (args: any) => (
  <Pokemon {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  label: 'Button',
}
