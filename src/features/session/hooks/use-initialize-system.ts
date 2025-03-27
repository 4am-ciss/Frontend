import { useMutation } from '@tanstack/react-query'
import { initializeSystem, SessionSettingsRequest } from '../api/initializeSystem'
import { toast } from 'react-toastify'

export const useInitializeSystem = () => {
    return useMutation({
        mutationFn: (data: SessionSettingsRequest) => initializeSystem(data),
        onSuccess: () => {
            toast.success('Session successfully initialized')
        },
        onError: () =>{
            toast.error('Failed to initialize System')
        }
    })
}