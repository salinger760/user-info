import { useQuery } from '@tanstack/react-query'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { UserDetail } from '@/types/types'

export const useQueryUserDetail = () => {
  const supabase = useSupabaseClient()

  const getUserDetail = async () => {
    const { data, error } = await supabase
      .from('users')
      .select(`*, affiliations(id,name,created_at)`)

    if (error) {
      throw new Error(`${error.message}: ${error.details}`)
    }

    console.log('useQueryUserInfomation1 - ', data)
    return data
  }
  return useQuery<UserDetail[], Error>({
    queryKey: ['userDetail'],
    queryFn: getUserDetail,
    staleTime: Infinity,
  })
}
