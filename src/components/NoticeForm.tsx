import { FormEvent } from 'react'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import useStore from '@/stores/store'
import { useMutateNotice } from '@/hooks/useMutateNotice'

export const NoticeForm = (): JSX.Element => {
  const supabase = useSupabaseClient()
  const { editedNotice } = useStore()
  const update = useStore((state) => state.updateEditedNotice)
  const { createNoticeMutation, updateNoticeMutation } = useMutateNotice()
  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (editedNotice.id === '') {
      createNoticeMutation.mutate({
        content: editedNotice.content,
        user_id: user?.id,
      })
    } else {
      updateNoticeMutation.mutate({
        id: editedNotice.id,
        content: editedNotice.content,
      })
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="New notice ?"
        value={editedNotice.content}
        onChange={(e) => update({ ...editedNotice, content: e.target.value })}
      />
      <button type="submit">{editedNotice.id ? 'Update' : 'Create'}</button>
    </form>
  )
}
