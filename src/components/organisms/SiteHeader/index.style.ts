import { css } from 'styled-components'
import { minMq } from '@/styles/breakPoints'
import { fontSize } from '@/styles/mixin'
import variables from '@/styles/variables'

const siteHeader = css`
  align-items: center;
  background-color: ${variables.SUB_C};

  display: flex;
  flex-basis: 100%;
  height: 50px;
  justify-content: space-between;
  left: 0;
  padding: 5px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99;
  ${minMq('MD')} {
    display: none;
    height: ${variables.HEADER_H_PC};
    justify-content: center;
  }

  a {
    color: ${variables.THEME_C};
  }
`

const siteTitle = css`
  ${fontSize(14)}
  align-items: center;
  display: flex;
  margin-left: 50px;
  max-width: 200px;
  position: static;
  z-index: 1;

  ${minMq('MD')} {
    margin-left: 40px;
  }
`

export const style = {
  siteHeader,
  siteTitle,
}
