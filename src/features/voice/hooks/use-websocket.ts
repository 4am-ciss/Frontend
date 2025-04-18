import { useContext } from "react";
import { WebSocketContext } from '@/features/voice/context/WebSocketProvider'

export const useWebSocket = () => {
  const context = useContext(WebSocketContext)
  if (!context) {
    throw new Error('useWebSocket must be used within WebSocketProvider')
  }
  return context
}