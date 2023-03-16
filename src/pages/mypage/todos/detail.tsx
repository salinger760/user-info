import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { User, createServerSupabaseClient } from '@supabase/auth-helpers-nextjs'
import Auth from '@/components/templates/Auth'
import Content from '@/components/templates/Content'
import { Section } from '@/components/molecules/Heading/Section'
import { H } from '@/components/molecules/Heading/H'
import { Task } from '@/types/types'
//import { useLogout } from '@/hooks/useLogout'

type Props = {
  user: User
  task: Task
}
const TodoDetail = (props: Props): JSX.Element => {
  const pageTitle = 'Boilerplate'

  return (
    <Auth title={pageTitle}>
      <Content>
        <Section>
          <H>ToDo</H>
        </Section>
        <div>
          <div>{props.task.title}</div>
          <div>{props.task.user_id}</div>
        </div>
      </Content>
    </Auth>
  )
}

export default TodoDetail

export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const supabase = createServerSupabaseClient(ctx)
  const taskId = ctx.query?.id

  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (!session) return { props: {} }

  const { data: task, error: errorTask } = await supabase
    .from('todos')
    .select('*')
    .eq('id', taskId)
    .single()

  if (errorTask) {
    throw new Error(`${errorTask.message}: ${errorTask.details}`)
  }

  return { props: { initialSession: session, user: session.user, task } }
}
