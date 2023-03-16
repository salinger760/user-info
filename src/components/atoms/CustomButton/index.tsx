import { Button } from '@mui/material'

type Color =
  | 'inherit'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'error'
  | 'info'
  | 'warning'
  | undefined

type Variant = 'contained' | 'outlined' | 'text' | undefined

export type Size = 'small' | 'medium' | 'large' | undefined

export type Props = {
  color: Color
  variant: Variant
  size: Size
  text: string
  handleSubmit?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const CustomButton = ({
  color,
  variant,
  size,
  text,
  handleSubmit,
}: Props): JSX.Element => {
  return (
    <Button color={color} variant={variant} size={size} onClick={handleSubmit}>
      {text}
    </Button>
  )
}

export default CustomButton
