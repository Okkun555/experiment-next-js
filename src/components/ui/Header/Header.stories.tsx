import { ComponentMeta, ComponentStory } from '@storybook/react'
import Header from './Header'

export default {
  title: 'Header',
  component: Header,
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = (args) => <Header />

export const Default: ComponentStory<typeof Header> = Template.bind({})
Default.storyName = 'デフォルトヘッダー'
