export type UserRole = 'admin' | 'conference' | 'listener'

export interface LoginRequest {
    email: string,
    password: string
}

export interface LoginResponse {
    access_token: string,
    user: {
        id: string,
        name: string,
        email: string,
        role: UserRole
    }
}