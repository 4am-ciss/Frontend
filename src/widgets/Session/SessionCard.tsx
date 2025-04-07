import { useNavigate } from 'react-router-dom'
import { Languages } from 'lucide-react'

interface SessionCardProps {
    id: string
    title: string
    host: string
    time: string
    disabled: boolean
    isKoreanSession: boolean
}

export default function SessionCard({
                                        id,
                                        title,
                                        host,
                                        time,
                                        disabled,
                                        isKoreanSession,
                                    }: SessionCardProps) {

    const navigate = useNavigate()

    const handleClick = () => {
        if(disabled) return
        navigate(`/session/${id}`)
    }

    return (
        <div
            onClick={handleClick}
            className={`p-4 border rounded shadow-sm transition cursor-pointer
            ${disabled ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'hover:bg-gray-100 dark:hover:bg-gray-800'}
            `}
        >
            <h3 className="text-lg font-semibold">{title} {isKoreanSession && (
                <div className="flex items-center gap-1">
                    <Languages size={14} className="text-red-500" />
                    <span className="text-xs font-bold text-red-500">KOR</span>
                </div>
            )}</h3>
            <p className="text-sm">발표자: {host}</p>
            <p className="text-sm">{time}</p>
            {disabled && (
                <p className="text-xs text-red-500 mt-1">진행되지 않는 세션입니다</p>
            )}
        </div>
    )
}