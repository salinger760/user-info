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
    { key: 'val1', value: 'Primera（中綴じ）001' },
    { key: 'val2', value: 'Primera（中綴じ）002' },
    { key: 'val3', value: 'Primera（中綴じ）003' },
    { key: 'val4', value: 'Primera（中綴じ）004' },
  ],
}
