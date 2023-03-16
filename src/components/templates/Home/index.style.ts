import { css } from 'styled-components'
import { minMq } from '@/styles/breakPoints'
import variables from '@/styles/variables'

const mainSection = css`
  //margin-top: ${variables.HEADER_H_SP};
  height: 100vh;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  position: relative;
  width: 100%;

  ${minMq('MD')} {
    position: relative;
  }
`

const messgeSectin = css``

const visual = css`
  border: none;
  box-sizing: border-box;
  display: block;
  height: 0px;
  inset: 0px;
  margin: auto;
  max-height: 100%;
  max-width: 100%;
  min-height: 100%;
  min-width: 100%;
  object-fit: cover;
  padding: 0px;
  position: absolute;
  width: 0px;
`

const title = css`
  margin-bottom: 80px;
`

const input = css`
  background-color: ${variables.WHITE};
  margin-top: 15px;

  input {
    border-radius: 2px;
    line-height: 1.6;
    padding: 10px;
    width: 100%;
  }
`

const button = css`
  background-color: ${variables.SUB_C};
  border-radius: 2px;
  color: ${variables.BASE_BGC};
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  max-width: 400px;
  padding: 15px 15px;
  text-align: center;
  width: 100%;
`

export const style = {
  mainSection,
  messgeSectin,
  visual,
  title,
  input,
  button,
}
