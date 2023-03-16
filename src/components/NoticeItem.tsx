import { useEffect, useState } from 'react'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import useStore from '@/stores/store'
import { useMutateNotice } from '@/hooks/useMutateNotice'
import { Notice } from '@/types/types'

export const NoticeItem = ({ id, content, user_id }: Omit<Notice, 'created_at'>): JSX.Element => {
  const [userId, setUserId] = useState<string | undefined>('')
  const update = useStore((state) => state.updateEditedNotice)
  const { deleteNoticeMutation } = useMutateNotice()
  const supabase = useSupabaseClient()

  const getUser = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser()

    return user
  }

  useEffect(() => {
    getUser().then((user) => {
      setUserId(user?.id)
    })
  }, [])

  return (
    <>
      <li className="my-3 text-lg font-extrabold">
        <span>{content}</span>

        {userId === user_id && (
          <div className="float-right ml-20 flex">
            <a
              onClick={() => {
                update({
                  id: id,
                  content: content,
                })
              }}
            >
              Edit
            </a>
            <a
              onClick={() => {
                deleteNoticeMutation.mutate(id)
              }}
            >
              Trash
            </a>
          </div>
        )}
      </li>
    </>
  )
}
