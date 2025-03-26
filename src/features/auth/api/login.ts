import api from '@/shared/lib/axios'
import {LoginRequest, LoginResponse} from '../types'

export const login = async (data: LoginRequest): Promise<LoginResponse> => {
    const res = await api.post('/login', data)
    return res.data
}