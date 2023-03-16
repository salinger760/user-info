import { ElementType, ReactNode } from 'react'
import { useLevel } from './context'

export type HProps = {
  readonly children: ReactNode
}

export const H = ({ children }: HProps): JSX.Element => {
  const level = useLevel()
  const Heading = `h${level}` as ElementType

  return <Heading>{children}</Heading>
}
