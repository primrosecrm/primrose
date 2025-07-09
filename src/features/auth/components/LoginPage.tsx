import { FormEvent, useState } from 'react'
import login from '../api/login'
import { LoginRequest } from '../models/LoginRequest'
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const navigate = useNavigate();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()

        if (!email || !password) {
            setError("Please enter both an email and password.")
            return
        }

        if (password.length < 8) {
            setError("Invalid credentials.")
            return
        }

        setLoading(true)
        setError(null)

        let request = new LoginRequest(email, password)
        const result = await login(request)

        setLoading(false)

        if (!result.isAuthenticated) {
            setError(result.error || "Invalid credentials.")
            return
        }

        navigate("/Home")
    }
    
    return (
        <div className="max-w-md mx-auto mt-20 p-4 border rounded">            
            <h1 className="text-3xl font-bold text-center">Login</h1>

            <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                {error && <p className="text-red-500">{error}</p>}

                <input 
                    type="email"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                    type="password" 
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button 
                    type="submit"
                    disabled={loading}
                >
                    {loading ? 'Logging in...' : 'Login'}
                </button>
            </form>
        </div>
    )
}

export default LoginPage