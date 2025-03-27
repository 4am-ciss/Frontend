import { useTranslation } from 'react-i18next'

interface IProps {
    value: string
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

export function LanguageSelector({value, onChange}: IProps) {
    const { t } = useTranslation();

    const languageOptions = [
        {code: 'ko', label: t('session.setting.language_options.ko')},
        {code: 'en', label: t('session.setting.language_options.en')},
        {code: 'jp', label: t('session.setting.language_options.jp')},
        {code: 'cn', label: t('session.setting.language_options.cn')},
    ]

    return (
        <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
                {t('session.setting.language')}
            </label>
            <select
                name="language"
                value={value}
                onChange={onChange}
                className="w-full border rounded p-2"
            >
                {languageOptions.map(({code, label}) => (
                    <option key={code} value={code}>{label}</option>
                ))}
            </select>
        </div>
    )
}