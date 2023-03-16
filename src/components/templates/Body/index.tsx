import { style } from './index.style'

type Props = {
  children: React.ReactNode
}

const Body = (props: Props): JSX.Element => {
  return <main css={style.main}>{props.children}</main>
}

export default Body
