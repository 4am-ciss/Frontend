import { useTranslation } from "react-i18next"

interface IProps {
    value: string
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

export function ModelSelector({value, onChange}: IProps) {
    const { t } = useTranslation()

    const modelOptions =[
        {value: 'tiny', label: t('session.setting.model_options.tiny')},
        {value: 'base', label: t('session.setting.model_options.base')},
        {value: 'small', label: t('session.setting.model_options.small')},
        {value: 'medium', label: t('session.setting.model_options.medium')},
        {value: 'large', label: t('session.setting.model_options.large')},
        {value: 'large-turbo', label: t('session.setting.model_options.large-turbo')},
    ]

    return (
        <div className="mb-4">
            <label className="block text-sm font-medium mb-1">{t('session.setting.model')}</label>
            <select
                name="model"
                value={value}
                onChange={onChange}
                className="w-full border rounded p-2"
            >
                {modelOptions.map(({ value, label }) => (
                    <option key={value} value={value}>{label}</option>
                ))}
            </select>
            <span className="text-sm text-gray-500">{t('setting.model_options.description')}</span>
        </div>
    )
}