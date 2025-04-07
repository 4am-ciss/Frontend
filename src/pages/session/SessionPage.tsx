import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useAuthStore } from '@/stores/use-auth-store'

export default function SessionPage() {
    const { sessionId } = useParams()
    const navigate = useNavigate()
    const user = useAuthStore((s) => s.user)

    useEffect(() => {
        if(!user || !sessionId) return

        const isHost = user.role === 'admin' || user.role === 'conference'
        const rolePath = isHost ? 'host' : 'peer'

        navigate(`/session/${rolePath}/${sessionId}`, {replace: true})
    }, [user, sessionId, navigate])

    return null
}