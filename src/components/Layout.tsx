import { ReactNode } from 'react'
import Head from 'next/head'
import { UserPlusIcon } from '@heroicons/react/24/outline'

type Title = {
  title: string
  children: ReactNode
}
export const Layout = ({ children, title = 'Todo app' }: Title): JSX.Element => {
  const helloStyle = { color: '#123456', width: '40px' }
  return (
    <div className="flex min-h-screen flex-col items-center justify-center font-mono text-gray-800">
      <Head>
        <title>{title}</title>
      </Head>
      <header></header>
      <main>{children}</main>
      <footer>
        <UserPlusIcon style={helloStyle} />
        TEST
      </footer>
    </div>
  )
}
