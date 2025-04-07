import Header from '@/widgets/Header/Header'
import Footer from '@/widgets/Footer/Footer'
import { Outlet } from 'react-router-dom'
import Sidebar from '@/widgets/Sidebar/Sidebar'
import { useAuthStore } from '@/stores/use-auth-store.ts'

export default function MainLayout() {
    const user = useAuthStore((state) => state.user)

    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <Header />
            <div className="flex flex-1 overflow-hidden">
                {user && <Sidebar />}
                <main className="flex-1 pl-6 pr-4 overflow-auto">
                    <Outlet />
                </main>
            </div>
            <Footer />
        </div>
    )
}