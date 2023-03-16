const breakPoints: { [key: string]: number } = {
  XS: 0,
  SM: 576,
  MD: 768,
  LG: 992,
  XL: 1200,
}
const minMq = (n: string) => {
  return `@media print, screen and (min-width: ${breakPoints[n] + 1}px)`
}

const maxMq = (n: string) => {
  return `@media screen and (max-width: ${breakPoints[n]}px)`
}

export {
  breakPoints,
  minMq,
  maxMq
}
