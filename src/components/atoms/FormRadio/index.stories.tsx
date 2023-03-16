import CustomRadio, { Props } from '.'
import { Story, Meta } from '@storybook/react'

const meta: Meta = {
  title: 'Common/CustomRadio',
  component: CustomRadio,
}
export default meta

const Template: Story<Props> = (args) => <CustomRadio {...args} />

export const Default = Template.bind({})
Default.args = {
  items: [
    { value: 'on', label: 'ON' },
    { value: 'off', label: 'OFF' },
  ],
  defaultValue: 'off',
}
