import Link from 'next/link'
import { style } from './index.style'
import Content from '@/components/templates/Content'
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()
const basePath = publicRuntimeConfig.basePath

const SiteFooter = (): JSX.Element => {
  return (
    <footer css={style.siteFooter}>
      <Content>
        <div css={style.wrapFooter}>
          <div css={style.footerLogo}>
            <Link href="/">
              <img src={`${basePath}/common/logo.png`} alt="" />
            </Link>
          </div>

          <div css={style.footerSns}>
            <a href="" target="_blank" rel="noopener noreferrer">
              <img
                src={`${basePath}/common/twitter.svg`}
                alt="ト"
                css={style.twitter}
              />
            </a>
          </div>
        </div>
        <div css={style.copyright}>
          <p>test</p>
        </div>
      </Content>
    </footer>
  )
}

export default SiteFooter
