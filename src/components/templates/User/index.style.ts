import { css } from 'styled-components'
import { minMq } from '@/styles/breakPoints'
import variables from '@/styles/variables'

const userSection = css`
  margin-top: 40px;
  position: relative;

  ${minMq('MD')} {
    position: relative;
  }
`

export const style = {
  userSection,
}
