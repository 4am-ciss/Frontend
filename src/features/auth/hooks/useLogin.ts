import { useMutation } from "@tanstack/react-query";
import { login } from '../api/login'
import { toast } from 'react-toastify'

export const useLogin = () => {
    return useMutation({
        mutationFn: login,
    })
}