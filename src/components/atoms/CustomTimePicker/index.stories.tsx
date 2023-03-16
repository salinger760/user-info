import CustomTimePicker from '.'
import { Story, Meta } from '@storybook/react'

const meta: Meta = {
  title: 'Common/CustomTimePicker',
  component: CustomTimePicker,
}
export default meta

const Template: Story = () => <CustomTimePicker />

export const Default = Template.bind({})
