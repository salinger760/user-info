import { H } from '@/components/molecules/Heading/H'
import { css } from 'styled-components'
import { minMq } from '@/styles/breakPoints'
import variables from '@/styles/variables'

const sectionTitle = css`
  background-color: ${variables.BASE_BGC};
  border-color: ${variables.BASE_BDC};
  border-style: solid;
  border-width: 2px 2px 4px 2px;
  color: ${variables.BASE_BDC};
  font-family: 'DotGothic16', sans-serif;
  font-size: 2.5rem;
  font-weight: 400;
  padding: calc(${variables.BLOCK_PAD} / 2);
  position: relative;
  text-align: center;

  ${minMq('MD')} {
    font-size: 3.3rem;
  }

  &::after {
    border-color: ${variables.BASE_BDC} transparent transparent transparent;
    border-style: solid;
    border-width: 16px 15px 0 15px;
    bottom: -16px;
    content: '';
    height: 0;
    position: absolute;
    right: 50%;
    transform: translateX(50%);
    width: 0;
  }
`

type Props = {
  sectionTitle: string
}

const SectionTitle = (props: Props): JSX.Element => {
  return (
    <header>
      <H css={sectionTitle}>
        <span>{props.sectionTitle}</span>
      </H>
    </header>
  )
}

export default SectionTitle
