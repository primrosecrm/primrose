import axios from '../../../lib/axios'
import { LoginRequest, } from '../models/LoginRequest'
import { LoginResponse } from '../models/LoginResponse'

const login = async (request: LoginRequest): Promise<LoginResponse> => {
    try {
        const body = JSON.stringify(request)
        const response = await axios.post('Authentication/Login', body)

        return new LoginResponse(response.data.isAuthenticated)
    } catch (error: any) {
        const errorMessage =
            error?.response?.data?.error || 'An unexpected error occurred.'

        return new LoginResponse(false, errorMessage)
    }
}

export default login;