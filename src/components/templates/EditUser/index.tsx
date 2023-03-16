import { useEffect, useState } from 'react'
import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import toast, { Toaster } from 'react-hot-toast'
import FormTextField from '@/components/atoms/FormTextField'
import FormNumberField from '@/components/atoms/FormNumberField '
import FormSelect from '@/components/atoms/FormSelect'
import { UserDetail, Affiliation } from '@/types/types'
//import { useUserStore } from '@/stores/storeUser'
import { useMutateUser } from '@/hooks/useMutateUser'
import { style } from './index.style'
type EditForm = Pick<UserDetail, 'id' | 'kana' | 'name' | 'phone_number1' | 'affiliation_id'>

type Props = {
  usersData: Pick<UserDetail, 'id' | 'name' | 'kana' | 'phone_number1' | 'affiliation_id'>
  affiliationsData: Affiliation[]
}

export const EditUser = ({ usersData, affiliationsData }: Props): JSX.Element => {
  const { updateUserMutation } = useMutateUser()
  //const update = useUserStore((state) => state.updatedEditedUser)
  //const { editedUser } = useUserStore()

  const schema = z.object({
    name: z.string().max(100, { message: '100文字以内にしてね!' }),
    kana: z.string(),
    phone_number1: z.any().refine((val) => !Number.isNaN(parseInt(val, 10)), {
      message: 'Expected number, received a string!!',
    }),

    affiliation_id: z.string(),
  })

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<EditForm>({
    mode: 'onSubmit',
    defaultValues: {
      name: usersData.name,
      kana: usersData.kana,
      phone_number1: usersData.phone_number1,
      affiliation_id: usersData.affiliation_id,
    },
    resolver: zodResolver(schema),
  })

  const onSubmit: SubmitHandler<EditForm> = (data) => {
    console.log('SubmitHandler - ', data)

    toast.success('ユーザー情報を保存しました', {
      position: 'top-right',
    })

    updateUserMutation.mutate({
      id: usersData.id,
      name: data.name,
      kana: data.kana,
      phone_number1: data.phone_number1,
      affiliation_id: data.affiliation_id,
    })
  }

  //const handleOnChenge = (e: React.ChangeEvent<HTMLInputElement>, target: string) => {
  //  update({ ...editedUser, [target]: e.target.value })
  //}
  const [items, setItems] = useState([{ key: '', value: '' }])
  useEffect(() => {
    const affiliationArray = affiliationsData.map((affiliation) => {
      return { key: affiliation.id, value: affiliation.name }
    })
    setItems(affiliationArray)

    console.log('usersData.useEffect - ', usersData)
    //if (usersData.affiliation_id) {
    //  setValue('affiliation_id', usersData.affiliation_id)
    //}

    //update({
    //  id: user.id,
    //  name: user.name,
    //  kana: user.kana,
    //  phone_number1: user.phone_number1,
    //})
  }, [affiliationsData, setValue, usersData])

  return (
    <>
      <h3>基本情報</h3>
      <Toaster />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="name"
          control={control}
          render={({ field: { onChange, value, name } }) => (
            <FormTextField
              value={value}
              changeEvent={(e) => {
                onChange(e)
                //handleOnChenge(e, 'name')
              }}
              size="md"
              placeholder="ユーザー名"
            />
          )}
          defaultValue=""
        />
        <p>{errors.name?.message}</p>

        <Controller
          name="kana"
          control={control}
          render={({ field: { onChange, value, name } }) => (
            <FormTextField
              value={value}
              changeEvent={(e) => {
                //onChange(e, update({ ...editedUser, kana: e.target.value }))
                onChange(e)
              }}
              size="md"
              placeholder="カナ"
            />
          )}
          defaultValue=""
        />
        <p>{errors.kana?.message}</p>

        <Controller
          name="phone_number1"
          control={control}
          render={({ field: { onChange, value, name } }) => (
            <FormNumberField
              value={Number(value)}
              changeEvent={(e) => {
                onChange(e)
                setValue('phone_number1', Number(e.target.value))
                console.log(typeof e.target.value)
                console.log(e.target.value)
                //handleOnChenge(e, 'phone_number1')
              }}
              size="md"
              placeholder="電話番号"
            />
          )}
          defaultValue={0}
        />
        <p>{errors.phone_number1?.message}</p>

        <Controller
          name="affiliation_id"
          control={control}
          render={({ field: { value, onChange } }) => (
            <FormSelect
              items={items}
              value={value}
              changeEvent={(e) => {
                onChange(e)
              }}
              defaultValue={usersData.affiliation_id}
            />
          )}
        />
        <p>{errors.affiliation_id?.message}</p>

        <input type="submit" value="保存" />
      </form>
    </>
  )
}
