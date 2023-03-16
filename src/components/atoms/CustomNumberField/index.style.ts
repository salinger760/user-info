import { css, FlattenSimpleInterpolation } from 'styled-components'
import { Size } from '.'

const size = (size: Size) => {
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

const numberField = css`
  .MuiInputBase-input {
    text-align: right;

    &::-webkit-inner-spin-button {
      display: none;
    }
  }
`

export const style = {
  size,
  numberField,
}
