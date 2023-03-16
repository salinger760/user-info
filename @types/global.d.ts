import { CSSProp } from 'styled-components'
declare module 'react' {
  interface Attributes {
    css?: CSSProp
  }
}

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[]
  }
}

//type GoogleTagManagerId = `GTM-${string}`
