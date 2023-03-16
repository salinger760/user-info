import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import Link from 'next/link'
import Page from '@/components/templates/Page'
import Content from '@/components/templates/Content'
import { Section } from '@/components/molecules/Heading/Section'
import { H } from '@/components/molecules/Heading/H'
import { style } from '@/components/templates/Page/index.style'
import { BASE_PATH } from '@/config'

type Props = InferGetServerSidePropsType<typeof getServerSideProps>

const Home = ({ email }: Props): JSX.Element => {
  const pageTitle = 'Boilerplate'

  return (
    <Page title={pageTitle}>
      <Content>
        <Section>
          <div css={style.wrapSection}>
            {email ? (
              <>
                <p>Welcome {email}!</p>
                <Link href="/mypage">Go to Mypage</Link>
              </>
            ) : (
              <>
                <p>please Login</p>
                <Link href="/login">Go to Auth</Link>
              </>
            )}
          </div>
        </Section>
      </Content>
    </Page>
  )
}

export default Home
export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const supabase = createServerSupabaseClient(ctx)

  const {
    data: { session },
  } = await supabase.auth.getSession()
  if (session) {
    return {
      props: {
        email: session.user?.email || '',
      },
    }
  }
  return {
    props: {
      email: '',
    },
  }
}
