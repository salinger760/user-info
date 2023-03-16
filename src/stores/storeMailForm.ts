import create from 'zustand'
import { MailForm } from '@/types/types'

export type MailFormState = {
  editedMailForm: MailForm
  updatedEditedMailForm: (payload: MailForm) => void
  resetEditedMailForm: () => void
}

const useMailFormStore = create<MailFormState>((set) => ({
  editedMailForm: {
    name: '',
    email: '',
    text: '',
  },
  updatedEditedMailForm: (payload: MailForm) =>
    set({
      editedMailForm: payload,
    }),
  resetEditedMailForm: () => {
    set({
      editedMailForm: {
        name: '',
        email: '',
        text: '',
      },
    })
  },
}))

export default useMailFormStore
