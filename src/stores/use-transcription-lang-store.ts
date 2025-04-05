import { create } from 'zustand'
import { TranscriptionLang } from '@/features/transcription/model/language-options'
import i18n from '@/shared/i18n'

interface TranscriptionStore {
    lang: TranscriptionLang
    setLang: (lang: TranscriptionLang) => void
}

export const useTranscriptionLangStore = create<TranscriptionStore>((set) => ({
    lang: i18n.language as TranscriptionLang || 'ko',
    setLang: (lang) => set({ lang }),
}))