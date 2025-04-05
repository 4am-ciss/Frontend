import { useParams } from "react-router-dom"
import { WebSocketProvider } from '@/features/voice/context/WebSocketProvider'
import TranscriptionView from '@/features/transcription/ui/TranscriptionView'

export default function SessionPeerPage() {
    const { sessionId } = useParams<{sessionId: string }>()

    if(!sessionId){
        return <p className="text-red-500"> Invalid session ID</p>
    }

    return (
        <WebSocketProvider sessionId={sessionId}>
            <header className="mb-6">
                <h1 className="text-2xl font-semibold">Session</h1>
                <h3 className="text-sm text-gray-700 dark:text-gray-300">
                    발표자 - 김현수
                </h3>
                <hr className="my-4 h-0.5 bg-gray-200 dark:bg-gray-600" />

            </header>
            <div className="min-h-screen flex-col items-center justify-center px-4 py-6 bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
                <h1 className="text-2xl font-bold mb-2"> Listener View</h1>
                <p className="text-sm mb-6 text-gray-500">세션 ID: {sessionId}</p>
                <TranscriptionView />
            </div>
        </WebSocketProvider>
    )
}