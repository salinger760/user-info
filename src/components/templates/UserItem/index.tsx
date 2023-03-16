import { UserDetail } from '@/types/types'
import Link from 'next/link'
import { style } from './index.style'
type Props = Pick<UserDetail, 'id' | 'name' | 'kana' | 'phone_number1' | 'affiliations'>

export const UserItem = (user: Props): JSX.Element => {
  const PhoneNumber1 = () => {
    if (user.phone_number1) {
      return (
        <p>
          <span>TEL:</span>
          {String(user.phone_number1)}
        </p>
      )
    }
    return <p>a</p>
  }

  const AffiliationName = () => {
    if (user.affiliations) {
      return <p>{user.affiliations.name}</p>
    }
    return <p></p>
  }

  return (
    <li css={style.cardSection}>
      <Link href="">
        <p>{user.name}</p>
      </Link>
      <p>{user.kana}</p>
      <PhoneNumber1 />
      <AffiliationName />
    </li>
  )
}
