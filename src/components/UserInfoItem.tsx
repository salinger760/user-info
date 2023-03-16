import useStore from '@/stores/store'
//import { useMutateTask } from '@/hooks/useMutateTask'
import { UserDetail } from '@/types/types'

export const UserInfoItem = ({
  id,
  name,
  kana,
  affiliations,
}: Pick<UserDetail, 'id' | 'name' | 'kana' | 'affiliations'>): JSX.Element => {
  //const update = useStore((state) => state.updateEditedTask)
  //const { deleteTaskMutation } = useMutateTask()

  return (
    <>
      <li>
        <p>{id}</p>
        <p>{name}</p>
        <p>{kana}</p>
        <p>{affiliations?.name}</p>
      </li>
      <p>-----------------------</p>
    </>
  )
}
