import { create } from 'zustand'
import { EditedUserDetail } from '@/types/types'
import { devtools } from 'zustand/middleware'

export type UserState = {
  editedUser: EditedUserDetail
  updatedEditedUser: (payload: EditedUserDetail) => void
  resetEditedUser: () => void
}

export const useUserStore = create(
  devtools<UserState>((set) => ({
    editedUser: {
      id: '',
      name: '',
      kana: '',
      phone_number1: 0,
      affiliation_id: '',
    },
    updatedEditedUser: (payload) =>
      set({
        editedUser: {
          id: payload.id,
          name: payload.name,
          kana: payload.kana,
          phone_number1: payload.phone_number1,
          affiliation_id: payload.affiliation_id,
        },
      }),
    resetEditedUser: () => {
      set({
        editedUser: {
          id: '',
          name: '',
          kana: '',
          phone_number1: 0,
          affiliation_id: '',
        },
      })
    },
  })),
)
