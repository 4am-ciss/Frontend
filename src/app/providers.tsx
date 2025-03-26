import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@/shared/lib/queryClient'
import { I18nextProvider } from 'react-i18next'
import i18n from '@/shared/i18n'
import { ToastContainer } from 'react-toastify'
import { ReactNode } from 'react'

export function AppProviders( {children} : {children: ReactNode} ) {
    return (
        <QueryClientProvider client={queryClient}>
            <I18nextProvider i18n={i18n}>
                <ToastContainer
                    position="bottom-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
                {children}
            </I18nextProvider>
        </QueryClientProvider>
    )
}
