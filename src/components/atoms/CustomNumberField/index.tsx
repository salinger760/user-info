import { TextField } from '@mui/material'
//import { css } from 'styled-components'

import { style } from './index.style'

export type Size = 'sm' | 'md' | 'lg'

export type Props = {
  size: Size
  placeholder?: string
  min: number
  max: number
  value: number
  changeEvent?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const CustomNumberField = ({
  size,
  placeholder = '',
  min,
  max,
  value,
  changeEvent,
}: Props): JSX.Element => {
  return (
    <TextField
      variant="outlined"
      type="number"
      placeholder={placeholder}
      InputProps={{ inputProps: { min: min, max: max } }}
      css={[style.size(size), style.numberField]}
      value={value}
      onChange={changeEvent}
    />
  )
}

export default CustomNumberField
