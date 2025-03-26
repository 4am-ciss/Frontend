import { http, HttpResponse } from "msw"

const mockUser = {
    id: '1',
    name: '김현수',
    email: 'test@test.com',
    password: '123456',
    role: 'admin',
}

export const handlers = [
    http.post('/login', async( {request}) => {
        const {email, password} = await request.json()

        if (email === mockUser.email && password === mockUser.password) {
            return HttpResponse.json({
                accessToken: 'mock-token',
                refreshToken: 'mock-refresh',
                user: {
                    id: mockUser.id,
                    email: mockUser.email,
                    name: mockUser.name,
                    role: mockUser.role,
                },
            })
        }

        return new HttpResponse(null, {status: 401})
    })
]