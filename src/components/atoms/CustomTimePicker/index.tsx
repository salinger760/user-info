import { TextField, Box } from '@mui/material'

import { style } from './index.style'

const CustomTimePicker = (): JSX.Element => {
  return (
    <Box>
      <TextField type="time" css={style.timePicker} />
    </Box>
  )
}

export default CustomTimePicker
