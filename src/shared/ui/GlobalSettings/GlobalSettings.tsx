import LanguageChanger from './LanguageChanger'
import DarkModeToggle from './DarkModeToggle'

const GlobalSettings = () => {
    return (
        <div className="flex items-center gap-2 text-white">
            <LanguageChanger />
            <DarkModeToggle />
        </div>
    )
}

export default GlobalSettings