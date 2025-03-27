import { useWebSocket } from '@/features/voice/hooks/use-websocket'
import { useTranslation } from 'react-i18next';

const ConnectButton = () => {
    const { isConnected, connect, disconnect } = useWebSocket()
    const { t } = useTranslation();

    const handleClick = () => {
        isConnected? disconnect(): connect();
    }

    return (
        <button
            onClick={() => (isConnected? disconnect() : connect(sessionId))}
            className={`px-4 py-2 rounded text-white transition ${
                isConnected ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'
            }`}
        >
            {isConnected ? t('session.websocket.connect') : t('session.websocket.disconnect')}
        </button>
    )
}