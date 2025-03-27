import api from '@/shared/lib/axios'

export type Session = {
    id: string
    title: string
    speaker: string
    isKoreanSession: boolean
    isActive: boolean
}

export const fetchSessions = async(): Promise<Session[]> => {
    const res = await api.get('/sessions')
    return res.data
}