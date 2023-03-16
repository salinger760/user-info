import { Auth as SupabaseAuthComponent, ThemeSupa } from '@supabase/auth-ui-react'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { supabase } from '@/libs/supabase'
import { style } from './index.style'

export const Auth = () => {
  const supabaseClient = useSupabaseClient()

  return (
    <>
      <div css={style.content}>
        <p>あいうえお</p>
      </div>
      <SupabaseAuthComponent
        supabaseClient={supabaseClient}
        appearance={{
          theme: ThemeSupa,
          className: {},

          style: {
            container: {
              marginRight: 'auto',
              marginLeft: 'auto',
            },
          },
        }}
        localization={{
          lang: 'ja',
        }}
      />
    </>
  )
}

export default Auth
