import { css } from 'styled-components'
import { minMq, maxMq } from './breakPoints'
import { fontSize } from './mixin'
import variables from './variables'
// import { defineIcoMoon } from '../../shared/styles/icomoon';
// import '../fonts';

const common = css`
  main {
    flex: 1;
  }

  h2 {
    color: ${variables.BASE_TXC};
    padding-bottom: 10px;
    margin-bottom: -10px;
    ${fontSize(30)};
    font-style: normal;
    font-weight: 500;
    line-height: 100%;
    width: fit-content;

    span {
      padding-bottom: 10px;
      margin-bottom: -10px;
      ${fontSize(80)};
      font-style: normal;
      font-weight: 500;
      line-height: 100%;
      width: fit-content;
    }
  }

  h3 {
    color: ${variables.SUB_BDC};
    font-weight: 700;
  }

  a {
    cursor: pointer;
    color: ${variables.LINK_TXC};
    text-decoration: none;

    &.is-hover {
      color: ${variables.LINK_HVC};
      transition: all 0.2s;
      img,
      span {
        opacity: 0.75;
      }
    }

    img,
    span {
      display: block;
      max-width: 100%;
      pointer-events: none;
    }
  }

  button {
    cursor: pointer;
  }

  [data-mq='sp'] {
    ${minMq('MD')} {
      display: none !important;
    }
  }

  [data-mq='pc'] {
    ${maxMq('MD')} {
      display: none !important;
    }
  }

  svg {
    height: 24px;
    width: 24px;
  }
`

export default common
