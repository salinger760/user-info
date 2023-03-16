import { useQueryClient, useMutation } from '@tanstack/react-query'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { useUserStore } from '@/stores/storeUser'
import { UserDetail, EditedUserDetail } from '@/types/types'

export const useMutateUser = () => {
  const queryClient = useQueryClient()
  const reset = useUserStore((state) => state.resetEditedUser)
  const supabase = useSupabaseClient()

  const createUserMutation = useMutation(
    async (user: Omit<UserDetail, 'id'>) => {
      const { data, error } = await supabase.from('users').insert(user).select()
      if (error) throw new Error(error.message)

      return data
    },
    {
      onSuccess: (res) => {
        const previousTodos = queryClient.getQueryData<UserDetail[]>(['users'])

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
  const updateUserMutation = useMutation(
    async (user: EditedUserDetail) => {
      console.log('updateUserMutation - ', user)

      const { data, error } = await supabase
        .from('users')
        .update({
          name: user.name,
          kana: user.kana,
          phone_number1: user.phone_number1,
          affiliation_id: user.affiliation_id,
        })
        .eq('id', user.id)
        .select()

      if (error) throw new Error(error.message)
      return data
    },
    {
      onSuccess: (res, variables) => {
        //console.log('updateUserMutation - res ', res)
        //console.log('updateUserMutation - variables ', variables)

        const previousTodos = queryClient.getQueryData<UserDetail[]>(['users'])

        if (previousTodos) {
          queryClient.setQueryData(
            ['users'],
            previousTodos.map((user) => (user.id === variables.id ? res[0] : user)),
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
  const deleteUserMutation = useMutation(
    async (id: string) => {
      const { data, error } = await supabase.from('users').delete().eq('id', id)
      if (error) throw new Error(error.message)
      return data
    },
    {
      onSuccess: (_, variables) => {
        const previousTodos = queryClient.getQueryData<UserDetail[]>(['users'])
        if (previousTodos) {
          queryClient.setQueryData(
            ['users'],
            previousTodos.filter((user) => user.id !== variables),
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
  return { deleteUserMutation, createUserMutation, updateUserMutation }
}
