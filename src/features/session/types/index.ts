export const MODELS = ['tiny', 'base', 'small', 'medium', 'large', 'large-turbo'] as const
export const LANGUAGES = ['ko', 'en', 'jp', 'cn'] as const
export const DEVICES = ['cpu', 'gpu'] as const
export const TASKS = ['recognition', 'translation'] as const

export type Model = typeof MODELS[number]
export type Language = typeof LANGUAGES[number]
export type Device = typeof DEVICES[number]
export type Task = typeof TASKS[number]

export interface AiSettings {
  model: Model
  language: Language
  device: Device
  task: Task
  initialWindow: number
  maxWindow: number
  windowStride: number
}
