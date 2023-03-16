import Link from 'next/link'
import { useToggle } from 'react-use'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { useQueryClient } from '@tanstack/react-query'
import { useLogout } from '@/hooks/useLogout'
import { style } from './index.style'

const Navigation = (): JSX.Element => {
  const [on, toggle] = useToggle(false)
  const supabase = useSupabaseClient()
  useLogout()
  const queryClient = useQueryClient()

  const signOut = () => {
    supabase.auth.signOut()
    queryClient.removeQueries(['todos'])
    queryClient.removeQueries(['notices'])
  }

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
            <a onClick={signOut}>
              <span css={style.navLink}>Sign out!</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navigation
