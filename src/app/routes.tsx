import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '@/layouts/MainLayout'
import LoginPage from '@/pages/auth/LoginPage'
import SessionListPage from "@/pages/session/SessionListPage";
import SessionHostPage from "@/pages/session/SessionHostPage";
import SessionPeerPage from "@/pages/session/SessionPeerPage";

import RequireAuth from "@/shared/guards/RequireAuth"

export const router = createBrowserRouter([
    {
        path: '/login',
        element: <LoginPage />,
    },
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '',
                element: (
                    <RequireAuth>
                        <SessionListPage />
                    </RequireAuth>
                ),
            },
            {
                path: 'session/host/:sessionId',
                element: <SessionHostPage />
            },
            {
                path: 'session/peer/:sessionId',
                element: <SessionPeerPage />
            }
        ]
    }
])