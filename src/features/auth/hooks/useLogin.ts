import { useMutation } from "@tanstack/react-query";
import { login } from '../api/login'
import { useAuthStore } from '../model/useAuthStore'
import { toast } from 'react-toastify'

export const useLogin = () => {
    const setUser = useAuthStore((state) => state.login)

    return useMutation({
        mutationFn: login,
        onSuccess: (data) => {
            setUser(data.user)
            localStorage.setItem('accessToken', data.access_token)
            toast.success("로그인 성공!")
        },
        onError: () => {
            toast.error("로그인 실패!")
        }
    })
}