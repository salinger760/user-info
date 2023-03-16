import { useState, useEffect } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider, Session } from '@supabase/auth-helpers-react'
//import { supabase } from '@/libs/supabase'
import { addHoverEvent } from '@/utils/addHoverEvent'

//import type { definitions } from '@/types/supabase'

import type { AppProps, NextWebVitalsMetric } from 'next/app'

export function reportWebVitals(metric: NextWebVitalsMetric) {
  switch (metric.name) {
    case 'FCP':
      console.log(`FCP: ${Math.round(metric.value * 10) / 10}`)
      break
    case 'LCP':
      console.log(`LCP: ${Math.round(metric.value * 10) / 10}`)
      break
    case 'TTFB':
      console.log(`TTFB: ${Math.round(metric.value * 10) / 10}`)
      break
    case 'Next.js-hydration':
      console.log(
        `Hydration: ${Math.round(metric.startTime * 10) / 10} -> ${
          Math.round((metric.startTime + metric.value) * 10) / 10
        }`,
      )
      break
    default:
      break
  }
}

export default function MyApp({
  Component,
  pageProps,
  router,
}: AppProps<{
  initialSession: Session
}>) {
  useEffect(() => {
    // Processing when hovering to a tag
    addHoverEvent()
  }, [router.pathname])

  //const validateSession = useCallback(async () => {
  //  const {
  //    data: { session },
  //  } = await supabase.auth.getSession()
  //
  //  const user = session?.user
  //
  //  if (user && pathname === '/') {
  //    push('/mypage')
  //  } else if (!user && pathname !== '/') {
  //    await push('/login')
  //  }
  //}, [pathname, push, supabase.auth])
  //

  //
  //useEffect(() => {
  //  validateSession()
  //}, [validateSession])

  //supabase.auth.onAuthStateChange((event, session) => {
  //  if (event === 'SIGNED_IN' && pathname === '/login' && session) {
  //    push('/mypage')
  //  }
  //  if (event === 'SIGNED_OUT') {
  //    push('/login')
  //  }
  //})

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        refetchOnWindowFocus: false,
      },
    },
  })

  //const { push, pathname } = useRouter()
  //supabase.auth.onAuthStateChange((event) => {
  //  console.log('onAuthStateChange - ', event)
  //  if (event === 'SIGNED_IN' || event === 'USER_UPDATED') {
  //    push('/mypage')
  //  }
  //  if (event === 'SIGNED_OUT') {
  //    push('/')
  //  }
  //})

  const [supabaseClient] = useState(() => createBrowserSupabaseClient())

  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </SessionContextProvider>
  )
}
