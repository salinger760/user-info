import { useQuery } from '@tanstack/react-query'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { Task } from '@/types/types'

export const useQueryTasks = () => {
  const supabase = useSupabaseClient()
  const getTasks = async () => {
    const { data, error } = await supabase
      .from('todos')
      .select('*')
      .order('created_at', { ascending: true })

    if (error) {
      throw new Error(`${error.message}: ${error.details}`)
    }
    return data
  }
  return useQuery<Task[], Error>({
    queryKey: ['todos'],
    queryFn: getTasks,
    staleTime: Infinity,
  })
}
