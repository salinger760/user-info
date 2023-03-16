import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs'
import Auth from '@/components/templates/Auth'
import Content from '@/components/templates/Content'
import { UserList } from '@/components/templates/UserList'
//import { UserInfomation } from '@/types/types'
import { Section } from '@/components/molecules/Heading/Section'
import { H } from '@/components/molecules/Heading/H'
import { UserDetail } from '@/types/types'

import SearchForm from '@/components/organisms/SearchForm'
import { Pagenation } from '@/components/organisms/Pagenation'
import { PER_PAGE } from '@/config'

type Props = {
  totalCount: number
  users: Pick<UserDetail, 'id' | 'name' | 'kana' | 'phone_number1' | 'affiliations'>[]
}

const MyPage = ({ users, totalCount }: Props): JSX.Element => {
  const pageTitle = 'ユーザー一覧'

  //console.log('MyPage - ', users)

  return (
    <Auth title={pageTitle}>
      <Content>
        <img id="barcode" />
        <SearchForm />

        <div>
          <Section>
            <H>ユーザー情報</H>
          </Section>
          <UserList users={users} />
        </div>

        <Pagenation totalCount={totalCount} />
      </Content>
    </Auth>
  )
}

export default MyPage

export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
  //console.log('getServerSideProps/ssr invoked Start', ctx)
  const supabase = createServerSupabaseClient(ctx)

  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (!session) return { props: {} }

  const queryString = ctx.query
  let keyword
  let page = 1

  if (Object.keys(queryString).length > 0) {
    keyword = queryString.keyword
    page = queryString.page ? Number(ctx.query.page) + 1 : 1
  }

  //return {
  //  redirect: {
  //    destination: '/login',
  //    permanent: false,
  //  },
  //}
  let query = supabase
    .from('users')
    .select(`*, affiliations(id,name,created_at)`, { count: 'exact' })
    .order('id', { ascending: true })

  if (keyword) {
    query.like('name', `%${keyword}%`)
  }

  const startIndex = (page - 1) * PER_PAGE
  query = query.range(startIndex, startIndex + (PER_PAGE - 1))

  const { data, error, status, count } = await query

  //const { data: users, error } = await supabase
  //  .from('users')
  //  .select(`*, affiliations(id,name,created_at)`)
  //  .order('id', { ascending: true })

  if (error) {
    throw new Error(`${error.message}: ${error.details}`)
  }

  return {
    props: {
      users: data,
      keyword: keyword ? keyword : '',
      page: page,
      totalCount: count ? count : 0,
    },
  }

  //const { data: tasks, error: errorTask } = await supabase
  //  .from('todos')
  //  .select('*')
  //  .order('created_at', { ascending: true })
  //
  //if (errorTask) {
  //  throw new Error(`${errorTask.message}: ${errorTask.details}`)
  //}

  //return { props: { initialSession: session, user: session.user, users } }
}
