import { create } from 'zustand'
import { User } from '@/entities/user/types'

type AuthState = {
    user: User | null
    login: (userData: User) => void
    logout: () => void
}

export const useAuthStore = create<AuthState>()((set) => ({
   user: null,
   login: (userData) => set({user: userData}),
   logout: () => set({user: null}),
}))