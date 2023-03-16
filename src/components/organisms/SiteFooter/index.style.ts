import { css } from 'styled-components'
import { minMq } from '@/styles/breakPoints'
import variables from '@/styles/variables'

const siteFooter = css`
  background-color: ${variables.BASE_BGC};
  display: flex;
  margin-top: ${variables.BLOCK_SPACE};
  padding-bottom: ${variables.UNIT};
  padding-top: ${variables.BLOCK_SPACE};
  width: 100%;
`

const wrapFooter = css`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  ${minMq('MD')} {
    justify-content: space-between;
  }
`

const footerLogo = css`
  flex-basis: 100%;
  margin: 0 22px;
  max-width: 200px;

  ${minMq('MD')} {
    flex-basis: 50%;
  }
`

const footerSns = css`
  display: flex;
  flex-basis: 100%;
  justify-content: center;
  margin-top: ${variables.BLOCK_SPACE};

  ${minMq('MD')} {
    flex-basis: unset;
    flex-shrink: 1;
    margin-top: 0;
  }
`

const twitter = css`
  height: auto;
  width: 44px;
`

const copyright = css`
  margin-top: ${variables.BLOCK_SPACE};
  text-align: center;
`

export const style = {
  siteFooter,
  wrapFooter,
  footerLogo,
  footerSns,
  twitter,
  copyright,
}
