import { css } from 'styled-components'
import { minMq } from '@/styles/breakPoints'
import { fontSize } from '@/styles/mixin'
import variables from '@/styles/variables'

export const page = css`
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  //padding-top: 50px;
  background-color: ${variables.WHITE};
  display: flex;
  ${fontSize(14)};
  font-family: 'Noto Sans JP', 'Hiragino Kaku Gothic ProN', 'ヒラギノ角ゴ ProN W3', sans-serif;
  justify-content: flex-start;
  min-height: 100vh;
  position: relative;

  ${minMq('MD')} {
    ${fontSize(16)};
  }
`

export const style = {
  page,
}
