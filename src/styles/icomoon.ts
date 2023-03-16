import { css } from 'styled-components'
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()
const basePath = publicRuntimeConfig.basePath

const icomoon = css`
  @font-face {
    font-family: 'icomoon';
    src:  url('${basePath}/fonts/icomoon.eot?apqs4c');
    src:  url('${basePath}/fonts/icomoon.eot?apqs4c#iefix') format('embedded-opentype'),
      url('${basePath}/fonts/icomoon.ttf?apqs4c') format('truetype'),
      url('${basePath}/fonts/icomoon.woff?apqs4c') format('woff'),
      url('${basePath}/fonts/icomoon.svg?apqs4c#icomoon') format('svg');
    font-weight: normal;
    font-style: normal;
    font-display: block;
  }

  &:is([class^="icon-before"], [class*=" icon-before"])::before,
  &:is([class^="icon-after"], [class*=" icon-after"])::after {
    /* use !important to prevent issues with browser extensions that change fonts */
    font-family: 'icomoon' !important;
    font-style: normal;
    font-weight: 400;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    vertical-align: bottom;

    /* Better Font Rendering =========== */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  &:is([class^="icon-before"], [class*=" icon-before"])[data-icon="tel"]::before,
  &:is([class^="icon-after"], [class*=" icon-after"])[data-icon="tel"]::after {
    content: "\\f095";
  }

  &:is([class^="icon-before"], [class*=" icon-before"])[data-icon="send"]::before,
  &:is([class^="icon-after"], [class*=" icon-after"])[data-icon="send"]::after {
    content: "\\f1d8";
  }

  &:is([class^="icon-before"], [class*=" icon-before"])[data-icon="calendar"]::before,
  &:is([class^="icon-after"], [class*=" icon-after"])[data-icon="calendar"]::after {
    content: "\\e953";
  }

  &:is([class^="icon-before"], [class*=" icon-before"])[data-icon="search"]::before,
  &:is([class^="icon-after"], [class*=" icon-after"])[data-icon="search"]::after {
    content: "\\e986";
  }

  &:is([class^="icon-before"], [class*=" icon-before"])[data-icon="mail"]::before,
  &:is([class^="icon-after"], [class*=" icon-after"])[data-icon="mail"]::after {
    content: "\\f003";
  }


  // Adobe acrobat & Microsoft office
  &:is([class^="icon-before"], [class*=" icon-before"])[data-icon="acrobat"]::before,
  &:is([class^="icon-after"], [class*=" icon-after"])[data-icon="acrobat"]::after {
    content: "\\e900";
    color: #ee3f24;
  }

  &:is([class^="icon-before"], [class*=" icon-before"])[data-icon="ms-xls"]::before,
  &:is([class^="icon-after"], [class*=" icon-after"])[data-icon="ms-xls"]::after {
    content: "\\e901";
    color: #217346;
  }

  &:is([class^="icon-before"], [class*=" icon-before"])[data-icon="ms-office"]::before,
  &:is([class^="icon-after"], [class*=" icon-after"])[data-icon="ms-office"]::after {
    content: "\\e902";
    color: #e74025;
  }

  &:is([class^="icon-before"], [class*=" icon-before"])[data-icon="ms-ppt"]::before,
  &:is([class^="icon-after"], [class*=" icon-after"])[data-icon="ms-ppt"]::after {
    content: "\\e903";
    color: #d24726;
  }

  &:is([class^="icon-before"], [class*=" icon-before"])[data-icon="ms-doc"]::before,
  &:is([class^="icon-after"], [class*=" icon-after"])[data-icon="ms-doc"]::after {
    content: "\\e904";
    color: #2b579a;
  }


  // Arrow icons
  &:is([class^="icon-before"], [class*=" icon-before"])[data-icon="arrow-l"]::before,
  &:is([class^="icon-after"], [class*=" icon-after"])[data-icon="arrow-l"]::after {
    content: "\\f104";
  }

  &:is([class^="icon-before"], [class*=" icon-before"])[data-icon="arrow-r"]::before,
  &:is([class^="icon-after"], [class*=" icon-after"])[data-icon="arrow-r"]::after {
    content: "\\f105";
  }

  &:is([class^="icon-before"], [class*=" icon-before"])[data-icon="arrow-t"]::before,
  &:is([class^="icon-after"], [class*=" icon-after"])[data-icon="arrow-t"]::after {
    content: "\\f106";
  }

  &:is([class^="icon-before"], [class*=" icon-before"])[data-icon="arrow-b"]::before,
  &:is([class^="icon-after"], [class*=" icon-after"])[data-icon="arrow-b"]::after {
    content: "\\f107";
  }

  &:is([class^="icon-before"], [class*=" icon-before"])[data-icon="arrow-bold-l"]::before,
  &:is([class^="icon-after"], [class*=" icon-after"])[data-icon="arrow-bold-l"]::after {
    content: "\\f053";
  }

  &:is([class^="icon-before"], [class*=" icon-before"])[data-icon="arrow-bold-r"]::before,
  &:is([class^="icon-after"], [class*=" icon-after"])[data-icon="arrow-bold-r"]::after {
    content: "\\f054";
  }

  &:is([class^="icon-before"], [class*=" icon-before"])[data-icon="arrow-bold-t"]::before,
  &:is([class^="icon-after"], [class*=" icon-after"])[data-icon="arrow-bold-t"]::after {
    content: "\\f077";
  }

  &:is([class^="icon-before"], [class*=" icon-before"])[data-icon="arrow-bold-b"]::before,
  &:is([class^="icon-after"], [class*=" icon-after"])[data-icon="arrow-bold-b"]::after {
    content: "\\f078";
  }
`

export default icomoon
