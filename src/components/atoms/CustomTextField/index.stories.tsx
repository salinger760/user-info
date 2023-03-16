import CustomText, { Props } from '.'
import { Story, Meta } from '@storybook/react'

const meta: Meta = {
  title: 'Common/CustomText',
  component: CustomText,
}
export default meta

const Template: Story<Props> = (args) => <CustomText {...args} />

export const Default = Template.bind({})
Default.args = {
  size: 'md',
}
