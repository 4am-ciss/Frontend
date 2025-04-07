import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { useLogin} from '../hooks/useLogin'
import { useAuthStore } from '@/stores/use-auth-store'
import { toast } from 'react-toastify';

export default function LoginForm() {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const loginStore = useAuthStore((s) => s.login);

    const { mutate } = useLogin()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        mutate(
            {email, password},
            {
                onSuccess: (data) => {
                    loginStore(data.user)
                    localStorage.setItem('accessToken', data.access_token)
                    toast.success('로그인 성공!')
                    navigate('/', { replace: true})
                },
                onError: () => {
                    toast.error('로그인 실패!')
                },
            }
        )
    }

    return (
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                {/* 로그인 제목 */}
                <h2 className="text-2xl font-bold text-center text-indigo-600 mb-6">{t("login.title")}</h2>

                {/* 로그인 폼 */}
                <form onSubmit={handleSubmit}>
                {/* 이메일 입력 */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-semibold mb-2">Email</label>
                    <input
                    type="email"
                    placeholder={t("login.email")}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    required
                    />
                </div>

                {/* 비밀번호 입력 */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-semibold mb-2">Password</label>
                    <input
                    type="password"
                    placeholder={t("login.password")}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    required
                    />
                </div>

                {/* 로그인 버튼 */}
                <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-700 transition"
                >
                    {t("login.login")}
                </button>
                </form>
            </div>
    )
}