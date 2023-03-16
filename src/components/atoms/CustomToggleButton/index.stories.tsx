import React, { useState } from 'react'
import CustomToggleButton, { Props } from '.'
import { Story, Meta } from '@storybook/react'

const meta: Meta = {
  title: 'Common/CustomToggleButton',
  component: CustomToggleButton,
}
export default meta

const Template: Story<Props> = (args) => {
  const [toggleButtonVal, setToggleButtonVal] = useState<string | null>('on')

  const handleToggleButtonChange = (
    event: React.MouseEvent<HTMLElement>,
    newToggleButtonVal: string | null,
  ) => {
    if (newToggleButtonVal !== null) {
      setToggleButtonVal(newToggleButtonVal)
    }
  }

  return (
    <CustomToggleButton
      {...args}
      toggleButtonVal={toggleButtonVal}
      handleClick={handleToggleButtonChange}
    />
  )
}

export const Default = Template.bind({})
Default.args = {
  items: [
    { value: 'on', text: '有' },
    { value: 'off', text: '無' },
  ],
}
