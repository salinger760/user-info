import { css } from 'styled-components'
import { minMq } from '@/styles/breakPoints'
import { fontSize } from '@/styles/mixin'
import variables from '@/styles/variables'

const ListSection = css`
  display: flex;
  flex-wrap: wrap;
  gap: 30px 20px;
  justify-content: flex-start;
`

export const style = {
  ListSection,
}
