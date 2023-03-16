import { useQueryClient, useMutation } from '@tanstack/react-query'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import useStore from '@/stores/store'
import { Task, EditedTask } from '@/types/types'

export const useMutateTask = () => {
  const queryClient = useQueryClient()
  const reset = useStore((state) => state.resetEditedTask)
  const supabase = useSupabaseClient()

  const createTaskMutation = useMutation(
    async (task: Omit<Task, 'id' | 'created_at'>) => {
      const { data, error } = await supabase.from('todos').insert(task).select()
      if (error) throw new Error(error.message)

      return data
    },
    {
      onSuccess: (res) => {
        const previousTodos = queryClient.getQueryData<Task[]>(['todos'])

        if (previousTodos) {
          queryClient.setQueryData(['todos'], [...previousTodos, res[0]])
        }

        reset()
      },
      onError: (err: any) => {
        alert(err.message)
        reset()
      },
    },
  )
  const updateTaskMutation = useMutation(
    async (task: EditedTask) => {
      const { data, error } = await supabase
        .from('todos')
        .update({ title: task.title })
        .eq('id', task.id)
        .select()

      if (error) throw new Error(error.message)
      return data
    },
    {
      onSuccess: (res, variables) => {
        console.log('updateNoticeMutation - res ', res)

        console.log('updateNoticeMutation - variables ', variables)

        const previousTodos = queryClient.getQueryData<Task[]>(['todos'])

        if (previousTodos) {
          queryClient.setQueryData(
            ['todos'],
            previousTodos.map((task) => (task.id === variables.id ? res[0] : task)),
          )
        }

        reset()
      },
      onError: (err: any) => {
        alert(err.message)
        reset()
      },
    },
  )
  const deleteTaskMutation = useMutation(
    async (id: string) => {
      const { data, error } = await supabase.from('todos').delete().eq('id', id)
      if (error) throw new Error(error.message)
      return data
    },
    {
      onSuccess: (_, variables) => {
        const previousTodos = queryClient.getQueryData<Task[]>(['todos'])
        if (previousTodos) {
          queryClient.setQueryData(
            ['todos'],
            previousTodos.filter((task) => task.id !== variables),
          )
        }
        reset()
      },
      onError: (err: any) => {
        alert(err.message)
        reset()
      },
    },
  )
  return { deleteTaskMutation, createTaskMutation, updateTaskMutation }
}
