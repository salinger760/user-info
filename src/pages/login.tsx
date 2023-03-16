import { useCallback, useEffect, FormEvent } from 'react'
import { useUser } from '@supabase/auth-helpers-react'
import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useMutateAuth } from '@/hooks/useMutateAuth'
import Page from '@/components/templates/Page'
import Content from '@/components/templates/Content'
import { Section } from '@/components/molecules/Heading/Section'
import { style } from '@/components/templates/Page/index.style'
import { BASE_PATH } from '@/config'
import { useRequireLogin } from '@/hooks/useRequireLogin'

const Login = (): JSX.Element => {
  const { email, setEmail, password, setPassword, loginMutation } = useMutateAuth()
  const { push } = useRouter()
  const user = useUser()

  useEffect(() => {
    if (user) push('/mypage')
  }, [user, push])

  useCallback(useRequireLogin, [])

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    loginMutation.mutate()
  }

  const pageTitle = 'Boilerplate'

  return (
    <Page title={pageTitle}>
      <Content>
        <Section>
          <div css={style.wrapSection}>
            <div css={style.homeSection}>
              <h1 css={style.title}>
                <img src={`${BASE_PATH}/common/logo.png`} alt="" />
              </h1>

              <form onSubmit={handleSubmit}>
                <div css={style.input}>
                  <input
                    type="text"
                    required
                    placeholder="メールアドレス"
                    value={email}
                    onInput={(e) => setEmail(e.currentTarget.value)}
                  />
                </div>
                <div css={style.input}>
                  <input
                    type="password"
                    required
                    placeholder="パスワード"
                    value={password}
                    onInput={(e) => setPassword(e.currentTarget.value)}
                  />
                </div>

                <button type="submit" css={style.button}>
                  <span>ログイン</span>
                </button>
              </form>
              <Link href="/signup" css={style.link}>
                アカウント新規作成はこちら
              </Link>
              <Link href="/reset-password/send-email" css={style.link}>
                パスワードを忘れた場合
              </Link>
            </div>
          </div>
        </Section>
      </Content>
    </Page>
  )
}

export default Login

export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const supabase = createServerSupabaseClient(ctx)

  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (session) {
    return {
      redirect: {
        destination: '/mypage',
        permanent: false,
      },
    }
  }
  return {
    props: {},
  }
}
