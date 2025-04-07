import { useAuthStore } from '@/stores/use-auth-store'
import { Navigate, useLocation } from 'react-router-dom'
import { PropsWithChildren} from 'react'

export default function RequireAuth({children }: PropsWithChildren) {
    const user = useAuthStore((s) => s.user)
    const location= useLocation()

    if(!user) {
        return <Navigate to="/login" state={{from: location}} replace />
    }

    return <>{children}</>
}