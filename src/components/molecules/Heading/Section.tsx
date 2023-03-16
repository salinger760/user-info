import { ReactNode } from 'react'
import { HeadingLevelContext, useLevel } from './context'

export type SectionPrpps = {
  readonly children: ReactNode
}

export const Section = ({ children }: SectionPrpps): JSX.Element => {
  const level = useLevel()
  const nextLevel = Math.min(level + 1, 6)

  return (
    <HeadingLevelContext.Provider value={{ level: nextLevel }}>
      {children}
    </HeadingLevelContext.Provider>
  )
}
