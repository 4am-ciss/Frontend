import { useTranslation } from 'react-i18next'

interface IProps {
    settings: {
        initialWindow: number
        maxWindow: number
        windowStride: number
    }
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export function WindowSettings({settings, onChange}: IProps) {
    const { t } = useTranslation()

    return (
        <div className="grid grid-cols-3 gap-4">
            <div>
                <label className="block text-sm font-medium mb-1">
                    {t('session.setting.initial_window')}
                </label>
                <input
                    type="number"
                    name="initialWindow"
                    value={settings.initialWindow}
                    min={1}
                    max={5}
                    step={0.5}
                    onChange={onChange}
                    className="w-full border rounded p-2"
                />
            </div>
            <div>
                <label className="block text-sm font-medium mb-1">
                    {t('session.setting.max_window')}
                </label>
                <input
                    type="number"
                    name="max_window"
                    value={settings.maxWindow}
                    min={5}
                    max={30}
                    step={1}
                    onChange={onChange}
                    className="w-full border rounded p-2"
                />
            </div>
            <div>
                <label className="block text-sm font-medium mb-1">
                    {t('session.setting.window_stride')}
                </label>
                <input
                    type="number"
                    name="window_stride"
                    value={settings.windowStride}
                    min={.5}
                    max={5}
                    step={.5}
                    onChange={onChange}
                    className="w-full border rounded p-2"
                />
            </div>
        </div>
    )
}