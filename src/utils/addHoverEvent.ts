export const addHoverEvent = () => {
  // Processing when hovering to a tag
  addHoverClass(document.getElementsByTagName('a'))
  addHoverClass(document.getElementsByTagName('button'))
  addHoverClass(document.getElementsByClassName('hover-target'))
}

const addIsHover = (e: any) => {
  const target = e.currentTarget as HTMLInputElement
  target.classList.add('is-hover')
}

const removeIsHover = (e: any) => {
  const target = e.currentTarget as HTMLInputElement
  target.classList.remove('is-hover')
}

const addHoverClass = (target: any) => {
  let index = 0
  for (index = 0; index < target.length; ++index) {
    target[index].addEventListener('mouseover', addIsHover)
    target[index].addEventListener('touchstart', addIsHover)

    target[index].addEventListener('mouseout', removeIsHover)
    target[index].addEventListener('touchend', removeIsHover)
  }
} 