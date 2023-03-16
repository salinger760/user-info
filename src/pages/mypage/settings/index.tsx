import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs'
import Auth from '@/components/templates/Auth'
import Content from '@/components/templates/Content'
import { Section } from '@/components/molecules/Heading/Section'
import { H } from '@/components/molecules/Heading/H'
import { EditUser } from '@/components/templates/EditUser'
import { UserDetail, Affiliation } from '@/types/types'

type Props = {
  usersData: Pick<UserDetail, 'id' | 'name' | 'kana' | 'phone_number1' | 'affiliation_id'>
  affiliationsData: Affiliation[]
}
const Settings = ({ usersData, affiliationsData }: Props): JSX.Element => {
  const pageTitle = 'アカウント管理'

  //console.log('const Settings1 - ', data)

  return (
    <Auth title={pageTitle}>
      <Content>
        <div>
          <Section>
            <H>ユーザー情報</H>
          </Section>
          <EditUser usersData={{ ...usersData }} affiliationsData={affiliationsData} />
        </div>
      </Content>
    </Auth>
  )
}

export default Settings

export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const supabase = createServerSupabaseClient(ctx)

  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (!session) return { props: {} }

  const {
    data: usersData,
    error,
    status,
    count,
  } = await supabase
    .from('users')
    .select(`*, affiliations(id,name,created_at)`)
    .eq('id', session.user.id)
    .single()

  const {
    data: affiliationsData,
    error: affiliationsError,
    status: affiliationsStatus,
    count: affiliationsCount,
  } = await supabase.from('affiliations').select(`*`)

  console.log('Settings - data-', usersData)

  console.log('Settings - affiliationsData-', affiliationsData)

  return { props: { usersData, affiliationsData } }
}
