import { useRef, useState, useCallback } from "react";
import { toast } from 'react-toastify'
import { TranscriptionData } from '../model/types'
import { useTranscriptionStore } from '@/stores/use-transcription-store'

export const useWebSocketConnection = (sessionId: string) => {
    const wsRef = useRef<WebSocket | null>(null);
    const [isConnected, setIsConnected] = useState(false);
    const addTranscription = useTranscriptionStore((s) => s.addTranscription);

    const connect = useCallback((sessionId: string) => {
        if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
            console.log(`[WebSocket -${sessionId}] Already Connected!`)
            return
        }

        const ws = new WebSocket(`https://rctiai.duckdns.org/ws?sessionId=${sessionId}`)
        wsRef.current = ws

        ws.onopen = () => {
            console.log(`[WebSocket -${sessionId}] Connected!`)
            setIsConnected(true)
        }

        ws.onmessage = (event: MessageEvent) => {
            try{
                const msg = JSON.parse(event.data)
                if (msg.type === 'transcription') {
                    addTranscription(msg.data as TranscriptionData)
                }
            } catch (err) {
                console.error(`[WebSocket -${sessionId}] Message Parser Error: ${err}`)
            }
        }

        ws.onerror = (e) => {
            toast.error('WebSocket Error!')
            console.error(`[WebSocket -${sessionId}] Error:`,e)
        }

        ws.onclose = () => {
            console.log(`[WebSocket -${sessionId}] Connection Closed!`)
            setIsConnected(false)
        }
    }, [])

    const disconnect = useCallback(() => {
        wsRef.current?.close()
        wsRef.current = null
        setIsConnected(false)
    })

    return {
        wsRef,
        isConnected,
        connect,
        disconnect,
    }
}