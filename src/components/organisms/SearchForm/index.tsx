import { useRouter } from 'next/router'
import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import FormTextField from '@/components/atoms/FormTextField'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

type SearchForm = {
  name: string
}

export const SearchForm = (): JSX.Element => {
  const schema = z.object({
    name: z.string().max(100, { message: '100文字以内にしてね!' }),
  })

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SearchForm>({
    mode: 'onSubmit',
    defaultValues: { name: '' },
    resolver: zodResolver(schema),
  })
  const router = useRouter()

  const onSubmit: SubmitHandler<SearchForm> = (data) => {
    router.push({
      pathname: '/mypage',
      query: { keyword: data.name },
    })
  }

  return (
    <>
      <h2>
        <MagnifyingGlassIcon />
        検索
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="name"
          control={control}
          render={({ field: { onChange, value } }) => (
            <FormTextField
              value={value}
              changeEvent={(e) => {
                onChange(e)
                //(e, 'name')
              }}
              size="md"
              placeholder="ユーザー名"
            />
          )}
          defaultValue=""
        />
        <p>{errors.name?.message}</p>

        <input type="submit" value="検索" />
      </form>
    </>
  )
}

export default SearchForm
