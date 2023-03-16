import { css } from 'styled-components'
import { minMq } from '@/styles/breakPoints'
import variables from '@/styles/variables'

const scheduleSection = css`
  margin-top: ${variables.HEADER_H_SP};
  position: relative;

  ${minMq('MD')} {
    position: relative;
  }

  img {
    display: block;
    margin: 40px auto 0;
  }
`

export const style = {
  scheduleSection,
}
