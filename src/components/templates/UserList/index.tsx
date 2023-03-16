import { UserItem } from '@/components/templates/UserItem'
import { UserDetail } from '@/types/types'
import { style } from './index.style'

type Props = {
  users: Pick<UserDetail, 'id' | 'name' | 'kana' | 'phone_number1' | 'affiliations'>[]
}

export const UserList = ({ users }: Props): JSX.Element => {
  return (
    <ul css={style.ListSection}>
      {users?.map((user) => (
        <UserItem key={user.id} {...user} />
      ))}
    </ul>
  )
}
