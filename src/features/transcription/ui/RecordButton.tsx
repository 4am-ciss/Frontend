import { useVoiceTransmitter } from '@/features/voice/hooks/use-voicetransmitter'
import { useWebSocket } from '@/features/voice/hooks/use-websocket'
import { useTranslation } from 'react-i18next'
import { Play, Pause } from 'lucide-react'

interface IProps {
    isHost: boolean
}

export default function RecordButton({ isHost }: IProps) {
    const { t } = useTranslation()
    const { wsRef, isConnected } = useWebSocket()
    const { startAudio, stopAudio, isRecording } = useVoiceTransmitter(wsRef, isHost)

    const handleClick = () => {
        if(!isConnected) return
        isRecording? stopAudio() : startAudio()
    }

    return (
        <div className="flex flex-col items-center">
            <button
                onClick={handleClick}
                disabled={!isConnected}
                aria-label={isRecording? t('session.recording.start') : t('session.recording.stop')}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all text-white 
                  ${isRecording ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'} 
                  ${!isConnected ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
                {isRecording ? <Pause size={20} /> : <Play size={20} />}
                <span>
                    {isRecording ? t('session.recording.stop') : t('session.recording.start')}
                </span>
            </button>
            {!isConnected && (
                <p className="text-xs text-gray-400 mt-1">{t('session.connecting')}</p>
            )}
        </div>
    )
}