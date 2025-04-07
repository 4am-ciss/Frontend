import { useSessions } from '../hooks/use-sessions'
import { useAuthStore } from '@/stores/use-auth-store'
import SessionCard from '@/widgets/Session/SessionCard'

export default function SessionList() {
    const { data, isLoading } = useSessions()
    const user = useAuthStore((s) => s.user)

    if(isLoading) return <div>Loading...</div>
    if (!data) return <div>No sessions found</div>
    if (!user) return <div>로그인이 필요합니다</div>

    return (
        <div className="grid grid-cols-3 gap-4">
            {data.map((session) => (
                <SessionCard
                key={session.id}
                id={session.id}
                title={session.title}
                host={session.speaker}
                time={session.time}
                disabled={session.isDisabled ?? false}
                isKoreanSession={session.isKoreanSession ?? false}
                />
            ))}
        </div>
    )
}