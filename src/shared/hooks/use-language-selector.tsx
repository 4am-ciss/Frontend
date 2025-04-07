import { useState, useRef, useEffect, useCallback } from 'react'
import { useTranslation } from 'react-i18next'

export const useLanguageSelector = () => {
    const { i18n } = useTranslation()
    const [isOpen, setIsOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    const languages = [
        { code: 'en', label: 'English' },
        { code: 'ko', label: '한국어'},
    ]
    const currentLanguaeLabel = languages.find((lang) => lang.code === i18n.language)?.label || 'Language'

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng)
        setIsOpen(false)
    }

    const handleClickOutside = useCallback((event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsOpen(false)
        }
    }, [])

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [handleClickOutside])

    return {
        isOpen,
        setIsOpen,
        dropdownRef,
        languages,
        currentLanguaeLabel,
        changeLanguage,
    }
}