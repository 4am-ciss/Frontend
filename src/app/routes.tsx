import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '@/layouts/MainLayout'
import LoginPage from '@/pages/auth/LoginPage'
import SessionListPage from "@/pages/session/SessionListPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '',
                element: <SessionListPage />,
            },
            {
                path: '/login',
                element: <LoginPage />,
            }
        ]
    }
])