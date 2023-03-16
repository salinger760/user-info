import { Radio, FormControl, FormControlLabel, RadioGroup, FormLabel } from '@mui/material'

export type Items = {
  value: string
  label: string
}

export type Props = {
  formLabel?: string
  items: Array<Items>
  defaultValue: string
  value: string
  name: string
  changeEvent?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const FormRadio = ({
  formLabel = '',
  items,
  defaultValue,
  value,
  name,
  changeEvent,
}: Props): JSX.Element => {
  return (
    <FormControl>
      {formLabel ? <FormLabel>{formLabel}</FormLabel> : ''}

      <RadioGroup
        name={name}
        defaultValue={defaultValue}
        value={value === undefined ? '' : value}
        row
        onChange={changeEvent}
      >
        {items.map((item) => {
          return (
            <FormControlLabel
              key={item.value}
              value={String(item.value)}
              control={<Radio />}
              label={item.label}
            />
          )
        })}
      </RadioGroup>
    </FormControl>
  )
}

export default FormRadio
