import { useEffect, useState, useRef } from "react"
import { useTranscriptionStore } from '@/stores/use-transcription-store'

const DELIMETER = '|||'

export default function TranscriptionView() {
    const transcriptions = useTranscriptionStore((s) => s.transcriptions)

    const [currentLine, setCurrentLine] = useState('')
    const [finalLines, setFinalLines] = useState<{
        text: string; start_time: number; end_time: number}[]>([])

    useEffect(() => {
        if (transcriptions.length === 0) return
        const { text, start_time, end_time } = transcriptions[transcriptions.length - 1]

        if (text.include(DELIMETER)) {
            const clean = text.replace(DELIMETER, '').trim()
            if (clean !== ''){
                setFinalLines((prev) => [...prev, {text: clean, start_time, end_time}])
            }
            setCurrentLine('')
        } else {
            setCurrentLine(text.trim())
        }
    }, [transcriptions])

    return (
        <div className="fixed bottom-4 left-4 w-[420px] max-h-[300px] overflow-y-auto bg-black/90 text-white text-sm rounded-lg p-4 shadow-lg backdrop-blur z-50 space-y-2">
            {finalLines.map((line, idx) => (
                <div key={idx} className="transcription-item">
                    <div className="transcription-text leading-relaxed whitespace-pre-wrap">
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