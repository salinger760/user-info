import { style } from './index.style'
import Content from '@/components/templates/Content'

type Props = {
  pageTitle: string
}

const PageHeader = (props: Props): JSX.Element => {
  return (
    <header css={style.pageHeader} id="page_header">
      <Content>
        <h1 css={style.title}>
          <span>{props.pageTitle}</span>
        </h1>
      </Content>
    </header>
  )
}

export default PageHeader
