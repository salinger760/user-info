import { FormControl, Select, MenuItem } from '@mui/material'

type Items = {
  value: string
  text: string
}

export type Props = {
  items: Array<Items>
  changeEvent?: (e: React.ChangeEventHandler<HTMLSelectElement>) => void
  value?: string
}

const CustomSelect = ({ items, changeEvent }: Props): JSX.Element => {
  return (
    <FormControl variant="outlined">
      <Select defaultValue="" autoWidth={false} displayEmpty>
        <MenuItem value="">選択してください</MenuItem>
        {items.map((item) => {
          return (
            <MenuItem key={item.value} value={item.value}>
              {item.text}
            </MenuItem>
          )
        })}
      </Select>
    </FormControl>
  )
}

export default CustomSelect
