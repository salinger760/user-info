// cssクラスを連結する補助関数
export const classNames = (...classes: (string | boolean | undefined | null)[]) => {
  classes.filter(Boolean).join(' ')
}
