import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '@/features/auth/model/useAuthStore'

export function useRoleRedirect(sessionId: string) {
    const navigate = useNavigate()
    const user = useAuthStore((state) => state.user)

    useEffect(() => {
        if (!user) return

        switch (user.role) {
            case 'conference':
                navigate(`/session/host/${sessionId}`)
                break
            case 'listener':
                navigate(`/session/peer/${sessionId}`)
                break
            case 'admin':
                navigate(`/session/host/${sessionId}`)
                break
            default:
                navigate('/')
        }
    }, [user, sessionId, navigate])
}