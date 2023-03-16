import Link from 'next/link'
import { useRouter } from 'next/router'
import Navigation from '@/components/organisms/Navigation'
import { H } from '@/components/molecules/Heading/H'
import { BASE_PATH } from '@/config'
import { style } from './index.style'

const SiteHeader = (): JSX.Element => {
  const router = useRouter()

  const Top = (): JSX.Element => {
    return (
      <H>
        <img src={`${BASE_PATH}/common/logo.png`} alt="" />
      </H>
    )
  }

  const PageLogo = (): JSX.Element => {
    return (
      <Link href="/">
        <img src={`${BASE_PATH}/common/logo.png`} alt="" />
      </Link>
    )
  }

  return (
    <header css={style.siteHeader} id="site_header">
      <div css={style.siteTitle}>{router.pathname === '/' ? <Top /> : <PageLogo />}</div>
    </header>
  )
}

export default SiteHeader
