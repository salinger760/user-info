import { css } from 'styled-components'

const timePicker = css`
  input {
    position: relative;

    &::-webkit-datetime-edit-hour-field {
			background-color: transparent;
			color: initial;
		}

    &::-webkit-calendar-picker-indicator {
			cursor: pointer;
			height: 100%;
			left: 0;
			margin-inline-start: 0;
			opacity: 0;
			position: absolute;
			top: 0;
			width: 100%;
    }
  }
`


export const style = {
  timePicker
}
