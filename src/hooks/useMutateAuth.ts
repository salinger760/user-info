import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { useSupabaseClient } from '@supabase/auth-helpers-react'

export const useMutateAuth = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const reset = () => {
    setEmail('')
    setPassword('')
  }

  const supabase = useSupabaseClient()

  const loginMutation = useMutation(
    async () => {
      const { data, error } = await supabase.auth.signInWithPassword({ email, password })

      console.log('-----------------------')
      console.log({ data, error })

      if (error) throw new Error(error.message)

      // User infomation
      const sdata = await supabase.auth.getSession()
      console.log('getSession - ', sdata)
    },
    {
      onError: (err: any) => {
        alert(err.message)
        reset()
      },
    },
  )

  const registerMutation = useMutation(
    async () => {
      const { error } = await supabase.auth.signUp({ email, password })
      if (error) throw new Error(error.message)
    },
    {
      onError: (err: any) => {
        alert(err.message)
        reset()
      },
    },
  )

  const logoutMutation = useMutation(
    async () => {
      const { error } = await supabase.auth.signOut()
      console.log('logoutMutation - ', error)

      if (error) throw new Error(error.message)
    },
    {
      onError: (err: any) => {
        alert(err.message)
        reset()
      },
    },
  )

  return {
    email,
    setEmail,
    password,
    setPassword,
    loginMutation,
    logoutMutation,
    registerMutation,
  }
}
