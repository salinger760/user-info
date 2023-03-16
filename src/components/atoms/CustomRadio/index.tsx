import {
  Radio,
  FormControl,
  FormControlLabel,
  RadioGroup,
  FormLabel,
} from '@mui/material'

type Items = {
  value: string
  label: string
}

export type Props = {
  formLabel?: string
  items: Array<Items>
  defaultValue: string
}

const CustomRadio = ({
  formLabel = '',
  items,
  defaultValue,
}: Props): JSX.Element => {
  return (
    <FormControl>
      {formLabel ? <FormLabel>formLabel</FormLabel> : ''}
      <RadioGroup defaultValue={defaultValue} row>
        {items.map((item) => {
          return (
            <FormControlLabel
              key={item.value}
              value={item.value}
              control={<Radio />}
              label={item.label}
            />
          )
        })}
      </RadioGroup>
    </FormControl>
  )
}

export default CustomRadio
