export const TRANSCRIPTION_LANGUAGES = ['ko', 'en', 'jp', 'cn'] as const

export type TranscriptionLang = typeof TRANSCRIPTION_LANGUAGE[number]