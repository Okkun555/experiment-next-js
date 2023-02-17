import { ComponentMeta, ComponentStory } from '@storybook/react'
import SubmitButton from './SubmitButton'

export default {
  title: 'SubmitButton',
  component: SubmitButton,
} as ComponentMeta<typeof SubmitButton>

const Template: ComponentStory<typeof SubmitButton> = (args) => (
  <SubmitButton text={args.text} onClick={args.onClick} />
)

export const Default: ComponentStory<typeof SubmitButton> = Template.bind({})
Default.storyName = '送信ボタン'
Default.args = {
  text: '送信',
  onClick: () => console.log('送信しました'),
}
