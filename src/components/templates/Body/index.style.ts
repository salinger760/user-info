import { css } from 'styled-components'
import { minMq } from '@/styles/breakPoints'
import { fontSize } from '@/styles/mixin'
import variables from '@/styles/variables'

export const main = css`
  flex-basis: 100%;
  margin-left: 50px;

  ${minMq('MD')} {
    flex-basis: auto;
    margin-left: 0;
  }
`

export const style = {
  main,
}
