export class LoginResponse {
    isAuthenticated: boolean
    error?: string

    constructor(isAuthenticated: boolean, error?: string) {
        this.isAuthenticated = isAuthenticated
        if (error) this.error = error
    }
}