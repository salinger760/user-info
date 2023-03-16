import { FormControl, Select, MenuItem, SelectChangeEvent } from '@mui/material'

type Items = {
  key: string
  value: string
}

export type Props = {
  items: Array<Items>
  changeEvent?: (e: SelectChangeEvent<string>) => void
  defaultValue?: string
  value?: string
}

const FormSelect = ({ items, value, changeEvent }: Props): JSX.Element => {
  return (
    <FormControl variant="outlined">
      <Select defaultValue="" autoWidth={false} displayEmpty onChange={changeEvent} value={value}>
        <MenuItem value="">選択してください</MenuItem>
        {items.map((item) => {
          return (
            <MenuItem key={item.key} value={item.key}>
              {item.value}
            </MenuItem>
          )
        })}
      </Select>
    </FormControl>
  )
}

export default FormSelect
