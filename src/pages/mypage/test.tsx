import { Suspense } from 'react'
import { NextPage, GetServerSideProps, GetServerSidePropsContext } from 'next'
import { User, createServerSupabaseClient } from '@supabase/auth-helpers-nextjs'
import Auth from '@/components/templates/Auth'
import Content from '@/components/templates/Content'
import { TaskListTest } from '@/components/TaskListTest'
import { TaskForm } from '@/components/TaskForm'
import { NoticeForm } from '@/components/NoticeForm'
import { NoticeList } from '@/components/NoticeList'
import { Spinner } from '@/components/Spinner'
import { Task, Notice } from '@/types/types'
//import { useLogout } from '@/hooks/useLogout'

type StaticProps = {
  user: User
  tasks: Task[]
  notices: Notice[]
}
const Dashboard: NextPage<StaticProps> = (props) => {
  const pageTitle = 'Boilerplate'

  return (
    <Auth title={pageTitle}>
      <Content>
        <div>
          <div>
            <TaskForm />
            <Suspense fallback={<Spinner />}>
              <TaskListTest tasks={props.tasks} />
            </Suspense>
          </div>
          <div>
            <NoticeForm />
            <NoticeList />
          </div>
        </div>
      </Content>
    </Auth>
  )
}

export default Dashboard

export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
  console.log('getServerSideProps/ssr invoked Start')
  const supabase = createServerSupabaseClient(ctx)

  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (!session) return { props: {} }
  //return {
  //  redirect: {
  //    destination: '/login',
  //    permanent: false,
  //  },
  //}

  const { data: tasks, error: errorTask } = await supabase
    .from('todos')
    .select('*')
    .order('created_at', { ascending: true })

  if (errorTask) {
    throw new Error(`${errorTask.message}: ${errorTask.details}`)
  }

  //console.log('getServerSideProps/ssr invoked1 ', tasks)

  const { data: notices, error: errorNotice } = await supabase
    .from('notices')
    .select('*')
    .order('created_at', { ascending: true })

  if (errorNotice) {
    throw new Error(`${errorNotice.message}: ${errorNotice.details}`)
  }

  //console.log('getServerSideProps/ssr invoked2 ', notices)

  return { props: { initialSession: session, user: session.user, tasks, notices } }
}
