import { Link } from 'react-router-dom'

interface SessionCardProps {
    sessionId: string
    title: string
}

export default function SessionCard({sessionId, title}: SessionCardProps){
    return (
        <Link
            to={`/session/${sessionId}`}
            className="block p-4 bg-white rounded shadow hover:bg-gray-100 cursor-pointer transition"
        >
            <h2 className="text-lg font-semibold">{title}</h2>
        </Link>
    )
}