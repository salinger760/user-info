import { css } from 'styled-components'
import { minMq } from './breakPoints'
import variables from './variables'

const fontSize = (size: number, base = 16) => `
font-size: ${size}px; 
font-size: calc(${size / base} * 1rem);
`

const basisButton = css`
  background-color: ${variables.BTN_BGC};
  border-radius: 10px;
  color: ${variables.BTN_TXC};
  display: block;
  ${fontSize(20)};
  line-height: 45px;
  margin: calc(${variables.BLOCK_SPACE}*2) auto 0;
  text-align: center;
  text-decoration: none;
  transition: all 0.1s ease 0s;
  width: 180px;

  ${minMq('MD')} {
    ${fontSize(24)};
    line-height: 60px;
    width: 200px;
  }

  &.is-hover {
    background-color: ${variables.BTN_TXC};
    color: ${variables.BTN_BGC};
  }
`

export { fontSize, basisButton }
