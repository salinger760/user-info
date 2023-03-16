import { createMiddlewareSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export const middleware = async (req: NextRequest) => {
  const res = NextResponse.next()

  //console.log('middleware - res ', res)

  const supabase = createMiddlewareSupabaseClient({ req, res })
  const {
    data: { session },
  } = await supabase.auth.getSession()

  //console.log('middleware - ', session)

  if (session?.user.email) {
    return res
  }

  const redirectUrl = req.nextUrl.clone()
  redirectUrl.pathname = '/'
  return NextResponse.redirect(redirectUrl)
}

export const config = {
  matcher: '/mypage/:path*',
}
