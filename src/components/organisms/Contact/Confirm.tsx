import emailjs from '@emailjs/browser'
import { useForm, SubmitHandler } from 'react-hook-form'

import useMailFormStore from '@/stores/storeMailForm'
import { EMAILJS_PUBLIC_KEY, EMAILJS_EMAILJS_SERVICE_ID, EMAILJS_PTEMPLATE_ID } from '@/config'

type Props = {
  nextFormStep: () => void
}

type FormInput = {
  name: string
  email: string
  text: string
}

const Confirm = ({ nextFormStep }: Props): JSX.Element => {
  const { editedMailForm } = useMailFormStore()
  const { handleSubmit } = useForm<FormInput>()

  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    await emailjs
      .send(EMAILJS_EMAILJS_SERVICE_ID, EMAILJS_PTEMPLATE_ID, editedMailForm, EMAILJS_PUBLIC_KEY)
      .then(
        (result) => {
          alert(result.text)
        },
        (error) => {
          alert(error.text)
        },
      )
    nextFormStep()
  }

  return (
    <>
      <h2>入力内容確認画面</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>{editedMailForm.name}</p>
        <p>{editedMailForm.email}</p>
        <p>{editedMailForm.text}</p>
        <input type="submit" value="送信" />
      </form>
    </>
  )
}

export default Confirm
