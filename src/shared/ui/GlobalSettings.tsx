import LanguageChanger from './LanguageChanger.tsx'
import DarkModeToggle from './DarkModeToggle.tsx'

const GlobalSettings = () => {
    return (
        <div className="flex items-center gap-2">
            <LanguageChanger />
            <DarkModeToggle />
        </div>
    )
}

export default GlobalSettings