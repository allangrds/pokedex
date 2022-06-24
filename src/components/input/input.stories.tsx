import * as React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { SearchIcon } from '@chakra-ui/icons'

import { Input } from './input'
import type { InputProps } from './input'

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args: InputProps) => (
  <Input {...args} />
)

export const Default = Template.bind({})
Default.args = {
  placeholder: 'Type your name',
}

export const WithIcon = Template.bind({})
WithIcon.args = {
  icon: <SearchIcon />,
  placeholder: 'Type your name',
}
