import { Languages } from 'lucide-react'
import { useLanguageSelector } from '../hooks/use-language-selector.tsx'

const LanguageChanger = () => {
    const { isOpen,
        setIsOpen,
        dropdownRef,
        languages,
        currentLanguaeLabel,
        changeLanguage,
    } = useLanguageSelector();

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                aria-haspopup="listbox"
                aria-expanded={isOpen}
                onClick={() => setIsOpen(!isOpen)}
                className="px-3 py-1 flex rounded items-center gap-2 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
                <Languages size={18} />
                <span>{currentLanguaeLabel}</span>
            </button>

            {isOpen && (
                <ul
                    className="absolute right-0 mt-2 bg-white dark:bg-gray-800 text-black dark:text-white rounded shadow-lg w-32 z-10"
                    role="listbox"
                >
                    {languages.map(({code, label }) => (
                        <li key={code}>
                            <button
                                onClick={() => changeLanguage(code)}
                                className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                                {label}
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default LanguageChanger