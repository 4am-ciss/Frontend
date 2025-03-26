import axios from 'axios'
import { toast } from 'react-toastify'

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
})

api.interceptors.request.use(
    (config) => {
        config.headers.setContentType('application/json')
        const token = localStorage.getItem('accessToken')
        if (token) config.headers.Authorization = `Bearer ${token}`
        return config
    },
    (error) => Promise.reject(error)
)

api.interceptors.response.use(
    (res) => res,
    (error) => {
        const message = error?.response?.data?.message || 'Something went wrong'
        toast.error(message)
        return Promise.reject(error)
    }
)

export default api;