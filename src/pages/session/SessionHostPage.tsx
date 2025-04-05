import { useState } from 'react'
import { WebSocketProvider } from '@/features/voice/context/WebSocketProvider'
import RecordButton from '@/features/transcription/ui/RecordButton'
import SessionSettings from '@/features/session/ui/SessionSettings'
import { Settings } from 'lucide-react'
import { useSessionSettings } from "@/features/session/hooks/use-session-settings.ts";
import { useInitializeSystem } from "@/features/session/hooks/use-initialize-system.ts";
import { AiSettings } from '@/features/session/types'
import TranscriptionView from '@/features/transcription/ui/TranscriptionView';

export default function SessionHostPage() {
    const sessionId = '1'
    const [isOpen, setIsOpen] = useState(false)

    const { settings, updateSettings } = useSessionSettings()
    const { mutate } = useInitializeSystem()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        mutate({
            model: settings.model,
            language: settings.language,
            device: settings.device,
            task: settings.task,
            initial_window: settings.initialWindow,
            max_window: settings.maxWindow,
            stride: settings.windowStride,
        })
    }

    return (
        <WebSocketProvider sessionId={sessionId}>
            <div className="flex flex-col flex-1 min-h-full px-4 py-6 gap-4">
                <section className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
                    <header className="mb-6">
                        <h1 className="text-2xl font-semibold">Session</h1>
                        <h3 className="text-sm text-gray-700 dark:text-gray-300">
                            발표자 - 김현수
                        </h3>
                        <hr className="my-4 h-0.5 bg-gray-200 dark:bg-gray-600" />
                    </header>
                    <div className="flex items-center gap-4">
                        <RecordButton isHost={true}/>
                        <button
                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 transition"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <Settings size={20} />
                            <span>고급 설정</span>
                        </button>
                    </div>

                    {isOpen && (
                        <div className="mt-4">
                            <SessionSettings
                                settings={settings}
                                onChange={(e) =>
                                    updateSettings(e.target.name as keyof AiSettings, e.target.value)
                                }
                                onNumberChange={(e) =>
                                    updateSettings(
                                        e.target.name as keyof AiSettings,
                                        parseFloat(e.target.value)
                                    )
                                }
                                onSubmit={handleSubmit}
                            />
                        </div>
                    )}
                </section>

                <section className="flex-1 bg-black text-gray-100 shadow-md rounded-lg p-6 overflow-auto">
                    <h2 className="text-2xl font-semibold mb-4"> Transcription </h2>
                    <hr className="mb-6 h-0.5 bg-gray-600" />
                    <TranscriptionView />
                </section>
            </div>
        </WebSocketProvider>
    )
}