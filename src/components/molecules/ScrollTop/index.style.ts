import { css } from 'styled-components'
import { minMq } from '@/styles/breakPoints'
import variables from '@/styles/variables'

const thisSizePc = '64px'
const thisSizeSp = '45px'

const scrollTopBtn = css`
  bottom: 16px;
  color: ${variables.WHITE};
  height: ${thisSizeSp};
  line-height: ${thisSizeSp};
  position: fixed;
  right: 16px;
  transition: all 0.6s;
  width: ${thisSizeSp};
  z-index: 99;

  ${minMq('MD')} {
    bottom: 35px;
    height: ${thisSizePc};
    line-height: ${thisSizePc};
    right: 45px;
    width: ${thisSizePc};
  }

  &.is-hover > span {
    opacity: 0.9;
  }

  > span {
    background-color: ${variables.THEME_C};
    border-radius: 50%;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 20%);
    display: block;
    font-weight: 400;
    height: 100%;
    line-height: inherit;
    opacity: 0.6;
    position: relative;
    text-align: center;
    transition: all 0.6s;

    ${minMq('MD')} {
      font-size: 3rem;
    }

    &::before {
      font-size: 3.5rem;
      line-height: inherit;
    }
  }
`

const activeStyle = css`
  opacity: 1;
`
const hiddenStyle = css`
  opacity: 0;
  pointer-events: none;
`

export const style = {
  scrollTopBtn,
  activeStyle,
  hiddenStyle,
}
