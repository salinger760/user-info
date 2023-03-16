import * as React from 'react'
import { LinearProgress } from '@mui/material'

export type Props = {
  progress: number
}

const CustomProgress: React.FC<Props> = ({ progress }) => {
  return <LinearProgress variant="determinate" value={progress} />
}

export default CustomProgress
