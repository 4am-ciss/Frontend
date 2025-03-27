import api from '@/shared/lib/axios'

export type SessionSettingsRequest = {
    model: string
    language: string
    device: string
    task: string
    initial_window: number
    max_window: number
    stride: number
}

export const initializeSystem = async (data: SessionSettingsRequest): Promise<void> => {
    const response = await api.post('/session/init', data)
    return response.data
}