import { create } from 'zustand'
import { TranscriptionData } from '@/features/transcription/model/types'

interface TranscriptionStore {
    transcriptions: TranscriptionData[]
    addTranscription: (data: TranscriptionData) => void
    reset: () => void
}

export const useTranscriptionStore = create<TranscriptionStore>((set) => ({
    transcriptions: [],
    addTranscription: (data) =>
        set((state) => ({
            transcriptions: [...state.transcriptions, data],
        })),
    reset: () => set({ transcriptions: [] }),
}))