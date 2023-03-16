import Link from 'next/link'
import useStore from '@/stores/store'
import { useMutateTask } from '@/hooks/useMutateTask'
import { Task } from '@/types/types'

export const TaskItem = ({ id, title }: Omit<Task, 'created_at' | 'user_id'>): JSX.Element => {
  const update = useStore((state) => state.updateEditedTask)
  const { deleteTaskMutation } = useMutateTask()

  return (
    <li className="my-3 text-lg font-extrabold">
      <span>{title}</span>
      <div className="float-right ml-20 flex">
        <a
          onClick={() => {
            update({
              id: id,
              title: title,
            })
          }}
        >
          edit
        </a>
        <a
          onClick={() => {
            deleteTaskMutation.mutate(id)
          }}
        >
          Trash
        </a>
        <Link href={`/mypage/todos/detail?id=${id}`}>Detail</Link>
      </div>
    </li>
  )
}
