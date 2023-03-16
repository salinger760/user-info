import { css } from 'styled-components'
import { minMq } from '@/styles/breakPoints'
import variables from '@/styles/variables'

const pageHeader = css`
  background-color: ${variables.BASE_BGC};
  padding-bottom: ${variables.BLOCK_SPACE};
  padding-top: ${variables.BLOCK_PAD};
`
const title = css`
  font-size: 2rem;
  margin-top: 0.5em;

  ${minMq('MD')} {
    font-size: 2.2rem;
  }
`

export const style = {
  pageHeader,
  title,
}
