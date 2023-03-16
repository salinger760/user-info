import { FormGroup, FormControlLabel, Checkbox } from '@mui/material'

type Items = {
  label: string
  defaultChecked?: boolean
}

export type Props = {
  items: Array<Items>
}

const CustomCheckbox: React.FC<Props> = ({ items }) => {
  return (
    <FormGroup row>
      {items.map((item) => {
        return (
          <FormControlLabel
            key={item.label}
            control={<Checkbox defaultChecked={item.defaultChecked} />}
            label={item.label}
          />
        )
      })}
    </FormGroup>
  )
}

export default CustomCheckbox
