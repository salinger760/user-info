import { useState, useCallback } from 'react'
import { style } from './index.style'
import useWindowEvent from '@/hooks/useWindowEvent'

const ScrollTop = (): JSX.Element => {
  const [isButtonActive, setIsButtonActive] = useState(false)

  const returnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const scrollWindow = useCallback(() => {
    //ボタンを表示させたい位置
    const top = 100
    let scroll = 0
    scroll = window.scrollY

    if (top <= scroll) {
      setIsButtonActive(true)
    } else {
      setIsButtonActive(false)
    }
  }, [isButtonActive])

  useWindowEvent('scroll', scrollWindow, [isButtonActive], false)

  return (
    <button
      onClick={returnTop}
      css={`
        ${style.scrollTopBtn} ${isButtonActive ? style.activeStyle : style.hiddenStyle}
      `}
    >
      <span className="icon-before" data-icon="arrow-t"></span>
    </button>
  )
}

export default ScrollTop
