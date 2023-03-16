import { css, FlattenSimpleInterpolation } from 'styled-components'
import { Size } from '.'

const text = (size: Size) => {
  let ret: FlattenSimpleInterpolation = []

  switch (size) {
    case 'sm':
      ret = css`
        width: 60px;
      `
      break

    case 'md':
      ret = css`
        width: 120px;
      `
      break

    case 'lg':
      ret = css`
        width: 100%;
      `
      break
  }

  return ret
}

export const style = {
  text,
}
