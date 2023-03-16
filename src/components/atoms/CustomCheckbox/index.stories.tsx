import CustomCheckbox, { Props } from '.'
import { Story, Meta } from '@storybook/react'

const meta: Meta = {
  title: 'Common/CustomCheckbox',
  component: CustomCheckbox,
}
export default meta

const Template: Story<Props> = (args) => <CustomCheckbox {...args} />

export const Default = Template.bind({})
Default.args = {
  items: [
    { label: 'item01', defaultChecked: true },
    { label: 'item02' },
    { label: 'item03', defaultChecked: true },
  ],
}
