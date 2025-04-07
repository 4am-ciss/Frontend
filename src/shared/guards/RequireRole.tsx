import { PropsWithChildren } from 'react'
import { useAuthStore } from '@/stores/use-auth-store'
import { Navigate, useLocation } from 'react-router-dom'

interface RequireRoleProps extends PropsWithChildren{
    allowedRoles: string[]
}

export default function RequireRole({allowedRoles, children}: RequireRoleProps){
    const user = useAuthStore((s) => s.user)
    const location = useLocation()

    if(!user){
        return <Navigate to="/login" state={{ from: location}} replace />
    }

    if (!allowedRoles.includes(user.role)) {
        return (
            <div className="p-8 text-center text-red-500 font-semibold">
                접근 권한이 없습니다.
            </div>
        )
    }

    return <>{children}</>
}