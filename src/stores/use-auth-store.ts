import { create } from 'zustand'
import { User } from '@/entities/user/types.ts'

type AuthState = {
    user: User | null
    login: (userData: User) => void
    logout: () => void
}

const savedUser = localStorage.getItem('user')

export const useAuthStore = create<AuthState>()((set) => ({
   user: savedUser? JSON.parse(savedUser) : null,

   login: (userData) => {
       localStorage.setItem('user', JSON.stringify(userData))
       set({user: userData})
   },
   logout: () => {
       localStorage.removeItem('user')
       localStorage.removeItem('accessToken')
       set({user: null})
   },
}))