import { useSessions } from '../hooks/use-sessions'
// import { useNavigate } from 'react-router-dom'
// import { useAuthStore } from '@/features/auth/model/useAuthStore'

export default function SessionList() {
    const { data, isLoading } = useSessions()
    // const navigate = useNavigate()
    // const user = useAuthStore((state) => state.user)

    if(isLoading) return <div>Loading...</div>
    if (!data) return <div>No sessions found</div>

    const enterSession = (sessionId: string) => {
        console.log(`Entering session ${sessionId}`)
        // if (!user) return
        // if (user.role === 'conference') navigate(`/session/host/${sessionId}`)
        // else if (user.role === 'listener') navigate(`/session/peer/${sessionId}`)
    }

    return (
        <div className="grid grid-cols-3 gap-4">
            {data.map((session) => (
                <button
                    key={session.id}
                    onClick={() => enterSession(session.id)}
                className="p-4 border rounded hover:bg-gray-100 dark:hover:bg-gray-800">
                    <div className="text-lg font-semibold">{session.title}</div>
                    <div className="text-lg font-semibold">Speaker: {session.speaker}</div>
                </button>
            ))}
        </div>
    )
}