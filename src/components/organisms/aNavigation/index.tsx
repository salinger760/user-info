import Link from 'next/link'
import { useToggle } from 'react-use'
import { style } from './index.style'

const Navigation = (): JSX.Element => {
  const [on, toggle] = useToggle(false)

  return (
    <div css={style.wrapMenu}>
      <button css={on ? [style.open, style.menu] : style.menu} onClick={toggle}>
        <span css={style.bar}></span>
        <span css={style.bar}></span>
        <span css={style.bar}></span>
      </button>

      <nav css={on ? [style.nav, style.smallContent] : style.nav} id="nav">
        <ul css={on ? [style.navList, style.openNavList] : style.navList}>
          <li css={style.navItem}>
            <Link href="/about">
              <span css={style.navLink}>About</span>
            </Link>
          </li>

          <li css={style.navItem}>
            <Link href="/post">
              <span css={style.navLink}>News</span>
            </Link>
          </li>

          <li css={style.navItem}>
            <Link href="/contact">
              <span css={style.navLink}>Contact</span>
            </Link>
          </li>

          <li css={style.navItem}>
            <Link href="/contact2">
              <span css={style.navLink}>Contact2</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navigation
