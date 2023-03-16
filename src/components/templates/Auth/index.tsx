import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { createGlobalStyle } from 'styled-components'
import HeadInfo from '@/components/HeadInfo'
import SiteHeader from '@/components/organisms/SiteHeader'
import Sidebar from '@/components/organisms/Sidebar'
import ScrollTop from '@/components/molecules/ScrollTop'
import Body from '@/components/templates/Body'
import normalize from '@/styles/normalize'
import common from '@/styles/common'
import icomoon from '@/styles/icomoon'
import { style } from './index.style'

type Props = {
  title: string
  children: React.ReactNode
}

const Auth: NextPage<Props> = (props) => {
  const GlobalStyle = createGlobalStyle`
  ${normalize}
  ${common}
  ${icomoon}
`

  const { asPath } = useRouter()
  const origin =
    typeof window !== 'undefined' && window.location.origin ? window.location.origin : ''

  return (
    <div css={style.page}>
      <GlobalStyle />
      <HeadInfo siteTitle={props.title} pageBaseUrl={origin} pagePath={asPath} />
      <SiteHeader />
      <Sidebar />
      <Body>{props.children}</Body>
      <ScrollTop />
    </div>
  )
}

export default Auth
