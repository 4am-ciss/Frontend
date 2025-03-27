import { useTranslation } from 'react-i18next'
import { ModelSelector } from './settings/ModelSelector'
import { LanguageSelector } from './settings/LanguageSelector'
import { WindowSettings } from './settings/WindowSettings'
import { AiSettings } from '@/features/session/types'

interface SessionSettingsProps {
    settings: AiSettings
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
    onNumberChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

export default function SessionSettings({
    settings,
    onChange,
    onNumberChange,
    onSubmit,
}: SessionSettingsProps) {
    const { t } = useTranslation()
    return (
        <div className="transition-all duration-300 overflow-hidden p-4">
            <h2 className="text-xl font-bold mb-4">{t('session.setting.title')}</h2>
            <form onSubmit={onSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <ModelSelector value={settings.model} onChange={onChange} />
                        <LanguageSelector value={settings.language} onChange={onChange} />
                    </div>
                    <div className="mb-4">
                        <div className="mb-4">
                            <label className="block text-sm font-medium">{t('session.setting.device')}</label>
                            <select
                                name="device"
                                value={settings.device}
                                onChange={onChange}
                                className="w-full border rounded p-2"
                                >
                                <option value="cpu">CPU</option>
                                <option value="gpu">GPU (CUDA)</option>
                            </select>
                            <span className="text-sm text-gray-500">
                                {t('session.settings.device_description')}
                            </span>
                        </div>
                        <div>
                            <label className="block text-sm font-medium">{t('session.setting.task')}</label>
                            <select
                                name="task"
                                value={settings.task}
                                onChange={onChange}
                                className="w-full border rounded p-2"
                            >
                                <option value="recognition">{t('session.setting.task_options.recognition')}</option>
                                <option value="translation">{t('session.setting.task_options.translation')}</option>
                            </select>
                        </div>
                    </div>
                </div>

                <WindowSettings settings={settings} onChange={onNumberChange} />

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition"
                >
                    {t('session.setting.apply')}
                </button>
            </form>
        </div>
    )
}
