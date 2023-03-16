import { ToggleButton, ToggleButtonGroup } from '@mui/material'

type HandleClick = (
  event: React.MouseEvent<HTMLElement>,
  newToggleButtonVal: string | null,
) => void

type Items = {
  value: string
  text: string
}

export type Props = {
  toggleButtonVal: string | null
  handleClick: HandleClick
  items: Array<Items>
}

const CustomToggleButton = ({
  toggleButtonVal,
  handleClick,
  items,
}: Props): JSX.Element => {
  return (
    <ToggleButtonGroup value={toggleButtonVal} exclusive onChange={handleClick}>
      {items.map((item) => {
        return (
          <ToggleButton key={item.value} color="primary" value={item.value}>
            {item.text}
          </ToggleButton>
        )
      })}
    </ToggleButtonGroup>
  )
}

export default CustomToggleButton
