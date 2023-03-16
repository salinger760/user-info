import React from 'react'
import { css } from 'styled-components'
import { minMq } from '@/styles/breakPoints'
import variables from '@/styles/variables'

const contentStype = css`
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;

  ${minMq('MD')} {
    padding-left: 0;
    padding-right: 0;
    width: ${variables.CONTENT_W};
  }
`

type Props = {
  children: React.ReactNode
  className?: string
}

const Content = (props: Props): JSX.Element => {
  return (
    <div className={props.className || ''} css={contentStype}>
      {props.children}
    </div>
  )
}

export default Content
