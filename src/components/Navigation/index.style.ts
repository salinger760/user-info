import { css } from 'styled-components'
import variables from '@/styles/variables'

const wrapCard = css`
  background-color: ${variables.WHITE};
  border-radius: 10px;
  box-shadow: 20px 20px 60px ${variables.BASE_BGC}, -20px -20px 60px ${variables.BASE_BGC};
  display: flex;
  margin-top: 100px;
  padding: ${variables.BLOCK_PAD};
`

export const style = {
  wrapCard,
}
