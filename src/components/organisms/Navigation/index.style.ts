import { css } from 'styled-components'
import { minMq } from '@/styles/breakPoints'
import variables from '@/styles/variables'

const wrapMenu = css`
  flex-shrink: 1;

  ${minMq('MD')} {
    flex-grow: 1;
    padding-top: 0;
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
  z-index: 11;
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
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 0;
  left: 0;
  opacity: 0;
  padding-top: calc(${variables.HEADER_H_SP} * 2);
  pointer-events: none;
  position: fixed;
  top: 0;
  transition: opacity 0.6s 0.4s ease, height 0.6s 0.4s ease;
  width: 100vw;

  ${minMq('MD')} {
    background-color: ${variables.WHITE};
    display: block;
    height: 100%;
    opacity: 1;
    padding-top: 0;
    pointer-events: visible;
    position: static;
    transition: none;
    width: 100%;

    &::before {
      content: none;
    }
  }

  &::before {
    background: linear-gradient(240deg, #ffffff, #ffffff 50%, rgba(255, 255, 255, 0) 65%);
    content: '';
    display: block;
    left: auto;
    min-height: 200%;
    position: absolute;
    right: 0;
    top: 0;
    transform: translate(300%);
    transition: transform 0.6s ease;
    width: 200%;
    z-index: -1;
  }
`

const openNavList = css`
  //height: 100vh;
  opacity: 1;
  pointer-events: all;
`

const navList = css`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  font-weight: 500;
  height: auto;
  justify-content: flex-start;
  margin: 0 auto;
  opacity: 0;
  transition: opacity 0.6s ease, height 0.6s ease;

  ${minMq('MD')} {
    height: 100%;
    justify-content: flex-end;
    opacity: 1;
    width: 100%;
  }
`

const navItem = css`
  color: ${variables.BASE_TXC};
  flex-basis: 100%;
  padding-top: calc(${variables.BLOCK_SPACE} * 2);

  ${minMq('MD')} {
    flex-basis: fit-content;
    margin-left: 40px;
    padding-top: 0;
  }

  a {
    align-items: center;
    display: flex;

    padding: 5px 10px;

    ${minMq('MD')} {
      height: 100%;
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
  font-size: 1.6rem;
  font-weight: 700;
`

const menu = css`
  cursor: pointer;
  height: 24px;
  position: relative;
  width: 20px;
  z-index: 11;

  ${minMq('MD')} {
    display: none;
  }
`

const bar = css`
  background-color: ${variables.SUB_C};
  border-radius: 1px;
  display: block;
  height: 2px;
  max-height: 2px;
  min-height: 2px;
  position: absolute;
  right: 0;
  transition: 0.6s ease;
  width: 20px;

  &:nth-child(1) {
    top: 0;
  }
  &:nth-child(2) {
    top: 10;
  }

  &:nth-child(3) {
    bottom: 0;
  }
`

const open = css`
  span {
    &:nth-child(1) {
      background-color: ${variables.THEME_C};
      right: -3px;
      top: 11px;
      transform: rotate(-45deg);
    }

    &:nth-child(2) {
      opacity: 0;
      width: 20px;
    }

    &:nth-child(3) {
      background-color: ${variables.THEME_C};
      bottom: 11px;
      right: -3px;
      transform: rotate(45deg);
    }
  }
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
  menu,
  bar,
  open,
}
