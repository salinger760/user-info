import { useQueryClient, useMutation } from '@tanstack/react-query'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import useStore from '@/stores/store'
//import { supabase } from '@/libs/supabase'
import { Notice, EditedNotice } from '@/types/types'

export const useMutateNotice = () => {
  const queryClient = useQueryClient()
  const reset = useStore((state) => state.resetEditedNotice)
  const supabase = useSupabaseClient()

  const createNoticeMutation = useMutation(
    async (notice: Omit<Notice, 'id' | 'created_at'>) => {
      const { data, error } = await supabase.from('notices').insert(notice).select()
      if (error) throw new Error(error.message)
      return data
    },
    {
      onSuccess: (res) => {
        const previousNotices = queryClient.getQueryData<Notice[]>(['notices'])
        if (previousNotices) {
          queryClient.setQueryData(['notices'], [...previousNotices, res[0]])
        }
        reset()
      },
      onError: (err: any) => {
        alert(err.message)
        reset()
      },
    },
  )
  const updateNoticeMutation = useMutation(
    async (notice: EditedNotice) => {
      console.log('EditedNotice - ', notice)

      const { data, error } = await supabase
        .from('notices')
        .update({ content: notice.content })
        .eq('id', notice.id)
        .select()

      console.log('updateNoticeMutation - error ', error)
      if (error) throw new Error(error.message)

      console.log('updateNoticeMutation - data ', data)

      return data
    },
    {
      onSuccess: (res, variables) => {
        console.log('updateNoticeMutation - res ', res)

        console.log('updateNoticeMutation - variables ', variables)

        const previousNotices = queryClient.getQueryData<Notice[]>(['notices'])
        if (previousNotices) {
          queryClient.setQueryData(
            ['notices'],
            previousNotices.map((notice) => (notice.id === variables.id ? res[0] : notice)),
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
  const deleteNoticeMutation = useMutation(
    async (id: string) => {
      const { data, error } = await supabase.from('notices').delete().eq('id', id)
      if (error) throw new Error(error.message)
      return data
    },
    {
      onSuccess: (_, variables) => {
        const previousNotices = queryClient.getQueryData<Notice[]>(['notices'])
        if (previousNotices) {
          queryClient.setQueryData(
            ['notices'],
            previousNotices.filter((notice) => notice.id !== variables),
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
  return { deleteNoticeMutation, createNoticeMutation, updateNoticeMutation }
}
