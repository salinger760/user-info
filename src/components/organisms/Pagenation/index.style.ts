import { css } from 'styled-components'
import { minMq } from '@/styles/breakPoints'
import variables from '@/styles/variables'

const pagenation = css`
  background-color: ${variables.BASE_BGC};
  border-radius: 5px;
  color: ${variables.BASE_BDC};
  display: flex;
  font-weight: 700;
  justify-content: center;
  margin-top: 100px;
  padding-bottom: ${variables.BLOCK_SPACE};
  padding-top: ${variables.BLOCK_PAD};
`

const page = css`
  margin-left: 20px;
`

const currentPage = css`
  background-color: ${variables.BASE_BDC};
  border-radius: 50%;
  color: ${variables.BASE_BGC};
  height: 40px;
  position: relative;
  width: 40px;

  span {
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`

const dots = css`
  padding: 12px;
`

const prev = css`
  margin-left: 20px;
`

const next = css`
  margin-left: 20px;
`

const title = css`
  font-size: 2rem;
  margin-top: 1.5em;

  ${minMq('MD')} {
    font-size: 2.2rem;
  }
`

export const style = {
  currentPage,
  dots,
  pagenation,
  page,
  prev,
  next,
  title,
}
