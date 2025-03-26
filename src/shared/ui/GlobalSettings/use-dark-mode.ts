import { useEffect, useState } from "react"

export const useDarkMode = () => {
    const [isDark, setIsDark] = useState(() =>
        document.documentElement.classList.contains("dark")
    )

    const toggleDark = () => {
        document.documentElement.classList.toggle("dark")
        setIsDark((prev) => !prev)
        localStorage.setItem('theme', isDark? 'light': 'dark')
    }

    useEffect(() => {
        const saved = localStorage.getItem('theme')
        if (saved === 'dark'){
            document.documentElement.classList.add("dark")
            setIsDark(true)
        }
    },[])

    return { isDark, toggleDark }
}