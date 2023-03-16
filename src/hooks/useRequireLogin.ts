import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useUser } from '@supabase/auth-helpers-react'

export function useRequireLogin() {
  const { push } = useRouter()
  const user = useUser()

  useEffect(() => {
    if (!user) push('/login')
  }, [user, push])
}
