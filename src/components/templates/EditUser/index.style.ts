import { css } from 'styled-components'
import { minMq } from '@/styles/breakPoints'
import { fontSize } from '@/styles/mixin'
import variables from '@/styles/variables'

const cardSection = css`
  border-color: ${variables.THEME_C};
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  padding: 5px 10px;
`

export const style = {
  cardSection,
}
