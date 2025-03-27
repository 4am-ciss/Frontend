import { useState } from 'react'
import { AiSettings} from '@/features/session/types'

const INITTAL_SETTINGS: AiSettings = {
    model: "large",
    language: "ko",
    device: "gpu",
    task: "recognition",
    initialWindow: 2.0,
    maxWindow: 10.0,
    windowStride: 1.0,
}

export const useSessionSettings = () => {
    const [settings, setSettings] = useState<AiSettings>(INITTAL_SETTINGS)

    const updateSettings = (key: keyof AiSettings, value: AiSettings[keyof AiSettings]) => {
        setSettings((prev) => ({
            ...prev,
            [key]: value,
        }))
    }

    return {
        settings,
        updateSettings,
    }
}