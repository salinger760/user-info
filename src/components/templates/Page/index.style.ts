import { css } from 'styled-components'
import { minMq } from '@/styles/breakPoints'
import { fontSize } from '@/styles/mixin'
import variables from '@/styles/variables'

export const wrapSection = css`
  //background-color: ${variables.WHITE};
  display: flex;
  flex-direction: column;
  height: 100%;
  inset: 0px;
  justify-content: center;
  padding: 20px;
  position: absolute;
  width: 100%;
`

export const homeSection = css`
  //background-color: ${variables.BASE_BGC};
  border-radius: 6px;
  margin-left: auto;
  margin-right: auto;
  margin-top: ${variables.HEADER_H_SP};
  max-width: 500px;
  padding: 0 10px;
  position: relative;

  ${minMq('MD')} {
    padding: 0;
  }
`

export const title = css`
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
    ::placeholder {
      color: ${variables.GRAY};
    }
  }
`

export const button = css`
  background-color: ${variables.THEME_C};
  border-radius: 2px;
  color: ${variables.WHITE};
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  max-width: 560px;
  padding: 15px 15px;
  text-align: center;
  width: 100%;
`

export const link = css`
  //background-color: ${variables.BASE_BGC};
  display: inline-block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  margin-top: 20px;
  max-width: 560px;
  padding: 15px 15px;
  text-align: center;
  width: 100%;
  width: auto;
`

export const page = css`
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  background-color: ${variables.SUB_BGC};
  display: flex;
  flex-flow: column;
  font-family: 'Noto Sans JP', 'Hiragino Kaku Gothic ProN', 'ヒラギノ角ゴ ProN W3', sans-serif;
  ${fontSize(14)};
  justify-content: flex-start;
  min-height: 100vh;
  padding-top: ${variables.HEADER_H_SP};
  position: relative;

  ${minMq('MD')} {
    ${fontSize(16)};
    padding-top: ${variables.HEADER_H_PC};
  }
`

export const siteHeader = css`
  align-items: center;
  background-color: ${variables.WHITE};
  display: flex;
  height: ${variables.HEADER_H_SP};
  justify-content: space-between;
  left: 0;
  padding: calc(${variables.UNIT} * 2);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99;
  ${minMq('MD')} {
    height: ${variables.HEADER_H_PC};
    justify-content: center;
  }
`

export const siteTitle = css`
  align-items: center;
  display: flex;
  max-width: 200px;
  position: static;
  z-index: 1;
`

export const note = css`
  color: ${variables.WHITE};
`

export const style = {
  homeSection,
  wrapSection,
  title,
  input,
  button,
  link,
  page,
  siteHeader,
  siteTitle,
  note,
}
