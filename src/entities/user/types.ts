export type UserRole = 'admin' | 'conference' | 'listener'

export interface User {
    id: string,
    name: string,
    email: string
    role: UserRole
}