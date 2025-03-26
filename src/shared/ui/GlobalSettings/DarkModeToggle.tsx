import { Moon, Sun } from 'lucide-react'
import { useDarkMode } from './use-dark-mode'

const DarkModeToggle = () => {
    const {isDark, toggleDark } = useDarkMode()

    return (
        <button
            aria-label="Toggle Dark Mode"
            onClick={toggleDark}
            className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
    )
}

export default DarkModeToggle