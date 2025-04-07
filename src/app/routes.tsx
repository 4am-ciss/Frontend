import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '@/layouts/MainLayout'
import LoginPage from '@/pages/auth/LoginPage'

import SessionPage from "@/pages/session/SessionPage";
import SessionListPage from "@/pages/session/SessionListPage";
import SessionHostPage from "@/pages/session/SessionHostPage";
import SessionPeerPage from "@/pages/session/SessionPeerPage";

import RequireAuth from "@/shared/guards/RequireAuth"
import RequireRole from "@/shared/guards/RequireRole"

export const router = createBrowserRouter([
    {
        path: '/login',
        element: <LoginPage />,
    },
    {
        path: 'session/:sessionId',
        element: (
            <RequireAuth>
                <SessionPage />
            </RequireAuth>
        )
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
                element: (
                    <RequireRole allowedRoles={['admin', 'conference']}>
                        <SessionHostPage />
                    </RequireRole>
                )
            },
            {
                path: 'session/peer/:sessionId',
                element: (
                    <RequireRole allowedRoles={['listener']}>
                        <SessionPeerPage />
                    </RequireRole>
                )
            }
        ]
    }
])