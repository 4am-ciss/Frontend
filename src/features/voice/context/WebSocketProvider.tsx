import { createContext, ReactNode } from 'react'
import { useWebSocketConnection } from '@/features/voice/hooks/use-websocket-connection'

const WebSocketContext = createContext<ReturnType<typeof useWebSocketConnection> | null>(null)

export const WebSocketProvider = ({ sessionId, children }: { sessionId: string, children: ReactNode }) => {
  const ws = useWebSocketConnection(sessionId)

  return (
    <WebSocketContext.Provider value={ws}>
      {children}
    </WebSocketContext.Provider>
  )
}

export { WebSocketContext }
