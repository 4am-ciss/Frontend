import { useTranscriptionStore } from '@/stores/use-transcription-store'

export const handleWebSocketMessage = (message: any) => {
    switch (message.type){
        case 'transcription':
            useTranscriptionStore.getState().addTranscription(message.data)
            break
        case 'status':
            console.log('[WS] status: ',message.data)
            break
        case 'error':
            console.error('[WS] error: ',message.data?.message || 'unknown error')
            break
        default:
            console.warn("[WS] Unhandled Message:",message)

    }
}