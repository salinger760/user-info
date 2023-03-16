import { useState, FormEvent } from 'react'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import Link from 'next/link'
import { useMutateAuth } from '@/hooks/useMutateAuth'
import Page from '@/components/templates/Page'
import Content from '@/components/templates/Content'
import { Section } from '@/components/molecules/Heading/Section'
import { H } from '@/components/molecules/Heading/H'
import { style } from '@/components/templates/Page/index.style'
import { BASE_PATH } from '@/config'

const ResetPassword = (): JSX.Element => {
  const { password, setPassword } = useMutateAuth()
  const supabase = useSupabaseClient()
  const [isSend, setIsSend] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const { error } = await supabase.auth.updateUser({ password: password })

      setIsSend(true)

      if (error) {
        throw error
      }
    } catch (error) {
      alert('パスワードリセットができませんでした。')
    }
  }

  const pageTitle = 'Boilerplate'

  if (isSend) {
    return (
      <Page title={pageTitle}>
        <Content>
          <Section>
            <div css={style.wrapSection}>
              <div css={style.homeSection}>
                <h1 css={style.title}>
                  <img src={`${BASE_PATH}/common/logo.png`} alt="" />
                </h1>

                <Section>
                  <H>パスワード再設定</H>
                  <p css={style.note}>パスワードが更新されました。</p>
                </Section>

                <Link href="/login" css={style.link}>
                  ログイン画面へ
                </Link>
              </div>
            </div>
          </Section>
        </Content>
      </Page>
    )
  }

  return (
    <Page title={pageTitle}>
      <Content>
        <Section>
          <div css={style.wrapSection}>
            <div css={style.homeSection}>
              <h1 css={style.title}>
                <img src={`${BASE_PATH}/common/logo.png`} alt="" />
              </h1>

              <Section>
                <H>パスワード再設定</H>
              </Section>

              <form onSubmit={handleSubmit}>
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
                  <span>送信</span>
                </button>
              </form>
              <Link href="/signup" css={style.link}>
                アカウント新規作成はこちら
              </Link>
              <Link href="/login" css={style.link}>
                ログイン画面へ
              </Link>
            </div>
          </div>
        </Section>
      </Content>
    </Page>
  )
}

export default ResetPassword
