import { css } from 'styled-components'
import { minMq } from '@/styles/breakPoints'
import { fontSize } from '@/styles/mixin'
import variables from '@/styles/variables'

const wrapMenu = css`
  background-color: ${variables.SUB_BGC};
  height: 100svh;
  left: 0;
  max-width: 50px;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1;

  ${minMq('MD')} {
    max-width: 200px;
    padding: 10px 20px;
    position: static;
  }
`

const navButton = css`
  background-color: ${variables.THEME_C};
  background-size: 200% auto;
  color: #fff;
  cursor: pointer;
  font-weight: 700;
  height: 24px;
  position: relative;
  transition: 0.3s ease;
  width: 20px;
  z-index: 9;
`

const smallContent = css`
  height: 100vh;
  opacity: 1;
  pointer-events: all;

  &::before {
    opacity: 1;
    transform: translate(0);
  }
`

const nav = css`
  //eight: 0;
  //left: 0;
  //opacity: 0;
  //position: fixed;
  //top: 0;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: auto;
  //pointer-events: none;
  transition: opacity 0.6s 0.4s ease, height 0.6s 0.4s ease;
  width: 100%;

  ${minMq('MD')} {
    //background-color: ${variables.BASE_BGC};
    display: block;
    height: auto;
    opacity: 1;
    pointer-events: visible;
    position: static;
    transition: none;
    width: 100%;

    &::before {
      content: none;
    }
  }

  //&::before {
  //  background: linear-gradient(240deg, #ffffff, #ffffff 50%, rgba(255, 255, 255, 0) 65%);
  //  content: '';
  //  display: block;
  //  left: auto;
  //  min-height: 200%;
  //  position: absolute;
  //  right: 0;
  //  top: 0;
  //  transform: translate(300%);
  //  transition: transform 0.6s ease;
  //  width: 200%;
  //  z-index: -1;
  //}
`

const openNavList = css`
  opacity: 1;
  pointer-events: all;
`

const navList = css`
  //opacity: 0;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  font-weight: 500;
  height: auto;
  justify-content: flex-start;
  margin: 50px auto 0;
  transition: opacity 0.6s ease, height 0.6s ease;

  ${minMq('MD')} {
    height: 100%;
    margin: 0 auto;
    opacity: 1;
    width: 100%;
  }
`

const navItem = css`
  flex-basis: 100%;
  padding-top: 30px;

  ${minMq('MD')} {
    //flex-basis: fit-content;
    flex-basis: 100%;
    padding-top: 15px;
  }

  a {
    //color: ${variables.SUB_C};
    align-items: center;
    display: flex;
    justify-content: center;
    padding: 5px 10px;

    ${minMq('MD')} {
      height: 100%;
      justify-content: flex-start;
    }

    &.is-hover {
      background-color: ${variables.SUB_C};
      border-radius: 4px;
      color: ${variables.BASE_TXC};
      span {
        font-weight: 700;
      }
    }

    span {
      display: none;

      ${minMq('MD')} {
        display: inline-block;
      }
    }
  }
`

const logout = css`
  background-color: ${variables.SUB_C};
  border-radius: 2px;
  color: ${variables.BASE_BGC};
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 400px;
  padding: 10px !important;
  text-align: center;
  width: 100%;
`

const navLink = css`
  ${fontSize(14)}
  font-weight: 400;
  margin-left: 0.5em;
`

export const style = {
  wrapMenu,
  navButton,
  smallContent,
  nav,
  openNavList,
  navList,
  navItem,
  navLink,
  logout,
}
