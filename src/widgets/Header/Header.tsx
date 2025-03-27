import { useTranslation } from 'react-i18next'
import { Mic } from 'lucide-react'
import GlobalSettings from "@/shared/ui/GlobalSettings/GlobalSettings.tsx";

const Header = () => {
    const { t } = useTranslation()

    return (
    <header className="w-full px-6 py-4 shadow-sm bg-white dark:bg-gray-900 mb-3">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3 text-gray-800 dark:text-white">
                <Mic size={24} />
                <h1 className="text-xl font-bold">{t('header.title')}</h1>
            </div>
            <div className="flex items-center gap-4">
                <GlobalSettings />
            </div>
        </div>
    </header>
  )
}

export default Header