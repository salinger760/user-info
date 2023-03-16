export type UserInfomation = {
  id: string
  created_at: string
  name: string
  kana: string
  phone_number1: number
  phone_number2: number
  authority_id: string
  affiliation_id: string
  dept_id: string
}
export type EditedUserInfo = Omit<UserInfomation, 'created_at'>

export type Affiliation = {
  id: string
  created_at: string
  name: string
}
export type EditedAffiliation = Omit<Task, 'created_at'>

export type UserDetail = UserInfomation & {
  affiliations: Affiliation
}
export type EditedUserDetail = Pick<
  UserDetail,
  'id' | 'name' | 'kana' | 'phone_number1' | 'affiliation_id'
>

export type Task = {
  id: string
  created_at: string
  title: string
  user_id: string | undefined
}
export type EditedTask = Omit<Task, 'created_at' | 'user_id'>

export type Notice = {
  id: string
  created_at: string
  content: string
  user_id: string | undefined
}
export type EditedNotice = Omit<Notice, 'created_at' | 'user_id'>

export type Category = {
  id: number
  categoryId: string
  categoryName: string
}

export type MailForm = {
  name: string
  email: string
  text: string
}

export type CsrfToken = {
  csrf_token: string
  csrf_token_expire: boolean
}
export type ToggleCsrfState = Omit<CsrfToken, 'csrf_token'>

export type VerifyLogin = {
  verify_login: boolean
}
