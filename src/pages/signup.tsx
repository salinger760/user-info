import { useCallback, useState, FormEvent } from 'react'
import Link from 'next/link'
import { useMutateAuth } from '@/hooks/useMutateAuth'
import Page from '@/components/templates/Page'
import Content from '@/components/templates/Content'
import { Section } from '@/components/molecules/Heading/Section'
import { H } from '@/components/molecules/Heading/H'
import { style } from '@/components/templates/Page/index.style'
import { BASE_PATH } from '@/config'
import { useRequireLogin } from '@/hooks/useRequireLogin'

const ResetPassword = (): JSX.Element => {
  const { email, setEmail, password, setPassword, registerMutation } = useMutateAuth()

  const [hasCreated, setHasCreated] = useState(false)
  useCallback(useRequireLogin, [])

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    registerMutation.mutate()
    setHasCreated(true)
  }

  const pageTitle = 'Boilerplate'

  if (hasCreated) {
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
                  <H>アカウントの作成</H>
                  <p css={style.note}>新規でアカウントを作成しました。</p>
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
                <H>アカウント登録</H>
                <p css={style.note}>初めてご利用の方は、新規アカウント登録が必要です。</p>
              </Section>

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

export default ResetPassword
