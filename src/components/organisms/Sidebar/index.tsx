import Link from 'next/link'
import { useToggle } from 'react-use'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { useQueryClient } from '@tanstack/react-query'
import { useLogout } from '@/hooks/useLogout'
import { style } from './index.style'
import {
  ArrowRightOnRectangleIcon,
  Cog6ToothIcon,
  UsersIcon,
  ClipboardDocumentListIcon,
} from '@heroicons/react/24/outline'

const Sidebar = (): JSX.Element => {
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
      <nav css={on ? [style.nav, style.smallContent] : style.nav} id="nav">
        <ul css={on ? [style.navList, style.openNavList] : style.navList}>
          <li css={style.navItem}>
            <Link href="/mypage/settings" title="アカウント管理">
              <Cog6ToothIcon css={''} />
              <span css={style.navLink}>アカウント管理</span>
            </Link>
          </li>

          <li css={style.navItem}>
            <Link href="/mypage/todos" title="ToDo">
              <ClipboardDocumentListIcon css={''} />
              <span css={style.navLink}>ToDo</span>
            </Link>
          </li>

          <li css={style.navItem}>
            <Link href="/mypage" title="ユーザーリスト">
              <UsersIcon css={''} />
              <span css={style.navLink}>ユーザーリスト</span>
            </Link>
          </li>

          <li css={style.navItem}>
            <a onClick={signOut} title="ログアウト">
              <ArrowRightOnRectangleIcon css={''} />
              <span css={style.navLink}>ログアウト</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar
