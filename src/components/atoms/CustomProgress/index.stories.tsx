import CustomProgress, { Props } from '.'
import { Story, Meta } from '@storybook/react'

const meta: Meta = {
  title: 'Common/CustomProgress',
  component: CustomProgress,
}
export default meta

const Template: Story<Props> = (args) => <CustomProgress {...args} />

export const Default = Template.bind({})
Default.args = {
  progress: 45,
}
