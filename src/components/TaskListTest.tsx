import { useQueryTasks } from '@/hooks/useQueryTasks'
import { Spinner } from './Spinner'
import { TaskItem } from './TaskItem'
//import { Task } from '@/types/types'

//type Props = {
//  tasks: Task[]
//}

export const TaskListTest = (): JSX.Element => {
  const { data: tasks, status } = useQueryTasks()
  if (status === 'loading') return <Spinner />
  if (status === 'error') return <p>{'Error'}</p>

  return (
    <ul className="my-2">
      {tasks?.map((task) => (
        <TaskItem key={task.id} id={task.id} title={task.title} />
      ))}
    </ul>
  )
}
