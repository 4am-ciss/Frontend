import { http, HttpResponse } from "msw"

const mockUser = {
    id: '1',
    name: '김현수',
    email: 'test@test.com',
    password: '123456',
    role: 'admin',
}

const mockSessionList = [
    {
        id: '1',
        title: 'Advanced Research Technologies for Protein Engineering, Cellular Imaging, and Genetic Innovation',
        speaker: 'YunSil Lee, Wonbong Lim',
        isKoreanSession: false,
        isActive: true,
    },
    {
        id: '2',
        title: 'Cancer and Bone Society Asia-Pacific Conference',
        speaker: 'TBD',
        isKoreanSession: false,
        isActive: true,
    },
    {
        id: '3',
        title: 'Empty Session',
        speaker: 'None',
        isKoreanSession: true,
        isActive: false,
    }
    ]

export const handlers = [
    http.post('/login', async( {request}) => {
        const {email, password} = await request.json()

        if (email === mockUser.email && password === mockUser.password) {
            return HttpResponse.json({
                access_token: 'mock-token',
                refresh_token: 'mock-refresh',
                user: {
                    id: mockUser.id,
                    email: mockUser.email,
                    name: mockUser.name,
                    role: mockUser.role,
                },
            })
        }

        return new HttpResponse(null, {status: 401})
    }),
    http.get('/sessions', () => {
        return HttpResponse.json(mockSessionList)
    })
]