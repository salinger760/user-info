//import emailjs from '@emailjs/browser'
import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import FormTextField from '@/components/atoms/CustomTextField'
import useMailFormStore, { MailFormState } from '@/stores/storeMailForm'
//import { EMAILJS_PUBLIC_KEY, EMAILJS_EMAILJS_SERVICE_ID, EMAILJS_PTEMPLATE_ID } from '@/config'

type Props = {
  nextFormStep: () => void
}

type FormInput = {
  name: string
  email: string
  text: string
}

const Input = ({ nextFormStep }: Props): JSX.Element => {
  const { editedMailForm } = useMailFormStore()
  const update = useMailFormStore((state: MailFormState) => state.updatedEditedMailForm)

  const schema = z.object({
    name: z.string().min(1, { message: '名前は入力必須です!' }),
    email: z
      .string()
      .email({ message: 'メールアドレスの形式にしてね!' })
      .min(1, { message: 'メールアドレスは入力必須です!' }),
    text: z.string().max(100, { message: '100文字以内にしてね!' }),
  })

  const {
    handleSubmit,
    control,
    //getValues,
    formState: { errors },
  } = useForm<FormInput>({
    mode: 'onSubmit',
    defaultValues: {
      name: editedMailForm.name,
      email: editedMailForm.email,
      text: editedMailForm.text,
    },
    resolver: zodResolver(schema),
  })

  const handleOnChenge = (e: React.ChangeEvent<HTMLInputElement>, target: string) => {
    update({ ...editedMailForm, [target]: e.target.value })
  }

  const onSubmit: SubmitHandler<FormInput> = () => {
    nextFormStep()
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="name"
          render={({ field: { onChange, value } }) => (
            <FormTextField
              value={value}
              changeEvent={(e) => {
                onChange(e)
                handleOnChenge(e, 'name')
              }}
              size="md"
              placeholder="なまえ"
            />
          )}
          defaultValue=""
        />
        <p>{errors.name?.message}</p>

        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, value } }) => (
            <FormTextField
              value={value}
              changeEvent={(e) => {
                onChange(e)
                handleOnChenge(e, 'email')
              }}
              size="md"
              placeholder="Eメール"
            />
          )}
          defaultValue=""
        />
        <p>{errors.email?.message}</p>

        <Controller
          control={control}
          name="text"
          render={({ field: { onChange, value } }) => (
            <FormTextField
              value={value}
              changeEvent={(e) => {
                onChange(e)
                handleOnChenge(e, 'text')
              }}
              size="lg"
              placeholder="問い合わせ内容"
            />
          )}
          defaultValue=""
        />
        <p>{errors.text?.message}</p>

        <input type="submit" value="確認" />
      </form>
    </>
  )
}

export default Input
