import { useQuery } from '@tanstack/react-query'
import { fetchSessions } from '../api/fetchSessions'

export const useSessions = () => {
    return useQuery({
        queryKey: ['sessions'],
        queryFn: fetchSessions,
    })
}