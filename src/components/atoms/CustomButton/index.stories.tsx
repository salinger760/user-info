import CustomButton, { Props } from '.'
import { Story, Meta } from '@storybook/react'

const meta: Meta = {
  title: 'Common/CustomButton',
  component: CustomButton,
}
export default meta

const Template: Story<Props> = (args) => <CustomButton {...args} />

export const Default = Template.bind({})
Default.args = {
  color: 'primary',
  variant: 'outlined',
  size: 'medium',
  text: 'Button',
}
