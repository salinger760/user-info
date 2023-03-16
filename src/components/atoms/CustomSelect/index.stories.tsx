import CustomSelect, { Props } from '.'
import { Story, Meta } from '@storybook/react'

const meta: Meta = {
  title: 'Common/CustomSelect',
  component: CustomSelect,
}
export default meta

const Template: Story<Props> = (args) => <CustomSelect {...args} />

export const Default = Template.bind({})
Default.args = {
  items: [
    { value: 'val1', text: 'Primera（中綴じ）001' },
    { value: 'val2', text: 'Primera（中綴じ）002' },
    { value: 'val3', text: 'Primera（中綴じ）003' },
    { value: 'val4', text: 'Primera（中綴じ）004' },
  ],
}
