import Link from 'next/link'
import { useRouter } from 'next/router'
import { PER_PAGE } from '@/config'

type Props = {
  totalCount: number
}

export const Pagenation = ({ totalCount }: Props) => {
  const { query } = useRouter()

  const keyword = query.keyword ? query.keyword : ''

  //const onClick = (index: number) => {
  //  router.push({
  //    pathname: '/mypage',
  //    query: { keyword: keyword, type: type, page: index },
  //  });
  //};

  const range = (start: number, end: number) => [...Array(end - start + 1)].map((_, i) => start + i)

  return (
    <ul>
      {range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => (
        <li key={index}>
          <Link href={`/mypage/?keyword=${keyword}&page=${number - 1}`}>{number}</Link>
        </li>
      ))}
    </ul>
  )
}
