import { useEffect } from 'react'
import { useUser } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/router'
export const useLogout = () => {
  //const supabase = useSupabaseClient()
  const { push } = useRouter()
  const user = useUser()
  useEffect(() => {
    if (!user) push('/login')
  }, [user])
}
