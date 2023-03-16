import { useQueryUserDetail } from '@/hooks/useQueryUserInfomation'
import { Spinner } from './Spinner'
import { UserInfoItem } from '@/components/UserInfoItem'
//import { UserInfomation } from '@/types/types'

export const UserInfoList = (): JSX.Element => {
  const { data, status } = useQueryUserDetail()
  if (status === 'loading') return <Spinner />
  if (status === 'error') return <p>{'Error'}</p>
  console.log('UserInfomationData - ', data)
  return (
    <>
      <div>
        {data?.map((userInfo) => (
          <UserInfoItem
            key={userInfo.id}
            id={userInfo.id}
            name={userInfo.name}
            kana={userInfo.kana}
            affiliations={userInfo.affiliations}
          />
        ))}
      </div>
    </>
  )
}
