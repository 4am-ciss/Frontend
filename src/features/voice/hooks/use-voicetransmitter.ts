import { useRef, useState } from 'react'

export const useVoiceTransmitter = (
    wsRef: React.MutableRefObject<WebSocket | null>,
    isHost: boolean
)=> {
    const audioContextRef = useRef<AudioContext | null>(null);
    const streamRef = useRef<MediaStream | null>(null);
    const workletNodeRef = useRef<AudioWorkletNode | null>(null);

    const [isRecording, setIsRecording] = useState(false);

    const startAudio = async () => {
        if(!isHost || !wsRef.current || wsRef.current.readyState !== WebSocket.OPEN) return

        try{
            const audioContext = new AudioContext({ sampleRate: 16000 })
            await audioContext.audioWorklet.addModule('/pcm-processor.js')

            const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
            const source = audioContext.createMediaStreamSource(stream)
            const workletNode = new AudioWorkletNode(audioContext, 'pcm-processor')

            workletNode.port.onmessage = (event) => {
                if (wsRef.current?.readyState === WebSocket.OPEN) {
                    wsRef.current.send(event.data)
                }
            }

            source.connect(workletNode).connect(audioContext.destination)

            audioContextRef.current = audioContext
            streamRef.current = stream
            workletNodeRef.current = workletNode

            setIsRecording(true)
        } catch (error) {
            console.error('[Voice] Audio init error:',error)
        }
    }

    const stopAudio = () => {
        workletNodeRef.current?.disconnect()
        streamRef.current?.getTracks().forEach(track => track.stop())
        audioContextRef.current?.close()

        setIsRecording(false)
    }

    return {
        startAudio,
        stopAudio,
        isRecording,
    }
}