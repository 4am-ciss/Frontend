import { useState, useEffect, useRef, useCallback } from 'react'
import { Languages } from 'lucide-react'
import { useTranscriptionLangStore } from "@/stores/use-transcription-lang-store";
import { TRANSCRIPTION_LANGUAGES } from '@/features/transcription/model/language-options'

const LANGUAGE_LABELS: Record<string, string> = {
    ko: '한국어',
    en: 'English',
    jp: '일본어',
    cn: '중문',
}

export default function TranscriptionLanguageSelector() {
    const dropdownRef = useRef<HTMLDivElement>(null)
    const [isOpen, setIsOpen] = useState(false)

    const selectedLang = useTranscriptionLangStore((s) => s.lang)
    const setLang = useTranscriptionLangStore((s) => s.setLang)

    const toggleDropdown = () => setIsOpen((prev) => !prev)

    const handleClickOutside = useCallback((e: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
            setIsOpen(false)
        }
    }, [])

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [handleClickOutside])

    const selectLanguage = (code: string) => {
        setLang(code as any)
        setIsOpen(false)
    }

    return (
        <div ref={dropdownRef} className="relative inline-block text-left">
            <button
                onClick={toggleDropdown}
                className="flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray text-sm rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition"
                >
                <Languages size={16} />
                {LANGUAGE_LABELS[selectedLang]}
            </button>

            {isOpen && (
                <ul className="absolute mt-2 w-36 bg-white dark:bg-gray-800 shadow-lg rounded z-50 overflow-hidden border dark:border-gray-600">
                    {TRANSCRIPTION_LANGUAGES.map((code) => (
                        <li key={code}>
                            <button
                                onClick={() => selectLanguage(code)}
                                className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                                {LANGUAGE_LABELS[code]}
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}