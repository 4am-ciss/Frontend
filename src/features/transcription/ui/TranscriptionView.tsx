import { useEffect, useState } from 'react'
import { useTranscriptionStore } from '@/stores/use-transcription-store'
import { TranscriptionData } from '@/features/transcription/model/types'

const DELIMITER = '|||'

export default function TranscriptionView() {
  const transcriptions = useTranscriptionStore((s) => s.transcriptions)
  const [currentLine, setCurrentLine] = useState('')
  const [finalLines, setFinalLines] = useState<TranscriptionData[]>([])

  useEffect(() => {
    if (transcriptions.length === 0) return
    const { text, start_time, end_time } = transcriptions[transcriptions.length - 1]

    if (text.includes(DELIMITER)) {
      const clean = text.replace(DELIMITER, '').trim()
      if (clean !== '') {
        setFinalLines((prev) => [...prev, { text: clean, start_time, end_time }])
      }
      setCurrentLine('')
    } else {
      setCurrentLine(text.trim())
    }
  }, [transcriptions])

  return (
    <div className="w-full h-full overflow-y-auto space-y-4">
      {finalLines.map((line, idx) => (
        <div key={idx} className="transcription-item">
          <div className="transcription-text leading-relaxed whitespace-pre-wrap text-white">
            {line.text}
          </div>
          <div className="transcription-meta text-xs text-gray-400 mt-1 flex items-center gap-1">
            <span className="transcription-time-icon">⏱</span>
            <span className="transcription-time">
              {line.start_time.toFixed(2)}s ~ {line.end_time.toFixed(2)}s
            </span>
          </div>
        </div>
      ))}

      {currentLine && (
        <div className="transcription-item">
          <div className="transcription-text text-gray-300">{currentLine}</div>
        </div>
      )}
    </div>
  )
}
