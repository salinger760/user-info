import { useEffect, useState } from 'react'
import { Session } from '@supabase/supabase-js'
import { supabase } from '@/libs/supabase'

export const useUser = () => {
  const [userSession, setUserSession] = useState<Session | null>(null)

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      setUserSession(session)
    })

    return () => {
      authListener.subscription.unsubscribe()
    }
  }, [])

  return {
    userSession,
  }
}
